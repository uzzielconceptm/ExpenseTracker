import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, ArrowRight } from "lucide-react";

export default function Savings() {
  return (
    <section id="savings" className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How much time and money can ExactusBooks save you?
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Solo business owners often spend hours — or hundreds of dollars — each month on manual receipt tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Time Savings */}
          <motion.div 
            className="card-modern p-8 hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Time Saved</h3>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-foreground/70">
                Manual receipt handling can take 5–8 hours a month.
              </p>
              <p className="text-foreground font-medium">
                ExactusBooks automates the process — saving you a full day's work.
              </p>
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