import { useRef } from "react";
import TimeNode from "@/components/ui/time-node";
import TryThisCard from "@/components/ui/try-this-card";
import AnimatedReceipt from "@/components/ui/animated-receipt";
import { Button } from "@/components/ui/button";
import { Camera, Mail, CreditCard, Search, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock receipt scanning demo
  const ReceiptScanDemo = () => {
    return (
      <div className="p-4 bg-muted/50 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold mb-2">Step 1: Upload Receipt</h4>
              <p className="text-sm text-muted-foreground">Take a photo or select a file</p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center w-full">
              <Camera size={48} className="mx-auto mb-4 text-muted-foreground" />
              <Button variant="outline" className="mx-auto">
                Upload Receipt
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold mb-2">Step 2: Smart Extraction</h4>
              <p className="text-sm text-muted-foreground">AI extracts all important details</p>
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
                  <Check size={18} className="inline mr-1 text-green-500" />
                  <span className="text-sm text-green-600">Matched to your bank transaction</span>
                </div>
              </div>
            </AnimatedReceipt>
          </div>
        </div>
      </div>
    );
  };

  // Email scanning demo
  const EmailScanDemo = () => {
    return (
      <div className="p-4 bg-muted/50 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 text-primary" />
              <div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium">Amazon Order Confirmation</p>
                  <p className="text-sm text-muted-foreground">10:32 AM</p>
                </div>
                <p className="text-sm text-muted-foreground">Your order #112-5283947-7262257 has shipped...</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-primary/30">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 text-primary" />
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium">Uber Receipt</p>
                  <p className="text-sm text-muted-foreground">Yesterday</p>
                </div>
                <p className="text-sm text-muted-foreground">Thanks for riding with Javier...</p>
                <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">TOTAL AMOUNT</p>
                    <p className="font-medium">$24.50</p>
                  </div>
                  <Button size="sm" variant="outline" className="text-xs h-8">
                    <Check size={14} className="mr-1" /> Auto-processed
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-border">
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 text-muted-foreground" />
              <div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-medium">Weekly Newsletter</p>
                  <p className="text-sm text-muted-foreground">Feb 28</p>
                </div>
                <p className="text-sm text-muted-foreground">Check out our latest updates and news...</p>
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
      <div className="p-4 bg-muted/50 rounded-lg">
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-border">
            <div className="p-3 border-b border-border bg-muted/30">
              <h5 className="font-medium">Transaction Details</h5>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <CreditCard size={20} className="text-primary mr-2" />
                  <div>
                    <p className="font-medium">Office Supply Co.</p>
                    <p className="text-sm text-muted-foreground">May 15, 2023</p>
                  </div>
                </div>
                <p className="font-bold">$47.99</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <div className="flex items-center text-green-600">
                    <Check size={16} className="mr-1" />
                    <span className="text-sm">Matched with receipt</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground">Category</p>
                  <div className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    Office Supplies
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-muted-foreground">Account</p>
                  <p className="text-sm">Business Credit Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="journey" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            From Shoebox to Streamlined
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Follow the journey from chaotic receipt management to automated peace-of-mind
          </p>
        </div>
        
        <div className="timeline-container max-w-6xl mx-auto">
          {/* Timeline vertical line */}
          <div className="timeline-line"></div>
          
          {/* Past: The Chaos */}
          <TimeNode
            title="Lost in a Sea of Paper"
            phase="past"
            position="left"
            index={0}
          >
            <p className="mb-4">Remember rummaging through shoeboxes of receipts when tax season arrives? Trying to match crumpled paper to bank statements manually?</p>
            
            <p className="mb-6">It's a nightmare we've all experienced:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Faded thermal paper receipts you can barely read</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Missing documentation for important purchases</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>Hours spent reconciling expenses with statements</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>The anxiety of potential audits looming over you</span>
              </li>
            </ul>
            
            <TryThisCard
              title="The Shoebox Method"
              description="See how messy and time-consuming manual tracking can be"
              actionLabel="Experience the Chaos"
            >
              <div className="relative p-4 border border-border bg-muted/30 rounded-lg">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
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
            </TryThisCard>
          </TimeNode>
          
          {/* Present: The Solution - Email Scanning */}
          <TimeNode
            title="Your Inbox, Automatically Organized"
            phase="present"
            position="right"
            index={1}
          >
            <p className="mb-4">What if your receipts could organize themselves? ExpenseFlow monitors your email for receipts and automatically processes them.</p>
            
            <p className="mb-6">No more manual hunting - we find everything for you:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Connect your Gmail or Outlook account once</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>We automatically detect receipts in your emails</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>All data is extracted and categorized</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Works with services like Uber, Amazon, airline tickets, and more</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Email Receipt Scanner"
              description="Watch how we automatically find and process receipts in your inbox"
              actionLabel="See it in Action"
            >
              <EmailScanDemo />
            </TryThisCard>
          </TimeNode>
          
          {/* Present: The Solution - Link Accounts */}
          <TimeNode
            title="Connect All Your Accounts"
            phase="present"
            position="left"
            index={2}
          >
            <p className="mb-4">Seamlessly connect your bank accounts and credit cards to bring all your financial data into one place.</p>
            
            <p className="mb-6">Say goodbye to manual transactions entry:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Connect unlimited bank accounts and credit cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Secure connections using bank-level encryption</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Auto-import transactions daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>View all your finances in one dashboard</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Account Linking"
              description="See how easy it is to connect your financial accounts"
              actionLabel="Connect Account"
            >
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="max-w-md mx-auto">
                  <div className="space-y-5">
                    <div className="text-center">
                      <h4 className="text-lg font-medium mb-1">Connect Your Account</h4>
                      <p className="text-sm text-muted-foreground">Choose your bank to securely connect</p>
                    </div>
                    
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
                      
                      <div className="p-3 border border-border rounded-lg bg-card hover:border-primary cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <span className="font-bold text-blue-700">C</span>
                        </div>
                        <span className="text-sm">Citi</span>
                      </div>
                      
                      <div className="p-3 border border-border rounded-lg bg-card hover:border-primary cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <span className="font-bold text-purple-700">W</span>
                        </div>
                        <span className="text-sm">Wells Fargo</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-muted/50 px-2 text-muted-foreground">Or search</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <div className="px-3 py-2 bg-card">
                        <Search size={18} className="text-muted-foreground" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Find your bank..." 
                        className="flex-1 bg-transparent border-none outline-none p-2 text-sm"
                      />
                    </div>
                    
                    <div className="text-center text-xs text-muted-foreground">
                      <p>Your credentials are never stored. We use 256-bit encryption to securely connect to your bank.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TryThisCard>
          </TimeNode>
          
          {/* Present: The Solution - Auto Matching */}
          <TimeNode
            title="Perfect Matching, Every Time"
            phase="present"
            position="left"
            index={3}
          >
            <p className="mb-4">Say goodbye to manual reconciliation. ExpenseFlow automatically matches your receipts to your bank and credit card transactions.</p>
            
            <p className="mb-6">Create a perfect audit trail with no effort:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Connect your bank accounts and credit cards</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Our AI matches receipts to transactions automatically</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Get alerted about missing receipts</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Enjoy 100% reconciliation with minimal effort</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Smart Matching"
              description="See how we match a receipt to the correct transaction automatically"
              actionLabel="Watch the Match"
            >
              <BankMatchingDemo />
            </TryThisCard>
          </TimeNode>
          
          {/* Present: The Solution - Manual Uploads */}
          <TimeNode
            title="For Those Paper Receipts Too"
            phase="present"
            position="right"
            index={3}
          >
            <p className="mb-4">Sometimes you still get paper receipts. No problem! ExpenseFlow makes it easy to digitize them in seconds.</p>
            
            <p className="mb-6">Turn physical into digital with ease:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Snap a photo with our mobile app</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>OCR technology extracts all relevant details</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Data is processed and matched to transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Original receipts are securely stored in the cloud</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Receipt Scanner"
              description="See how we turn a paper receipt into organized data"
              actionLabel="Try the Scanner"
            >
              <ReceiptScanDemo />
            </TryThisCard>
          </TimeNode>
          
          {/* Present: Smart Categorization */}
          <TimeNode
            title="Smart Expense Categorization"
            phase="present"
            position="right"
            index={4}
          >
            <p className="mb-4">Keeping track of expense categories doesn't have to be tedious. Our system automatically categorizes your expenses for accurate reporting.</p>
            
            <p className="mb-6">Smart categorization makes tax time a breeze:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>AI-powered automatic categorization of expenses</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Customize categories to match your business needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tag expenses as tax-deductible for easy reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Generate tax-ready reports in seconds</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Expense Categories"
              description="See how we intelligently sort your expenses"
              actionLabel="View Categories"
            >
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Breakdown */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Monthly Expense Breakdown</h4>
                    
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Travel</span>
                          <span className="font-medium">$345.80</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Meals</span>
                          <span className="font-medium">$275.25</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Office Supplies</span>
                          <span className="font-medium">$187.99</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: "19%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Software</span>
                          <span className="font-medium">$99.99</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Other</span>
                          <span className="font-medium">$78.45</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-gray-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t border-border flex justify-between text-sm">
                      <span className="font-medium">Total</span>
                      <span className="font-bold">$987.48</span>
                    </div>
                  </div>
                  
                  {/* Tax Deduction Tagging */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Tax Deductible Expenses</h4>
                    
                    <div className="space-y-3">
                      <div className="p-3 border border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-900/20 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Client Lunch</p>
                            <p className="text-xs text-muted-foreground">May 18, 2023</p>
                          </div>
                          <span className="font-bold">$85.00</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
                          <div className="flex items-center">
                            <Check size={16} className="text-green-600 mr-1" />
                            <span className="text-xs text-green-700">Tax Deductible</span>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            50% Eligible
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Design Software</p>
                            <p className="text-xs text-muted-foreground">May 10, 2023</p>
                          </div>
                          <span className="font-bold">$99.99</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
                          <div className="flex items-center">
                            <Check size={16} className="text-green-600 mr-1" />
                            <span className="text-xs text-green-700">Tax Deductible</span>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            100% Eligible
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Office Chair</p>
                            <p className="text-xs text-muted-foreground">April 28, 2023</p>
                          </div>
                          <span className="font-bold">$125.00</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
                          <div className="flex items-center">
                            <Check size={16} className="text-green-600 mr-1" />
                            <span className="text-xs text-green-700">Tax Deductible</span>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            100% Eligible
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TryThisCard>
          </TimeNode>
          
          {/* Present: Mobile Access and Security */}
          <TimeNode
            title="Secure Access Anywhere"
            phase="present"
            position="left"
            index={5}
          >
            <p className="mb-4">Take control of your finances from anywhere with our mobile-friendly interface and robust 256-bit SSL security.</p>
            
            <p className="mb-6">Access everything on the go:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Capture receipts with your phone camera</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Track mileage using GPS on your phone</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bank-level security with 256-bit SSL encryption</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Two-factor authentication for account protection</span>
              </li>
            </ul>
            
            <TryThisCard
              title="Mobile & Security Features"
              description="See how our mobile app works with enterprise-grade security"
              actionLabel="View Demo"
            >
              <div className="p-4 bg-muted/50 rounded-lg">
                <div className="flex flex-wrap justify-center gap-6">
                  {/* Mobile App Mockup */}
                  <div className="w-[280px] h-[560px] rounded-[36px] border-8 border-gray-800 relative overflow-hidden shadow-xl bg-white">
                    <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 z-10"></div>
                    <div className="absolute bottom-0 inset-x-0 h-6 bg-gray-800 z-10"></div>
                    
                    {/* App Content */}
                    <div className="h-full overflow-y-auto p-4">
                      {/* App Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="font-bold text-primary">ExpenseFlow</h4>
                          <p className="text-xs text-muted-foreground">Manage on the go</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs font-bold">JS</span>
                        </div>
                      </div>
                      
                      {/* Expense Cards */}
                      <div className="space-y-3">
                        <div className="p-3 border border-border rounded-lg bg-card">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Coffee Shop</span>
                            <span className="font-bold">$4.50</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Today, 9:30 AM</span>
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Meals</span>
                          </div>
                        </div>
                        
                        <div className="p-3 border border-border rounded-lg bg-card">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Uber</span>
                            <span className="font-bold">$24.50</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Yesterday</span>
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Travel</span>
                          </div>
                        </div>
                        
                        <div className="p-3 border border-primary/30 rounded-lg bg-card">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Office Supply Co.</span>
                            <span className="font-bold">$47.99</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>May 15, 2023</span>
                            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Supplies</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Security Badge */}
                      <div className="mt-6 p-3 rounded-lg border border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-900/20">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                            <Check size={20} className="text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-700 dark:text-green-400">256-bit SSL Encrypted</p>
                            <p className="text-xs text-green-600 dark:text-green-500">Your data is secure</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature Callouts */}
                  <div className="w-full md:w-auto md:max-w-[320px] space-y-4">
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <h5 className="font-semibold text-sm mb-1">Enterprise Security</h5>
                      <p className="text-xs text-muted-foreground">Your financial data is always protected with bank-level security and two-factor authentication.</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <h5 className="font-semibold text-sm mb-1">Automatic Backups</h5>
                      <p className="text-xs text-muted-foreground">Your information is backed up in multiple databases and can be retrieved if ever lost.</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <h5 className="font-semibold text-sm mb-1">Minimal Data Collection</h5>
                      <p className="text-xs text-muted-foreground">We collect only what's necessary to provide our service, maintaining your privacy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TryThisCard>
          </TimeNode>
          
          {/* Future: Freedom */}
          <TimeNode
            title="The Freedom of Automation"
            phase="future"
            position="left"
            index={6}
          >
            <p className="mb-4">Imagine never worrying about expense tracking again. With ExpenseFlow, you're always tax-ready and audit-proof.</p>
            
            <p className="mb-6">Here's what your future looks like:</p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Hours saved every month on manual data entry</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Tax season becomes just another time of year</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Complete confidence in your financial records</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>More time to focus on growing your business</span>
              </li>
            </ul>
            
            <div className="flex justify-center mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  const element = document.getElementById('cases');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See How Others Use ExpenseFlow
              </Button>
            </div>
          </TimeNode>
        </div>
      </div>
    </section>
  );
}