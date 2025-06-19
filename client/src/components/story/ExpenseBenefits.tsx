import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Camera, Clock, PieChart, Star, CreditCard, FileCheck, AlertTriangle, LightbulbIcon, Settings } from "lucide-react";

export default function ExpenseBenefits() {
  const [activeTab, setActiveTab] = useState(0);

  // Pain & Benefit sections
  const painAndBenefitSection = () => (
    <div className="mb-8">
      <div className="text-center mb-16">
        <span className="inline-block text-primary font-medium text-base mb-3">Pain Points & Solutions</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          <span className="inline-block centered-heading-underline">Why most expense tools fail</span> solo workers
        </h2>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          We've designed ExactusBooks to address the specific challenges solo entrepreneurs face
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
                  <p className="text-sm text-foreground/70">Our system automatically scans your email and extracts all receipts</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Smart categorization</p>
                  <p className="text-sm text-foreground/70">AI automatically categorizes expenses for maximum tax deductions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">One-click tax reports</p>
                  <p className="text-sm text-foreground/70">Generate professional tax reports instantly when you need them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Feature tabs data
  const featureTabs = [
    {
      title: "Auto-Extract",
      icon: <Camera className="h-5 w-5" />,
      content: {
        title: "Auto-email receipt extraction",
        description: "Our intelligent system learns from your spending patterns to categorize expenses accurately, while our automated reconciliation ensures every transaction is properly matched and organized for tax season.",
        features: [
          "Connect unlimited email accounts",
          "Smart AI extraction of receipt data",
          "Automatic vendor and amount recognition",
          "Real-time processing of new receipts"
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
      <section id="benefits" className="py-8 relative overflow-hidden">
        {/* Enhanced section background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/60 to-indigo-50/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-50/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-40" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.10) 0%, transparent 50%), radial-gradient(circle at 50% 90%, rgba(168, 85, 247, 0.08) 0%, transparent 40%)`
             }}>
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1'%3E%3Cpath d='M30 10v40M10 30h40'/%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '80px 80px'
             }}>
        </div>
        <div className="relative container mx-auto px-4">
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
                ExactusBooks is built for the way solopreneurs actually work, not how accountants think they should work.
              </p>
            </div>
            
            {/* Tab navigation */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1 bg-muted rounded-lg">
                {featureTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === index
                        ? 'bg-white text-foreground shadow-sm'
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {tab.icon}
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content with visual */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text content */}
                <div className="order-2 lg:order-1">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
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
                            <h4 className="font-medium text-base text-foreground/90">ExactusBooks Dashboard</h4>
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
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  <span className="text-xs text-foreground/70">Auto-extracted</span>
                                </div>
                                <div>
                                  <p className="text-sm font-medium">Starbucks Coffee</p>
                                  <p className="text-xs text-muted-foreground">$4.95 • Business meals</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Recent extractions</span>
                                <span className="text-primary">24 today</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 1 && (
                          <div className="p-4">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                                <div className="flex items-center gap-3">
                                  <CreditCard className="h-5 w-5 text-green-600" />
                                  <div>
                                    <p className="text-sm font-medium">Wells Fargo ****4532</p>
                                    <p className="text-xs text-muted-foreground">Amazon.com - $49.99</p>
                                  </div>
                                </div>
                                <Check className="h-5 w-5 text-green-600" />
                              </div>
                              
                              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-center gap-3">
                                  <Clock className="h-5 w-5 text-yellow-600" />
                                  <div>
                                    <p className="text-sm font-medium">Chase ****1234</p>
                                    <p className="text-xs text-muted-foreground">Gas Station - $45.00</p>
                                  </div>
                                </div>
                                <span className="text-xs text-yellow-600">Pending</span>
                              </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t">
                              <div className="flex justify-between text-sm">
                                <span>Matched this month</span>
                                <span className="text-primary font-medium">98.5%</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeTab === 2 && (
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">$12,450</div>
                                <p className="text-xs text-muted-foreground">Deductible expenses</p>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">$3,115</div>
                                <p className="text-xs text-muted-foreground">Tax savings</p>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Office supplies</span>
                                <span>$2,340</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Business meals</span>
                                <span>$1,890</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Travel</span>
                                <span>$3,220</span>
                              </div>
                            </div>
                            
                            <Button size="sm" className="w-full mt-4 text-xs">
                              Generate tax report
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional features section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to <span className="text-primary">stay organized</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Built-in features that work together to keep your finances organized and tax-ready.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="card-modern p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}