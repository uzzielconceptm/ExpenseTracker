import { useRef } from "react";
import AnimatedReceipt from "@/components/ui/animated-receipt";
import { Button } from "@/components/ui/button";
import { Camera, Mail, CreditCard, Search, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock receipt scanning demo
  const ReceiptScanDemo = () => {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-border rounded-lg p-4 text-center w-full">
            <Camera size={36} className="mx-auto mb-2 text-muted-foreground" />
            <Button 
              variant="outline" 
              size="sm"
              className="mx-auto"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = () => {
                  alert('Receipt uploaded! In a real app, this would be processed.');
                };
                input.click();
              }}
            >
              Upload Receipt
            </Button>
          </div>
        </div>
          
        <AnimatedReceipt className="w-full">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-bold">Office Supply Co.</p>
              <p className="font-bold">$47.99</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Date: May 15, 2023</p>
              <div className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                Office Supplies
              </div>
            </div>
            <div className="pt-2 mt-2 border-t border-border text-center">
              <Check size={16} className="inline mr-1 text-green-500" />
              <span className="text-sm text-green-600">Matched to your bank transaction</span>
            </div>
          </div>
        </AnimatedReceipt>
      </div>
    );
  };

  // Email scanning demo
  const EmailScanDemo = () => {
    return (
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-primary/30">
          <div className="flex items-start gap-2">
            <Mail size={18} className="mt-1 text-primary" />
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                <p className="font-medium text-sm">Uber Receipt</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <p className="text-xs text-muted-foreground">Thanks for riding with Javier...</p>
              <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
                <div>
                  <p className="text-xs text-muted-foreground">TOTAL</p>
                  <p className="font-medium text-sm">$24.50</p>
                </div>
                <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full flex items-center">
                  <Check size={12} className="mr-1" /> Processed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Bank matching demo
  const BankMatchingDemo = () => {
    return (
      <div className="space-y-3">
        <div className="bg-white rounded-lg shadow-sm border border-border">
          <div className="p-3 border-b border-border bg-muted/30">
            <h5 className="font-medium text-sm">Transaction Details</h5>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <CreditCard size={18} className="text-primary mr-2" />
                <div>
                  <p className="font-medium text-sm">Office Supply Co.</p>
                  <p className="text-xs text-muted-foreground">May 15, 2023</p>
                </div>
              </div>
              <p className="font-bold text-sm">$47.99</p>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">Status</p>
                <div className="flex items-center text-green-600">
                  <Check size={12} className="mr-1" />
                  <span className="text-xs">Matched with receipt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
            From Shoebox to Streamlined
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl">
            Follow the journey from chaotic receipt management to automated expense tracking
          </p>
        </div>
        
        {/* Problem and Solution Block - Modern Layout */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* The Problem */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-left">The Problem</h3>
              
              <p className="mb-6">Remember rummaging through shoeboxes of receipts when tax season arrives? Trying to match crumpled paper to bank statements manually?</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">📄</span>
                  <span>Faded thermal paper receipts you can barely read</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔍</span>
                  <span>Missing documentation for important purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">⏱️</span>
                  <span>Hours spent reconciling expenses with statements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">😓</span>
                  <span>The anxiety of potential audits looming over you</span>
                </li>
              </ul>
              
              <div className="relative p-4 border border-border bg-muted/30 rounded-lg">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-[4/5] bg-white rounded shadow-sm transform rotate-1"
                      style={{ 
                        transformOrigin: "center",
                        rotate: (Math.random() * 20 - 10) + "deg",
                        opacity: Math.random() * 0.5 + 0.5
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: 0,
                        opacity: 1,
                        zIndex: 10
                      }}
                    >
                      <div className="h-full w-full p-1 flex flex-col">
                        <div className="h-1 w-1/2 bg-accent mb-1 rounded"></div>
                        <div className="h-1 w-3/4 bg-muted mb-1 rounded"></div>
                        <div className="h-1 w-1/3 bg-muted rounded"></div>
                        <div className="mt-auto h-2 w-full flex justify-end">
                          <div className="h-2 w-2/5 bg-muted rounded"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <Search size={16} className="inline mr-1" />
                  <span>Which one was for that client dinner in March?</span>
                </div>
              </div>
            </div>
            
            {/* Our Solution */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-left">Our Solution</h3>
              
              <p className="mb-6">What if your receipts could organize themselves? ExpenseWise monitors your email for receipts and automatically processes them.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">📬</span>
                  <span>Connect your Gmail or Outlook account just once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔍</span>
                  <span>We automatically detect receipts in your emails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">✅</span>
                  <span>All data is extracted and categorized instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🚗</span>
                  <span>Works with Uber, Amazon, airline tickets, and more</span>
                </li>
              </ul>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <EmailScanDemo />
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-10 text-left">How ExactusBooks Works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Connect Accounts */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-left">Connect All Accounts</h3>
              
              <p className="mb-6">Seamlessly connect your bank accounts and cards to bring all your financial data into one place.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🏦</span>
                  <span>Connect unlimited bank accounts and credit cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔒</span>
                  <span>Secure connections using bank-level encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔄</span>
                  <span>Auto-import transactions daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">📊</span>
                  <span>View all your finances in one dashboard</span>
                </li>
              </ul>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border border-border rounded-lg bg-card hover:border-primary cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <span className="font-bold text-blue-700">C</span>
                    </div>
                    <span className="text-sm">Chase</span>
                  </div>
                  
                  <div className="p-3 border border-border rounded-lg bg-card hover:border-primary cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <span className="font-bold text-red-700">B</span>
                    </div>
                    <span className="text-sm">Bank of America</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Perfect Matching */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-left">Perfect Matching</h3>
              
              <p className="mb-6">Say goodbye to manual reconciliation. ExpenseWise automatically matches your receipts to your bank transactions.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔄</span>
                  <span>Connect your bank accounts and credit cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🤖</span>
                  <span>Our AI matches receipts to transactions automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">🔔</span>
                  <span>Get alerted about missing receipts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-lg">✅</span>
                  <span>Enjoy 100% reconciliation with minimal effort</span>
                </li>
              </ul>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <BankMatchingDemo />
              </div>
            </div>
          </div>
        </div>
        
        {/* Paper Receipts Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-border hover-lift">
            <h3 className="text-2xl font-bold mb-6 text-left">Still Use Paper? We've Got You</h3>
            
            <p className="mb-6">Sometimes you still get paper receipts. No problem! ExpenseWise makes it easy to digitize them in seconds.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-lg">📱</span>
                    <span>Snap a photo with our mobile app</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-lg">👁️</span>
                    <span>OCR technology extracts all relevant details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-lg">🔄</span>
                    <span>Data is processed and matched to transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-lg">☁️</span>
                    <span>Original receipts are securely stored in the cloud</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <ReceiptScanDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}