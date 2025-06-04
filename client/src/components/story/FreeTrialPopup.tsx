import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { X, Mail, User, Building } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface FreeTrialPopupProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FreeTrialPopup({ isOpen, onOpenChange }: FreeTrialPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/trial-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Welcome to your free trial!",
          description: "We'll send you trial access details shortly.",
        });
        
        form.reset();
        onOpenChange(false);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        <div className="relative">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 pb-8">
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <DialogHeader>
              <DialogTitle className="text-white text-2xl font-bold mb-2">
                Start Your Free Trial
              </DialogTitle>
              <p className="text-white/90 text-sm">
                Get 14 days of FinMatch Pro features at no cost. No credit card required.
              </p>
            </DialogHeader>
          </div>

          {/* Form */}
          <div className="p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  {...form.register("fullName")}
                  className="h-11"
                />
                {form.formState.errors.fullName && (
                  <p className="text-sm text-red-600">{form.formState.errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Business Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your business email"
                  {...form.register("email")}
                  className="h-11"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  {...form.register("company")}
                  className="h-11"
                />
                {form.formState.errors.company && (
                  <p className="text-sm text-red-600">{form.formState.errors.company.message}</p>
                )}
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium"
                >
                  {isSubmitting ? "Starting Your Trial..." : "Start Free Trial"}
                </Button>
              </div>

              <div className="text-center text-xs text-foreground/60 pt-2">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}