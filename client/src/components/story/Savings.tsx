import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, ArrowRight } from "lucide-react";

export default function Savings() {
  return (
    <section id="savings" className="py-16 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-primary/10">
            <span className="text-primary font-semibold text-sm px-4 py-1">Time & Cost Savings</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            How much time and money can ExactusBooks save you?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Solo business owners often spend hours — or hundreds of dollars — each month on manual receipt tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Time Savings */}
          <motion.div 
            className="relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
            <div className="flex items-start mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Time Saved</h3>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Manual receipt handling can take <span className="font-bold text-slate-800">5–8 hours a month</span>.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <p className="text-blue-900 font-semibold text-lg leading-relaxed">
                  ExactusBooks automates the process — saving you a full day's work.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Money Savings */}
          <motion.div 
            className="card-modern p-8 hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Money Saved</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/70">
                Bookkeepers often charge $300–$500/month for manual expense tracking.
              </p>
              <p className="text-foreground font-medium">
                ExactusBooks replaces that with smart, automated matching — at a fraction of the cost.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="group"
          >
            <a href="#plans">
              See how it compares
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}