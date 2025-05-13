import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, X } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Example estimation of monthly receipts based on expenses
      let estimatedReceiptCount = null;
      if (data.monthlyExpenses === 'under-1k') estimatedReceiptCount = 25;
      if (data.monthlyExpenses === '1k-5k') estimatedReceiptCount = 75;
      if (data.monthlyExpenses === '5k-10k') estimatedReceiptCount = 130;
      if (data.monthlyExpenses === 'over-10k') estimatedReceiptCount = 200;
      
      setReceiptCount(estimatedReceiptCount);
      
      // Call API to submit early access request
      await apiRequest('/api/early-access', 'POST', data);
      
      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "Your early access request has been submitted.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0">
        <DialogHeader className="px-6 pt-6">
          <div className="flex justify-between items-center w-full">
            <div>
              <DialogTitle className="text-2xl font-bold">Get Early Access to ExpenseWise</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Fill out the form to request early access to our expense tracking platform
              </DialogDescription>
            </div>
            <DialogClose className="h-6 w-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row">
          {/* Left column - Clean Slate Benefits */}
          <div className="md:w-2/5 bg-primary text-white relative overflow-hidden">
            <div className="relative p-8 h-full flex flex-col justify-between">
              <div className="mb-8">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Start Your Clean Slate
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Painless Onboarding</h3>
                      <p className="text-white/80">
                        We'll help you set up everything in under 10 minutes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">14-Day Free Access</h3>
                      <p className="text-white/80">
                        Experience the full platform with no commitment
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Keep Your Accounting Software</h3>
                      <p className="text-white/80">
                        We integrate with FreshBooks, QuickBooks, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="p-8 md:p-10 md:w-3/5">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="text-6xl text-primary mb-6 mx-auto">
                  <CheckCircle size={64} className="mx-auto" />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">You're All Set!</h3>
                
                {receiptCount && (
                  <div className="bg-muted p-6 rounded-lg mb-6">
                    <p className="text-lg mb-2">
                      It looks like you process <span className="font-bold">~{receiptCount} receipts/month</span>.
                    </p>
                    <p className="text-muted-foreground">
                      We'll handle that for you with ease!
                    </p>
                  </div>
                )}
                
                <p className="text-muted-foreground mb-8">
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <h3 className="font-heading text-xl font-bold mb-6">
                    Tell Us About Your Business
                  </h3>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 border border-border rounded-lg"
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
                            className="w-full px-4 py-3 border border-border rounded-lg"
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
                        <FormLabel className="text-sm font-medium text-foreground">What Best Describes You?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-border rounded-lg">
                              <SelectValue placeholder="Select your business type" />
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
                        <FormLabel className="text-sm font-medium text-foreground">Monthly Business Expenses</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-3 border border-border rounded-lg">
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
                  
                  <DialogFooter className="mt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <i className="fas fa-circle-notch"></i>
                          </span>
                          Processing...
                        </>
                      ) : (
                        "Start My Clean Slate"
                      )}
                    </Button>
                  </DialogFooter>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}