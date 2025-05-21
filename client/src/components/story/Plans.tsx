import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, BadgeCheck } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      description: "Perfect for solopreneurs just getting started",
      features: [
        "Auto email receipt capture",
        "Manual bank matching",
        "Unlimited receipts",
        "Basic reports"
      ],
      isPopular: false
    },
    {
      name: "Pro",
      price: "$25",
      description: "Our most popular plan for serious business owners",
      features: [
        "Everything in Basic",
        "Auto bank + card matching",
        "Tax-category tagging",
        "Invite your accountant",
        "Priority support"
      ],
      isPopular: true
    },
    {
      name: "Team",
      price: "$37",
      description: "For teams that need advanced features",
      features: [
        "Everything in Pro",
        "Shared team dashboard",
        "Accountant collaboration features",
        "Export to CSV, PDF, TurboTax"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try FinMatch free for 15 days
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            No credit card required. Choose your plan when you're ready.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl border ${
                plan.isPopular 
                  ? "border-primary shadow-lg" 
                  : "border-border shadow-md"
              } overflow-hidden hover-lift`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg flex items-center">
                    <BadgeCheck className="h-3.5 w-3.5 mr-1" />
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="bg-primary/5 -mx-6 -mt-6 p-6 mb-6">
                  <div className="font-medium text-sm text-center mb-4">15-DAY FREE TRIAL</div>
                  <h3 className="text-2xl font-bold mb-1 text-center">{plan.name}</h3>
                  <div className="text-center mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-foreground/60">/month</span>
                  </div>
                  <p className="text-sm text-center text-foreground/70">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? "gradient-btn text-white" 
                      : "bg-background hover:bg-muted border border-border"
                  }`}
                  onClick={() => window.location.href = '#early-access'}
                >
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}