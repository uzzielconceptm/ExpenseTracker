import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useChaos } from "@/lib/ChaosContext";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  businessType: z.string().min(1, { message: "Please select your business type" }),
  monthlyExpenses: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function StoryEarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptCount, setReceiptCount] = useState<number | null>(null);
  const { toast } = useToast();
  const { chaosMode } = useChaos();

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
      // Generate a random number for the estimated receipts
      const estimatedReceipts = getEstimatedReceipts(data.monthlyExpenses || "under-1k");
      setReceiptCount(estimatedReceipts);
      
      await apiRequest("POST", "/api/early-access", data);
      setIsSuccess(true);
      toast({
        title: "We've got your request!",
        description: "You're on your way to expense freedom.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Calculate estimated receipts based on expense volume
  const getEstimatedReceipts = (expenseVolume: string): number => {
    switch (expenseVolume) {
      case "under-1k": return Math.floor(Math.random() * 20) + 20; // 20-40
      case "1k-5k": return Math.floor(Math.random() * 40) + 60; // 60-100
      case "5k-10k": return Math.floor(Math.random() * 60) + 120; // 120-180
      case "over-10k": return Math.floor(Math.random() * 100) + 200; // 200-300
      default: return Math.floor(Math.random() * 50) + 50; // 50-100
    }
  };

  return (
    <section id="early-access" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/50 -z-10"></div>
      
      {/* Random receipt elements in chaos mode */}
      {chaosMode && Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="receipt absolute w-16 h-20 bg-white shadow-md rounded-sm z-0 opacity-10"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2">
              {/* Left column */}
              <div className="p-8 md:p-12 bg-primary text-white">
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Start Your Clean Slate
                </h2>
                
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
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Back to Top
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
                      
                      <p className="text-center text-xs text-muted-foreground">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}