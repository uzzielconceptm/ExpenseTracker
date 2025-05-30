import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for new solopreneurs",
      price: null,
      frequency: "",
      features: [
        "Up to 50 receipts/month",
        "Email receipt scanning",
        "Basic expense reports",
        "1 bank connection"
      ],
      popular: false,
      buttonText: "Get Early Access",
      buttonLink: "#early-access"
    },
    {
      name: "Professional",
      description: "For growing solo businesses",
      price: null,
      frequency: "",
      features: [
        "Unlimited receipts",
        "Advanced receipt matching",
        "Custom expense categories",
        "5 bank connections",
        "Quarterly tax reports"
      ],
      popular: true,
      buttonText: "Get Early Access",
      buttonLink: "#early-access"
    },
    {
      name: "Business",
      description: "For established businesses",
      price: null,
      frequency: "",
      features: [
        "Everything in Professional",
        "Priority support",
        "Unlimited bank connections",
        "Accountant access",
        "API access"
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
