import { motion } from "framer-motion";
import { Mail, CreditCard, FileCheck, Camera, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
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
            <div className="relative card-modern p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center text-white font-medium text-sm">
                    01
                  </div>
                </div>
                
                <Mail className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-lg font-bold mb-3">Connect your email</h3>
                <p className="text-foreground/70 text-sm">
                  Securely link your Gmail or Outlook account. We'll automatically find receipts without any manual searching.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative card-modern p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center text-white font-medium text-sm">
                    02
                  </div>
                </div>
                
                <CreditCard className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-lg font-bold mb-3">We find receipts and match them</h3>
                <p className="text-foreground/70 text-sm">
                  Our AI automatically extracts receipt data and matches it to your bank and card transactions.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative card-modern p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center text-white font-medium text-sm">
                    03
                  </div>
                </div>
                
                <FileCheck className="h-10 w-10 text-primary mb-5" />
                <h3 className="text-lg font-bold mb-3">You get clean, audit-ready records</h3>
                <p className="text-foreground/70 text-sm">
                  Access organized expenses with categorized transactions and downloadable reports anytime.
                </p>
              </div>
            </div>
          </div>
          
          {/* Paper receipts section */}
          <div className="mt-24 max-w-3xl mx-auto card-modern p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              
              <div>
                <span className="text-primary/80 font-medium text-sm block mb-2">Optional Feature</span>
                <h3 className="text-xl font-bold mb-3 subtle-heading-underline">For Paper Receipts Too</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Have physical receipts? No problem. Simply snap a photo with your phone, and FinMatch's 
                  OCR technology extracts all the data automatically. All your receipts organized in one place — 
                  digital and physical.
                </p>
                <div className="flex items-center mt-4">
                  <span className="flex-shrink-0 h-5 w-5 rounded-sm bg-primary/10 flex items-center justify-center mr-2">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-foreground/80 text-sm">Automatic text recognition for paper receipts</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <Button 
              onClick={() => window.location.href = '#early-access'}
              size="default"
              className="gradient-btn text-white font-medium px-6 py-2 rounded-md shadow-sm text-sm"
            >
              Get early access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}