import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import FeatureCard from "@/components/ui/feature-card";

export default function Features() {
  const features = [
    {
      id: "feature-1",
      icon: "receipt",
      color: "primary",
      title: "Audit Trail Automation",
      description: "Automatically organize and store your receipts for tax-ready audit trails.",
      details: "Our system organizes all your expense records chronologically and by category, ensuring you have a complete and accurate audit trail ready for tax season."
    },
    {
      id: "feature-2",
      icon: "credit-card",
      color: "accent",
      title: "Auto-match Receipts",
      description: "Connect your bank and credit cards for automatic receipt matching and reconciliation.",
      details: "ExpenseFlow uses intelligent algorithms to match your receipts with corresponding bank transactions, eliminating manual reconciliation and ensuring every expense is accounted for."
    },
    {
      id: "feature-3",
      icon: "envelope-open-text",
      color: "primary",
      title: "Email Receipt Scanning",
      description: "Automatically detect and process receipts from your Gmail or Outlook inbox.",
      details: "Connect your email accounts to ExpenseFlow, and we'll automatically scan for receipts, extract the relevant data, and add them to your expense records without any manual intervention."
    },
    {
      id: "feature-4",
      icon: "upload",
      color: "accent",
      title: "Manual Receipt Uploads",
      description: "Easily upload and scan paper receipts with smart data extraction.",
      details: "Take photos of your paper receipts or upload existing images, and our OCR technology will extract all the important information and match it to your transactions."
    },
    {
      id: "feature-5",
      icon: "tasks",
      color: "primary",
      title: "Unmatched Receipt Workflow",
      description: "Quick tagging and categorization tools for unmatched receipts.",
      details: "For receipts that don't automatically match to transactions, our streamlined workflow lets you quickly categorize, tag, and resolve them with just a few clicks."
    },
    {
      id: "feature-6",
      icon: "chart-pie",
      color: "accent",
      title: "Expense Analytics",
      description: "Get insights into your spending patterns with visual dashboards.",
      details: "Track your business expenses by category, time period, and project with intuitive visualizations that help you understand where your money is going."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-100 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Powerful Features for Busy Solopreneurs</h2>
          <p className="text-neutral-700 text-lg max-w-3xl mx-auto">
            Smart tools that save you time and eliminate the headache of expense management.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              id={feature.id}
              icon={feature.icon}
              color={feature.color}
              title={feature.title}
              description={feature.description}
              details={feature.details}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
