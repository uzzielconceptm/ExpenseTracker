import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { ArrowDown, Mail, CreditCard, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroScene() {
  const { chaosMode } = useChaos();
  
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToEarlyAccess = () => {
    const element = document.getElementById('early-access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Items that will float around in chaos mode
  const chaosItems = [
    { id: 1, type: 'receipt', top: '15%', left: '10%', size: 80 },
    { id: 2, type: 'receipt', top: '30%', left: '80%', size: 60 },
    { id: 3, type: 'receipt', top: '70%', left: '20%', size: 70 },
    { id: 4, type: 'receipt', top: '50%', left: '90%', size: 50 },
    { id: 5, type: 'receipt', top: '80%', left: '60%', size: 90 },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Modern gradient background */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-white via-accent/10 to-white subtle-pattern"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, rgba(21, 118, 92, 0.05) 0%, transparent 30%),
                            radial-gradient(circle at 70% 80%, rgba(21, 118, 92, 0.03) 0%, transparent 30%)`
        }}
      />
      
      {/* Floating receipts in chaos mode */}
      {chaosMode && chaosItems.map(item => (
        <motion.div
          key={item.id}
          className="receipt absolute z-10"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size * 1.3,
            background: 'white',
            boxShadow: '0 8px 24px rgba(0,0,0,0.07)',
            borderRadius: '8px',
            border: '1px solid rgba(0,0,0,0.06)'
          }}
          initial={{ rotate: 0, y: 0 }}
          animate={{ 
            rotate: [Math.random() * 10 - 5, Math.random() * 10 - 5],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 4, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <div className="h-full w-full p-2">
            <div className="h-2 w-2/3 bg-accent mb-2 rounded"></div>
            <div className="h-2 w-full bg-muted mb-2 rounded"></div>
            <div className="h-2 w-1/2 bg-muted mb-2 rounded"></div>
            <div className="h-2 w-3/4 bg-muted mb-2 rounded"></div>
          </div>
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3"
          >
            <span className="inline-block text-primary font-medium text-lg mb-4">Smart Expense Management</span>
          </motion.div>
          
          <motion.h1 
            className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Receipts, bank transactions, and expenses
            </span>
            <br />
            <span className="text-primary font-extrabold">organized in one place.</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop losing receipts and missing deductions. ExactusBooks automatically extracts receipts from your email and matches them to bank transactions—giving you perfect expense records without the manual work.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Auto Email Extraction</h3>
              <p className="text-slate-600">Automatically finds and processes receipts from your inbox</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Smart Bank Matching</h3>
              <p className="text-slate-600">Connects receipts to your bank transactions instantly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Tax-Ready Reports</h3>
              <p className="text-slate-600">Generate audit-ready expense reports in seconds</p>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToEarlyAccess}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
            >
              Start Free Trial
            </Button>
            <Button 
              onClick={scrollToHowItWorks}
              size="lg" 
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-primary hover:bg-white text-slate-700 hover:text-primary font-semibold px-10 py-4 text-base rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Social Proof & Stats */}
          <motion.div
            className="mt-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-12">
              <p className="text-slate-500 text-lg mb-8">Trusted by solopreneurs and small businesses</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">5-8</div>
                  <div className="text-slate-600 text-sm">Hours saved monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">99%</div>
                  <div className="text-slate-600 text-sm">Accuracy rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">$500</div>
                  <div className="text-slate-600 text-sm">Average monthly savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">2k+</div>
                  <div className="text-slate-600 text-sm">Receipts processed daily</div>
                </div>
              </div>
            </div>

            {/* Integration badges */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="text-center mb-6">
                <p className="text-slate-600 font-medium">Seamlessly integrates with</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-2">
                    <span className="text-red-600 font-bold text-lg">G</span>
                  </div>
                  <span className="text-sm text-slate-600">Gmail</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold text-lg">O</span>
                  </div>
                  <span className="text-sm text-slate-600">Outlook</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-2">
                    <span className="text-green-600 font-bold text-lg">$</span>
                  </div>
                  <span className="text-sm text-slate-600">Chase</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-2">
                    <span className="text-purple-600 font-bold text-lg">A</span>
                  </div>
                  <span className="text-sm text-slate-600">AmEx</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-2">
                    <span className="text-orange-600 font-bold text-lg">Q</span>
                  </div>
                  <span className="text-sm text-slate-600">QuickBooks</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-2">
                    <span className="text-slate-600 font-bold text-lg">+</span>
                  </div>
                  <span className="text-sm text-slate-600">More</span>
                </div>
              </div>
            </div>

            {/* Featured Testimonial */}
            <motion.div
              className="mt-16 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl text-primary/20 mb-4">"</div>
                <blockquote className="text-xl md:text-2xl text-slate-700 font-medium mb-8 leading-relaxed">
                  ExactusBooks transformed how I handle expenses. What used to take me hours every month now happens automatically. I found $2,400 in missed deductions in my first quarter alone.
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">SJ</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-800">Sarah Johnson</div>
                    <div className="text-slate-600 text-sm">Freelance Marketing Consultant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Removed scroll indicator arrow */}
      
      {/* Abstract wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="rgba(176, 253, 240, 0.15)" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
}