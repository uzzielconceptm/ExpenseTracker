import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  businessType: z.string().min(1, { message: "Please select your business type" }),
  monthlyExpenses: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function EarlyAccessForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      await apiRequest("POST", "/api/early-access", data);
      setIsSuccess(true);
      toast({
        title: "Successfully submitted!",
        description: "We'll be in touch shortly with next steps.",
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

  return (
    <section id="early-access" className="py-16 md:py-24 bg-neutral-100 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Get Early Access</h2>
              <p className="text-neutral-700 mb-6">
                Be among the first to experience ExpenseWise and help shape the future of expense tracking for solopreneurs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>14-day free trial</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>No credit card required</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Priority onboarding support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>
            
            <div>
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="text-6xl text-accent mb-6">
                    <CheckCircle size={56} />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl mb-4">Thanks for Your Interest!</h3>
                  <p className="text-neutral-700 mb-8">
                    We've received your request for early access. We'll be in touch shortly with next steps.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
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
                          <FormLabel className="text-sm font-medium text-neutral-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              type="email"
                              className="w-full px-4 py-3 border border-neutral-300 rounded-lg"
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
                          <FormLabel className="text-sm font-medium text-neutral-700">Business Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg">
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
                          <FormLabel className="text-sm font-medium text-neutral-700">Monthly Expenses (Approximate)</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full px-4 py-3 border border-neutral-300 rounded-lg">
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
                        "Get Early Access"
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
