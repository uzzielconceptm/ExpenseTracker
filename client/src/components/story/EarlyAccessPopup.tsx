import { useEffect, useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Sparkles } from "lucide-react";

// Define form schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  businessType: z.string().min(1, "Please select a business type"),
  monthlyExpenses: z.string().min(1, "Please select a range")
});

type FormValues = z.infer<typeof formSchema>;

export default function EarlyAccessPopup() {
  const { chaosMode } = useChaos();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptCount, setReceiptCount] = useState<number | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessType: "",
      monthlyExpenses: ""
    }
  });

  useEffect(() => {
    // Show the popup after 3 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate a random number of receipts for personalization
      const estimatedReceipts = Math.floor(Math.random() * 50) + 10;
      setReceiptCount(estimatedReceipts);
      
      // Submit form data to API
      await apiRequest("POST", "/api/early-access", data);
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      // You could add error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden max-w-4xl">
        <div className={`grid md:grid-cols-2 ${chaosMode ? 'chaos-container' : ''}`}>
          {/* Left column */}
          <div className="p-8 md:p-12 bg-primary text-white">
            <DialogHeader>
              <DialogTitle className="font-heading text-3xl font-bold mb-6">
                Start Your Clean Slate
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-1">Painless Onboarding</h3>
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
                  <h3 className="font-medium text-xl mb-1">14-Day Free Access</h3>
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
                  <h3 className="font-medium text-xl mb-1">Concierge Support</h3>
                  <p className="text-white/80">
                    Our team helps with bank connections and setup
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <p className="italic">
                "I should have started using this years ago. My only regret is all the time I wasted before."
              </p>
              <p className="mt-2 font-medium">— Alex, Freelance Photographer</p>
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="p-8 md:p-12">
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
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <h3 className="font-heading text-2xl font-bold mb-6">
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
                  
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-xs text-muted-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Maybe Later
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}