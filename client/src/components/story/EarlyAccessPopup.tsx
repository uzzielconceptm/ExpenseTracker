import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, X, Loader2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogHeader,
  DialogDescription, 
  DialogFooter, 
  DialogClose 
} from "@/components/ui/dialog";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  businessType: z.string().min(1, { message: "Please select your business type" }),
  monthlyExpenses: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface EarlyAccessPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EarlyAccessPopup({ isOpen, onOpenChange }: EarlyAccessPopupProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptCount, setReceiptCount] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessType: "",
      monthlyExpenses: "",
    },
  });

  // Use TanStack Query mutation for API call
  const earlyAccessMutation = useMutation({
    mutationFn: async (formData: FormValues) => {
      const response = await apiRequest("POST", "/api/early-access", formData);
      return await response.json();
    },
    onSuccess: (data) => {
      // Calculate estimated receipts based on expenses
      let estimatedReceiptCount = null;
      const monthlyExpenses = form.getValues("monthlyExpenses");
      if (monthlyExpenses === 'under-1k') estimatedReceiptCount = 25;
      if (monthlyExpenses === '1k-5k') estimatedReceiptCount = 75;
      if (monthlyExpenses === '5k-10k') estimatedReceiptCount = 130;
      if (monthlyExpenses === 'over-10k') estimatedReceiptCount = 200;
      
      setReceiptCount(estimatedReceiptCount);
      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your early access request has been submitted.",
      });
      
      // Invalidate any queries that might depend on this data
      queryClient.invalidateQueries({ queryKey: ["/api/early-access"] });
    },
    onError: (error: Error) => {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: error.message || "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: FormValues) => {
    earlyAccessMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-4 animate-fadeIn">
        <DialogHeader className="mb-4">
          <div className="flex justify-between items-center w-full">
            <div>
              <DialogTitle className="text-xl font-bold">Get Early Access</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Sign up below to join our early access program.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="text-center py-4">
            <div className="text-5xl text-primary mb-4 mx-auto">
              <CheckCircle size={48} className="mx-auto" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">You're All Set!</h3>
            
            {receiptCount && (
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-base mb-1">
                  It looks like you process <span className="font-bold">~{receiptCount} receipts/month</span>.
                </p>
                <p className="text-muted-foreground text-sm">
                  We'll handle that for you with ease!
                </p>
              </div>
            )}
            
            <p className="text-muted-foreground text-sm mb-6">
              We've received your request for early access. Check your email for next steps within 24 hours.
            </p>
            
            <Button
              variant="outline"
              className="border-primary text-primary"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="w-full px-3 py-2 border border-border rounded-md"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="you@example.com" 
                        type="email"
                        className="w-full px-3 py-2 border border-border rounded-md"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Business Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-3 py-2 border border-border rounded-md">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="creator">Content Creator</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="monthlyExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Monthly Expenses</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-3 py-2 border border-border rounded-md">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000/month</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000/month</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000/month</SelectItem>
                        <SelectItem value="over-10k">Over $10,000/month</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter className="mt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-md px-4 py-2"
                  disabled={earlyAccessMutation.isPending}
                >
                  {earlyAccessMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Apply for Early Access"
                  )}
                </Button>
              </DialogFooter>
              
              <p className="text-center text-xs text-muted-foreground">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}