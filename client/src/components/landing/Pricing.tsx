import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      description: "Manual receipt uploads and transaction matching for solo users.",
      price: null,
      frequency: "",
      features: [
        "Manual receipt uploads",
        "Transaction matching",
        "Basic categorization",
        "Export capabilities"
      ],
      popular: false,
      buttonText: "Get Early Access",
      buttonLink: "#early-access"
    },
    {
      name: "Pro",
      description: "Automated extraction from email, smart categorization, and bank feed syncing.",
      price: null,
      frequency: "",
      features: [
        "Email receipt extraction",
        "Smart categorization",
        "Bank feed syncing",
        "Advanced reporting",
        "Custom categories"
      ],
      popular: true,
      buttonText: "Get Early Access",
      buttonLink: "#early-access"
    },
    {
      name: "For Accountants",
      description: "Multi-client dashboard, smart rules, and accountant-ready reports.",
      price: null,
      frequency: "",
      features: [
        "Multi-client dashboard",
        "Smart automation rules",
        "Accountant-ready reports",
        "Client collaboration tools",
        "Advanced analytics"
      ],
      popular: false,
      buttonText: "Get Early Access",
      buttonLink: "#early-access"
    }
  ];

  return (
    <section id="pricing" className="py-6 md:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Choose Your Plan</h2>
          <p className="text-neutral-700 text-lg max-w-3xl mx-auto">
            Select the plan that fits your business needs and workflow.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              frequency={plan.frequency}
              features={plan.features}
              popular={plan.popular}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
              index={index}
            />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-700">
            All plans include comprehensive support and regular updates.
          </p>
        </div>
      </div>
    </section>
  );
}
