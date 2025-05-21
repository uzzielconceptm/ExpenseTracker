import { motion } from "framer-motion";
import { Mail, CreditCard, FileCheck, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Three simple steps to organize your business expenses
          </p>
        </div>
        
        {/* 3-step visual process */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Line connecting steps */}
            <div className="hidden md:block absolute top-24 left-1/2 right-0 h-0.5 bg-muted" style={{ width: "60%", transform: "translateX(-30%)" }}></div>
            
            {/* Step 1 */}
            <div className="relative bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect your email</h3>
                <p className="text-foreground/80">
                  Securely link your Gmail or Outlook account. We'll automatically find receipts without any manual searching.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                
                <CreditCard className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">We find receipts and match them</h3>
                <p className="text-foreground/80">
                  Our AI automatically extracts receipt data and matches it to your bank and card transactions.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                
                <FileCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">You get clean, audit-ready records</h3>
                <p className="text-foreground/80">
                  Access organized expenses with categorized transactions and downloadable reports anytime.
                </p>
              </div>
            </div>
          </div>
          
          {/* Paper receipts section */}
          <div className="mt-20 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Camera className="h-10 w-10 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">For Paper Receipts Too</h3>
                <p className="text-foreground/80 mb-4">
                  Have physical receipts? No problem. Simply snap a photo with your phone, and FinMatch's 
                  OCR technology extracts all the data automatically. All your receipts organized in one place — 
                  digital and physical.
                </p>
                <div className="flex items-center">
                  <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-foreground/90 text-sm">Automatic text recognition for paper receipts</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <Button 
              onClick={() => window.location.href = '#early-access'}
              size="lg" 
              className="gradient-btn text-white text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Get early access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}