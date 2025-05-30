import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, LoaderPinwheel, CheckCircle } from "lucide-react";

export default function Demo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startProcessing = () => {
    setCurrentStep(2);
    setProcessing(true);
    setProgress(0);
  };

  useEffect(() => {
    let progressInterval: number;
    
    if (processing && progress < 100) {
      progressInterval = window.setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 5;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setProcessing(false);
              setCurrentStep(3);
            }, 500);
          }
          return newProgress;
        });
      }, 100);
    }
    
    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [processing, progress]);

  const handleMatchTransaction = () => {
    setCurrentStep(4);
    setCompleted(true);
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setProgress(0);
    setProcessing(false);
    setCompleted(false);
  };

  const handleViewExpenses = () => {
    alert('This would navigate to the expenses dashboard in the actual application.');
  };

  return (
    <section id="demo" className="py-6 md:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">See How It Works</h2>
          <p className="text-neutral-700 text-lg max-w-3xl mx-auto">
            Experience how ExpenseWise simplifies expense tracking with our interactive demo.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="demo-controls mb-8 flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setCurrentStep(1)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === 1 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'
              }`}
            >
              1. Upload Receipt
            </button>
            <button 
              onClick={() => processing && setCurrentStep(2)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === 2 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'
              }`}
            >
              2. Processing
            </button>
            <button 
              onClick={() => !processing && setCurrentStep(3)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === 3 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'
              }`}
              disabled={processing || (currentStep < 3 && !completed)}
            >
              3. Matching
            </button>
            <button 
              onClick={() => completed && setCurrentStep(4)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentStep === 4 ? 'bg-primary text-white' : 'bg-neutral-200 text-neutral-700'
              }`}
              disabled={!completed}
            >
              4. Completed
            </button>
          </div>
          
          {/* Demo Content Area */}
          <div className="demo-content-area relative min-h-[400px] border border-neutral-200 rounded-xl overflow-hidden">
            {/* Step 1: Upload Receipt */}
            {currentStep === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-neutral-50"
              >
                <div className="text-5xl text-primary mb-6">
                  <i className="fas fa-file-upload"></i>
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Upload Your Receipt</h3>
                <p className="text-neutral-700 text-center mb-8 max-w-md">
                  Snap a photo of your receipt or drag and drop an image file to get started.
                </p>
                <button 
                  onClick={startProcessing}
                  className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3 flex items-center"
                >
                  <Camera className="mr-2" size={20} /> Upload Receipt
                </button>
              </motion.div>
            )}
            
            {/* Step 2: Processing */}
            {currentStep === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-neutral-50"
              >
                <div className="text-5xl text-primary mb-6">
                  <LoaderPinwheel className="animate-spin" size={48} />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Processing Your Receipt</h3>
                <p className="text-neutral-700 text-center mb-4 max-w-md">
                  Our AI is extracting information from your receipt...
                </p>
                <div className="w-full max-w-md bg-neutral-200 rounded-full h-2.5 mb-8">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-150" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-neutral-500 text-sm">
                  This usually takes less than 5 seconds
                </p>
              </motion.div>
            )}
            
            {/* Step 3: Matching */}
            {currentStep === 3 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 p-8 bg-white"
              >
                <h3 className="font-heading font-semibold text-2xl mb-6">Receipt Analysis</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                    <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                      <i className="fas fa-receipt text-primary mr-2"></i> Receipt Details
                    </h4>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-neutral-500">Merchant</p>
                        <p className="font-medium">Office Supply Co.</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Date</p>
                        <p className="font-medium">May 15, 2023</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Amount</p>
                        <p className="font-medium">$47.99</p>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Category</p>
                        <p className="font-medium">Office Supplies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                    <h4 className="font-heading font-semibold text-lg mb-4 flex items-center">
                      <i className="fas fa-credit-card text-accent mr-2"></i> Matching Transactions
                    </h4>
                    
                    <div className="border border-neutral-200 rounded-lg overflow-hidden">
                      <div className="bg-white p-4 border-l-4 border-primary flex items-center justify-between">
                        <div>
                          <p className="font-medium">Office Supply Co.</p>
                          <p className="text-sm text-neutral-500">May 15, 2023 • Chase Credit Card</p>
                        </div>
                        <p className="font-bold">$47.99</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleMatchTransaction}
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-2"
                    >
                      Confirm Match
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Completed */}
            {currentStep === 4 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white"
              >
                <div className="text-6xl text-accent mb-6">
                  <CheckCircle size={56} />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Receipt Successfully Matched!</h3>
                <p className="text-neutral-700 text-center mb-8 max-w-md">
                  Your receipt has been matched to your transaction and categorized as "Office Supplies". 
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={resetDemo}
                    className="bg-white border border-primary text-primary hover:bg-neutral-50 font-medium rounded-lg px-6 py-3"
                  >
                    Add Another Receipt
                  </button>
                  <button 
                    onClick={handleViewExpenses}
                    className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-6 py-3"
                  >
                    View All Expenses
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
