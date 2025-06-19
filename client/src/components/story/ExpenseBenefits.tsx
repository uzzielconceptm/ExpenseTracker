import { useState } from "react";
import { AlertTriangle, LightbulbIcon, Check, Camera, CreditCard, PieChart, FileCheck, Settings } from "lucide-react";

export default function ExpenseBenefits() {
  const [activeTab, setActiveTab] = useState(0);

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

            {/* Tab content */}
            <div className="max-w-4xl mx-auto">
              <div className="card-modern p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featureTabs[activeTab].content.title}
                  </h3>
                  <p className="text-lg text-foreground/70">
                    {featureTabs[activeTab].content.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featureTabs[activeTab].content.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
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