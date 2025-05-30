import { motion } from "framer-motion";
import { Shield, Lock, Database, EyeOff, Fingerprint, Key } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SecurityFeatures() {
  const securityFeatures = [
    {
      title: "256-bit SSL Encryption",
      description: "Bank-level security ensures your financial data is always protected during transmission",
      icon: <Lock className="h-6 w-6" />,
      color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
      title: "Minimal Data Collection",
      description: "We only collect what's necessary for service provision, protecting your privacy",
      icon: <EyeOff className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      title: "Data Backup & Recovery",
      description: "Your information is backed up across multiple databases for reliable recovery",
      icon: <Database className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security for accessing your expense data",
      icon: <Key className="h-6 w-6" />,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
    },
    {
      title: "Biometric Authentication",
      description: "Use your fingerprint or face recognition to quickly access your account on mobile",
      icon: <Fingerprint className="h-6 w-6" />,
      color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
    },
    {
      title: "Secure Account Recovery",
      description: "Multi-step verification process ensures only you can reset your account",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
    }
  ];

  return (
    <section id="security" className="py-8 relative">
      {/* FreshBooks-inspired security visual element */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 mb-5 rounded-full bg-primary/10"
          >
            <Shield className="h-6 w-6 text-primary" />
          </motion.div>
          
          <div className="flex flex-col items-center justify-center mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Enterprise-Grade Security
            </h2>
          </div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Your financial data deserves the best protection. ExpenseWise uses the same security technology trusted by banks and financial institutions.
          </p>
        </div>
        
        {/* FreshBooks-inspired security cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-all"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* FreshBooks-inspired security badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-lg shadow-md border border-green-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-xl mb-1">Security Verified</h3>
                <p className="text-muted-foreground">SOC 2 Type II Compliant</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              ExpenseWise undergoes regular security audits and penetration testing to ensure your data remains protected against the latest threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="p-2 bg-gray-100 rounded text-xs font-medium text-gray-600">GDPR Compliant</div>
              <div className="p-2 bg-gray-100 rounded text-xs font-medium text-gray-600">CCPA Compliant</div>
              <div className="p-2 bg-gray-100 rounded text-xs font-medium text-gray-600">256-bit Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}