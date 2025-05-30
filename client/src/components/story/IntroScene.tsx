import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroScene() {
  const { chaosMode } = useChaos();
  
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Items that will float around in chaos mode
  const chaosItems = [
    { id: 1, type: 'receipt', top: '15%', left: '10%', size: 80 },
    { id: 2, type: 'receipt', top: '30%', left: '80%', size: 60 },
    { id: 3, type: 'receipt', top: '70%', left: '20%', size: 70 },
    { id: 4, type: 'receipt', top: '50%', left: '90%', size: 50 },
    { id: 5, type: 'receipt', top: '80%', left: '60%', size: 90 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-white via-accent/10 to-white subtle-pattern"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(21, 118, 92, 0.05) 0%, transparent 30%),
                            radial-gradient(circle at 70% 80%, rgba(21, 118, 92, 0.03) 0%, transparent 30%)`
        }}
      />
      
      {/* Floating receipts in chaos mode */}
      {chaosMode && chaosItems.map(item => (
        <motion.div
          key={item.id}
          className="receipt absolute z-10"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size * 1.3,
            background: 'white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.06)'
          }}
          initial={{ rotate: 0, y: 0 }}
          animate={{ 
            rotate: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 4, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <div className="h-full w-full p-2">
            <div className="h-2 w-2/3 bg-accent mb-2 rounded"></div>
            <div className="h-2 w-full bg-muted mb-2 rounded"></div>
            <div className="h-2 w-1/2 bg-muted mb-2 rounded"></div>
            <div className="h-2 w-3/4 bg-muted mb-2 rounded"></div>
          </div>
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3"
          >
            <span className="inline-block text-primary font-medium text-lg mb-4">Smart Expense Management</span>
          </motion.div>
          
          <motion.h1 
            className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block centered-heading-underline">Receipts, bank transactions, and expenses</span>—organized in one place.
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Automatically extract receipts from email and match them to your bank transactions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToEarlyAccess}
              size="lg" 
              className="gradient-btn text-white font-medium px-8 py-6 text-sm rounded-md shadow-sm"
            >
              Get early access
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              size="lg" 
              variant="outline"
              className="text-sm font-medium px-8 py-6 rounded-md shadow-sm border border-neutral-200 hover:bg-neutral-50 text-foreground/80"
            >
              See how it works
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Removed scroll indicator arrow */}
      
      {/* Abstract wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="rgba(176, 253, 240, 0.15)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
}