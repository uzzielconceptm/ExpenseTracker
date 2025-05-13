import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function Pricing() {
  const [ref] = useScrollReveal<HTMLDivElement>();
  
  // Calculate the value of time saved
  const calculateTimeSavings = (hoursPerWeek: number, hourlyRate: number) => {
    const weeksPerYear = 52;
    const annualSavings = hoursPerWeek * hourlyRate * weeksPerYear;
    return annualSavings;
  };
  
  // Sample hourly rates
  const sampleRates = [
    { role: "Freelancer", rate: 50 },
    { role: "Consultant", rate: 100 },
    { role: "Agency Owner", rate: 150 }
  ];
  
  // Features included in the plan
  const features = [
    "Unlimited receipt scanning & processing",
    "Automatic email receipt detection",
    "Bank & credit card integration",
    "Smart transaction matching",
    "Real-time expense categorization",
    "One-click tax reports",
    "Audit-ready record keeping",
    "Unlimited cloud storage",
    "Mobile app access",
    "Priority support"
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block p-2 bg-accent/20 rounded-lg text-accent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock size={24} />
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Buy Back Your Time
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            You can't make more time, but you can stop wasting it on expense tracking
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left side: Plan details */}
              <div className="p-8 md:p-12 md:w-1/2">
                <h3 className="font-heading text-2xl font-bold mb-2">ExpenseFlow Pro</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground ml-2 mb-1">/month</span>
                </div>
                
                <div className="mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 text-sm">
                      <strong>Try free for 14 days.</strong> No credit card required.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check size={18} className="text-primary shrink-0 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6">
                  Start My Clean Slate
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Cancel anytime. No long-term contracts.
                </p>
              </div>
              
              {/* Right side: Value calculation */}
              <div className="bg-muted p-8 md:p-12 md:w-1/2">
                <h3 className="font-heading text-xl font-bold mb-6">
                  The Real Value: Your Time
                </h3>
                
                <p className="mb-6 text-muted-foreground">
                  Most solopreneurs spend 3-5 hours per week on manual expense tracking.
                  At your hourly rate, that adds up fast:
                </p>
                
                <div className="space-y-6 mb-8">
                  {sampleRates.map((item, index) => {
                    const savings = calculateTimeSavings(4, item.rate);
                    return (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-medium">{item.role}</p>
                          <p className="text-muted-foreground">${item.rate}/hour</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p>Annual time value:</p>
                          <p className="font-bold text-lg">${savings.toLocaleString()}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-primary font-medium mb-2">More than just money</p>
                  <p className="text-sm">
                    What would you do with an extra 3-5 hours every week? 
                    Take on more clients? Learn a new skill? Or simply relax?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}