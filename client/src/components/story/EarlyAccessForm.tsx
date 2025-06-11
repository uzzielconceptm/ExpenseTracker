import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import EarlyAccessPopup from "./EarlyAccessPopup";
import FreeTrialPopup from "./FreeTrialPopup";

export default function StoryEarlyAccessForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  
  // Removed automatic popup opening to prevent unwanted scrolling

  return (
    <section id="early-access" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
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
                      <h3 className="font-medium text-xl mb-1">Early Beta Access</h3>
                      <p className="text-white/80">
                        Get exclusive access to beta features and updates
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
                  Start organizing your finances in minutes
                </h3>
                <p className="text-muted-foreground mb-8">
                  Join ExactusBooks early access and get special benefits only available to our founding members.
                </p>
                
                <div className="space-y-6">
                  <Button 
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Join the Waitlist
                  </Button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold py-3 rounded-xl transition-all duration-200"
                      onClick={() => window.open('https://calendly.com/exactusbooks/consultation', '_blank')}
                    >
                      Talk to Expert
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary font-semibold py-3 rounded-xl transition-all duration-200"
                      onClick={() => setIsTrialOpen(true)}
                    >
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Early Access Popup Dialog */}
      <EarlyAccessPopup isOpen={isOpen} onOpenChange={setIsOpen} />
      
      {/* Free Trial Popup Dialog */}
      <FreeTrialPopup isOpen={isTrialOpen} onOpenChange={setIsTrialOpen} />
    </section>
  );
}