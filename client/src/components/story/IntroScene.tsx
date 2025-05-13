import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroScene() {
  const { chaosMode } = useChaos();
  
  const scrollToJourney = () => {
    const element = document.getElementById('journey');
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-white to-muted"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(210, 220, 255, 0.2) 0%, transparent 30%),
                            radial-gradient(circle at 80% 70%, rgba(255, 210, 230, 0.2) 0%, transparent 40%)`
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
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '4px'
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
          <motion.h1 
            className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remember when tracking expenses meant panic during tax season?
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From overflowing shoeboxes to missing receipts, the nightmare of expense tracking
            stops here. It's time for a better way.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToJourney}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              Let's Fix That
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown size={36} className="text-primary animate-bounce" />
      </motion.div>
      
      {/* "Messy desk" illustration as a background element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-80 bg-contain bg-bottom bg-no-repeat z-10"
           style={{ 
             backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=60')`,
             opacity: 0.2,
             backgroundSize: 'contain',
             filter: 'grayscale(80%)'
           }}>
      </div>
    </section>
  );
}