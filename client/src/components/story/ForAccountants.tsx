import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ForAccountants() {
  return (
    <section id="for-accountants" className="py-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for solopreneurs and bookkeepers
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              FinMatch bridges the gap between clients and accountants with shared access and perfect documentation.
            </p>
          </div>

          {/* Trust block */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover-lift mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Used by early-access accountants in the U.S.</h3>
                <p className="text-foreground/70">
                  Accountants love the audit-ready data and organized expense categories
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Gmail icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#4285F4" d="M22.1,4.2H1.9c-0.5,0-0.9,0.4-0.9,0.9v13.7c0,0.5,0.4,0.9,0.9,0.9h20.2c0.5,0,0.9-0.4,0.9-0.9V5.1 C23,4.6,22.6,4.2,22.1,4.2z"/>
                    <path fill="#FFFFFF" d="M12,14.8L1.9,7.2V5.1c0-0.5,0.4-0.9,0.9-0.9h18.3c0.5,0,0.9,0.4,0.9,0.9v2.1L12,14.8z"/>
                    <path fill="#EA4335" d="M5.6,7.9l6.4,4.5l6.4-4.5v8.6H5.6V7.9z"/>
                  </svg>
                </div>
                
                {/* Bank icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#1A73E8" d="M12,3L4,7v2h16V7L12,3z M5,10v7h2v-7H5z M9,10v7h2v-7H9z M13,10v7h2v-7H13z M17,10v7h2v-7H17z M4,19h16v2H4 V19z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits for accountants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover-lift">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="text-primary mr-2 h-6 w-6" />
                Invite clients for free
              </h3>
              <p className="text-foreground/80">
                Your clients can share their data with you securely. No need for messy email attachments or disorganized receipts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover-lift">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="text-primary mr-2 h-6 w-6" />
                Ready for tax season
              </h3>
              <p className="text-foreground/80">
                Export reports in the format you need for seamless integration with your tax preparation software.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover-lift">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="text-primary mr-2 h-6 w-6" />
                Every receipt accessible
              </h3>
              <p className="text-foreground/80">
                View the original receipt for any transaction with a single click. Perfect for audits and verifications.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover-lift">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <CheckCircle className="text-primary mr-2 h-6 w-6" />
                Custom export options
              </h3>
              <p className="text-foreground/80">
                Download data in CSV, Excel, or PDF formats. Compatible with QuickBooks, Xero, and other accounting systems.
              </p>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <Button 
              onClick={() => window.location.href = '#early-access'}
              size="lg" 
              className="gradient-btn text-white text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}