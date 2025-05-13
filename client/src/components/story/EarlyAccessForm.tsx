import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EarlyAccessPopup from "./EarlyAccessPopup";

export default function StoryEarlyAccessForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="early-access" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/50 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="py-12"
          >
            <h2 className="font-heading text-4xl font-bold mb-6">
              Start Your Clean Slate Today
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join ExpenseWise early access and transform your expense tracking experience from chaotic to streamlined.
            </p>
            
            <Button 
              onClick={() => setIsOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg"
            >
              Apply for Early Access
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Early Access Popup Dialog */}
      <EarlyAccessPopup isOpen={isOpen} onOpenChange={setIsOpen} />
    </section>
  );
}