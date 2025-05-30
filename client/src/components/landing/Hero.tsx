import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="pt-6 pb-2 md:pt-8 md:pb-3 px-4">
      <div className="container mx-auto max-w-6xl pt-0">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <motion.div 
            className="order-2 md:order-1"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-neutral-900 mb-3">
              Smart Expense Tracking Built for Solopreneurs
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-3">
              Stop losing receipts. Start automating your audit trail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#early-access" 
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg px-8 py-4 text-center transition-all shadow-lg hover:shadow-xl"
              >
                Try It Free
              </a>
              <a 
                href="#demo" 
                className="bg-white hover:bg-neutral-100 text-primary border border-primary font-medium rounded-lg px-8 py-4 text-center transition-all"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="ExpenseWise dashboard with receipt matching" 
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
