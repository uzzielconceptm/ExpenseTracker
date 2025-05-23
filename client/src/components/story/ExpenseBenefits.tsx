import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Camera, Clock, PieChart, Star, CreditCard, FileCheck, AlertTriangle, LightbulbIcon, Settings } from "lucide-react";

// Updated to match the new design & content requirements
export default function ExpenseBenefits() {
  // Pain & Benefit sections
  const painAndBenefitSection = () => (
    <div className="mb-8">
      <div className="text-center mb-16">
        <span className="inline-block text-primary font-medium text-base mb-3">Pain Points & Solutions</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          <span className="inline-block centered-heading-underline">Why most expense tools fail</span> solo workers
        </h2>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          We've designed FinMatch to address the specific challenges solo entrepreneurs face
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Pain Section */}
        <div className="card-modern p-8">
          <div className="flex items-start mb-6">
            <div className="bg-red-50 p-3 rounded-md mr-4">
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 subtle-heading-underline">Why most expense tools fail solo workers</h3>
              <p className="text-foreground/70 mt-4">
                Manual data entry, missing receipts, and tax-time stress.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Manual data entry is error-prone</p>
                  <p className="text-sm text-foreground/70">Typing each receipt wastes hours of your valuable time</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Lost receipts means lost deductions</p>
                  <p className="text-sm text-foreground/70">Missing just one receipt can cost you hundreds in tax deductions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Tax time becomes a nightmare</p>
                  <p className="text-sm text-foreground/70">Rushing to organize expenses at the last minute creates stress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefit Section */}
        <div className="card-modern p-8">
          <div className="flex items-start mb-6">
            <div className="bg-primary/10 p-3 rounded-md mr-4">
              <LightbulbIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 subtle-heading-underline">Save hours and stay tax-ready</h3>
              <p className="text-foreground/70 mt-4">
                Save hours and stay tax-ready — no more digging through emails.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 mt-8">
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Automatic receipt extraction</p>
                  <p className="text-sm text-foreground/70">We scan your email for receipts so you don't have to search</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Receipt-to-bank matching</p>
                  <p className="text-sm text-foreground/70">Receipts automatically pair with your bank transactions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Always tax-ready</p>
                  <p className="text-sm text-foreground/70">Clean records all year long, no more end-of-year panic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Features section
  const [activeTab, setActiveTab] = useState(0);
  
  const featureTabs = [
    {
      title: "Auto-Extract",
      icon: <Camera className="h-5 w-5" />,
      content: {
        title: "Auto-email receipt extraction",
        description: "FinMatch monitors your email for receipts and automatically extracts all the important data including vendor, date, amount, and tax information.",
        features: [
          "Connect Gmail or Outlook in just a few clicks",
          "Automatic processing of existing and new receipts",
          "No more manual data entry from email receipts",
          "Works with Uber, Amazon, airlines and thousands more"
        ]
      }
    },
    {
      title: "Bank Matching",
      icon: <CreditCard className="h-5 w-5" />,
      content: {
        title: "Bank and card matching",
        description: "Connect your bank accounts and credit cards to automatically match transactions with receipts. Never miss a deduction again.",
        features: [
          "Connect unlimited bank accounts and cards",
          "Smart AI matching of receipts to transactions",
          "Get alerted about missing receipts",
          "Reconcile accounts with a single click"
        ]
      }
    },
    {
      title: "Tax-Ready",
      icon: <PieChart className="h-5 w-5" />,
      content: {
        title: "Tax-category tagging",
        description: "Every expense is automatically categorized for tax purposes. Generate tax-ready reports with just a few clicks.",
        features: [
          "Automatic categorization based on vendor and patterns",
          "Custom rules for specific vendors or amounts",
          "IRS-ready expense categories",
          "Export tax-ready reports anytime"
        ]
      }
    }
  ];
  
  // Additional features
  const additionalFeatures = [
    {
      title: "Real-time reports",
      description: "Get instant insights into your spending patterns and tax liability with beautiful, easy-to-understand visualizations.",
      icon: <PieChart className="h-6 w-6 text-primary" />
    },
    {
      title: "Invite your accountant for free",
      description: "Give your accountant direct access to your organized data so they can work more efficiently and save you money.",
      icon: <FileCheck className="h-6 w-6 text-primary" />
    },
    {
      title: "Custom rules for auto-categorization",
      description: "Create personalized rules that automatically assign categories based on merchant, amount, or other criteria.",
      icon: <Settings className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <>
      {/* Pain & Benefit Sections */}
      <section id="benefits" className="py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          {painAndBenefitSection()}
          
          {/* Features section */}
          <div id="features" className="pt-6 mt-4">
            <div className="section-divider mb-8"></div>
            
            <div className="text-center mb-8">
              <span className="inline-block text-primary font-medium text-base mb-3">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                <span className="inline-block centered-heading-underline">Designed for real</span> business workflows
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                FinMatch is built for the way solopreneurs actually work, not how accountants think they should work.
              </p>
            </div>
            
            {/* Tab navigation */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex border border-neutral-200 rounded-md p-1 bg-background shadow-sm">
                {featureTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all ${
                      activeTab === index
                        ? "bg-primary text-white"
                        : "bg-white hover:bg-neutral-50 text-foreground/70"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content area */}
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
                  <span className="inline-block text-primary/80 font-medium text-sm mb-1">Featured Capability</span>
                  <h3 className="text-2xl font-bold subtle-heading-underline mb-4">{featureTabs[activeTab].content.title}</h3>
                  <p className="text-foreground/70 mt-6">{featureTabs[activeTab].content.description}</p>
                  
                  <ul className="space-y-4 my-8">
                    {featureTabs[activeTab].content.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-5 w-5 rounded-sm bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="mt-8 px-6 gradient-btn rounded-md shadow-sm text-sm font-medium" 
                    size="default"
                    onClick={() => window.location.href = '#early-access'}
                  >
                    Get early access
                  </Button>
                </motion.div>
              </div>
              
              {/* Visual content */}
              <div className="order-1 lg:order-2 relative">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="card-modern shadow-md overflow-hidden">
                      <div className="p-4 border-b border-neutral-100 bg-neutral-50/50">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-base text-foreground/90">FinMatch Dashboard</h4>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="text-xs h-8 rounded-sm border-neutral-200 bg-white">
                              <FileCheck className="h-3.5 w-3.5 mr-1" />
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
                    
                    {/* Decoration element */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional features grid */}
            <div className="mt-32 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-primary font-medium text-base mb-3">Enhanced Capabilities</span>
                <h3 className="text-3xl font-bold mb-4 text-balance">
                  <span className="inline-block centered-heading-underline">More powerful</span> features
                </h3>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Every aspect of FinMatch is designed to save you time and make expense management effortless
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="card-modern p-6 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}