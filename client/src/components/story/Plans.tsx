import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, BadgeCheck } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Basic",
      description: "Manual receipt uploads and transaction matching for solo users.",
      features: [
        "Manual receipt uploads",
        "Transaction matching",
        "Basic categorization",
        "Export capabilities"
      ],
      isPopular: false
    },
    {
      name: "Pro",
      description: "Automated extraction from email, smart categorization, and bank feed syncing.",
      features: [
        "Email receipt extraction",
        "Smart categorization",
        "Bank feed syncing",
        "Advanced reporting",
        "Custom categories"
      ],
      isPopular: true
    },
    {
      name: "For Accountants",
      description: "Multi-client dashboard, smart rules, and accountant-ready reports.",
      features: [
        "Multi-client dashboard",
        "Smart automation rules",
        "Accountant-ready reports",
        "Client collaboration tools",
        "Advanced analytics"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <span className="text-primary font-semibold text-sm px-4 py-1">Choose Your Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Select the plan that fits your business needs and workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl border ${
                plan.isPopular 
                  ? "border-2 border-primary shadow-xl transform scale-105" 
                  : "border-slate-200 shadow-lg"
              } overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg flex items-center">
                    <BadgeCheck className="h-3.5 w-3.5 mr-1" />
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 -mx-8 -mt-8 p-8 mb-8">
                  <div className="font-semibold text-sm text-center mb-6 text-primary">EARLY ACCESS</div>
                  <h3 className="text-3xl font-bold mb-6 text-center text-slate-900">{plan.name}</h3>
                  <p className="text-base text-center text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-6 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-slate-700 text-base leading-relaxed">{feature}</span>
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
                  Get Early Access
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}