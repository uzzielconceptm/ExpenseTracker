import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Camera, Clock, PieChart, Star, CreditCard, FileCheck } from "lucide-react";

// Inspired by FreshBooks benefits section
export default function ExpenseBenefits() {
  const [activeTab, setActiveTab] = useState(0);
  
  const benefitTabs = [
    {
      title: "Snap & Store",
      icon: <Camera className="h-5 w-5" />,
      content: {
        title: "Capture Receipts in a Snap",
        description: "Take a photo of any receipt with your phone and ExpenseWise automatically extracts and categorizes the data for you. No manual entry required.",
        image: "/demo-receipt-scan.jpg",
        features: [
          "OCR technology reads receipt details instantly",
          "Store digital copies securely in the cloud",
          "Search receipts by date, vendor, or amount",
          "Easily attach receipts to expense reports"
        ]
      }
    },
    {
      title: "Auto-Track",
      icon: <Clock className="h-5 w-5" />,
      content: {
        title: "Automatic Expense Tracking",
        description: "Connect your bank accounts and credit cards for automatic expense tracking. ExpenseWise matches transactions to receipts so you never miss an expense.",
        image: "/demo-auto-track.jpg",
        features: [
          "Automatically import transactions daily",
          "Smart matching of receipts to transactions",
          "Get alerted to unmatched expenses",
          "Reconcile accounts with a single click"
        ]
      }
    },
    {
      title: "Reports",
      icon: <PieChart className="h-5 w-5" />,
      content: {
        title: "Powerful Expense Reporting",
        description: "Generate detailed expense reports in seconds. See where your money is going with beautiful charts and graphs that make financial insights easy to understand.",
        image: "/demo-reports.jpg",
        features: [
          "Customizable expense categories",
          "Visual spending breakdowns by category",
          "Export reports in PDF, CSV, or Excel formats",
          "Schedule regular report delivery to your inbox"
        ]
      }
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Streamlined Expense Management
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Save hours every month with automated expense tracking and receipt management that works for you.
            </p>
          </div>
        </div>
        
        {/* FreshBooks-inspired tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-border rounded-full p-1 bg-background">
            {benefitTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all shadow-sm ${
                  activeTab === index
                    ? "bg-primary text-white shadow-md"
                    : "bg-white hover:bg-muted/50"
                }`}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Content area with FreshBooks-inspired layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">{benefitTabs[activeTab].content.title}</h3>
              <p className="text-foreground/80">{benefitTabs[activeTab].content.description}</p>
              
              <ul className="space-y-4 my-8">
                {benefitTabs[activeTab].content.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 hover-lift">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="mt-6 px-8 gradient-btn rounded-xl shadow-md" 
                size="lg"
                onClick={() => window.location.href = '#early-access'}
              >
                Try It Free
              </Button>
            </motion.div>
          </div>
          
          {/* Visual content - FreshBooks-inspired mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="bg-muted/50 rounded-lg p-8 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="p-4 border-b border-border">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-lg">Expense Summary</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileCheck className="h-4 w-4 mr-1" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content depends on active tab */}
                  {activeTab === 0 && (
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="p-4 border border-dashed border-border rounded-lg flex flex-col items-center justify-center">
                          <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">Tap to scan</p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3 h-32 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="h-2 w-3/4 bg-muted rounded"></div>
                            <div className="h-2 w-1/2 bg-muted rounded"></div>
                          </div>
                          <div className="flex justify-between">
                            <div className="h-2 w-1/3 bg-muted rounded"></div>
                            <div className="h-2 w-1/4 bg-primary rounded"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-sm text-muted-foreground">
                        <p>Receipts are securely stored and matched to expenses</p>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 1 && (
                    <div className="p-4 space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Transaction #{i}</p>
                              <p className="text-xs text-muted-foreground">Auto-categorized as Business</p>
                            </div>
                          </div>
                          <span className="font-semibold">${(i * 24.99).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 2 && (
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Category Breakdown</span>
                        <span className="text-sm text-muted-foreground">Last 30 days</span>
                      </div>
                      
                      <div className="space-y-2">
                        {[
                          { name: "Travel", percent: 35, color: "bg-blue-500" },
                          { name: "Meals", percent: 25, color: "bg-green-500" },
                          { name: "Supplies", percent: 20, color: "bg-amber-500" },
                          { name: "Software", percent: 15, color: "bg-purple-500" },
                          { name: "Other", percent: 5, color: "bg-gray-500" }
                        ].map((category, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{category.name}</span>
                              <span className="font-medium">{category.percent}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className={`${category.color} h-2 rounded-full`} 
                                style={{ width: `${category.percent}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* FreshBooks-inspired decoration element */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}