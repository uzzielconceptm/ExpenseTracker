import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import EarlyAccessPopup from "./EarlyAccessPopup";

export default function StoryEarlyAccessForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="early-access" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/50 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2">
              {/* Left column */}
              <div className="p-8 md:p-12 bg-primary text-white">
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Start Your Clean Slate
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">Painless Onboarding</h3>
                      <p className="text-white/80">
                        We'll help you set up everything in under 10 minutes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">14-Day Free Access</h3>
                      <p className="text-white/80">
                        Experience the full platform with no commitment
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-2 rounded mr-4 mt-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">Keep Your Accounting Software</h3>
                      <p className="text-white/80">
                        We integrate with FreshBooks, QuickBooks, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Ready to Transform Your Finances?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Join ExpenseWise early access and get special benefits only available to our founding members.
                </p>
                
                <Button 
                  onClick={() => setIsOpen(true)}
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
                >
                  Apply for Early Access
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Early Access Popup Dialog */}
      <EarlyAccessPopup isOpen={isOpen} onOpenChange={setIsOpen} />
    </section>
  );
}