import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { UserIcon } from "lucide-react";

export interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

interface ModernTestimonialProps {
  testimonials: TestimonialData[];
}

export default function ModernTestimonial({ testimonials }: ModernTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref] = useScrollReveal<HTMLDivElement>();
  
  const currentTestimonial = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={ref} className="scroll-reveal py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              {currentTestimonial.avatar ? (
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={currentTestimonial.avatar} 
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center border-4 border-white shadow-md">
                  <UserIcon size={32} className="text-muted-foreground" />
                </div>
              )}
            </div>
            
            <blockquote className="text-2xl mb-4 relative font-medium leading-relaxed">
              <span className="text-4xl absolute -left-6 -top-4 text-primary/20">"</span>
              {currentTestimonial.quote}
              <span className="text-4xl absolute -right-4 -bottom-10 text-primary/20">"</span>
            </blockquote>
            
            <div className="mb-6">
              <div className="text-lg font-bold">{currentTestimonial.author}</div>
              <div className="text-muted-foreground">{currentTestimonial.role}</div>
            </div>
            
            <Button 
              className="gradient-btn rounded-xl shadow-sm"
              onClick={handleNext}
            >
              See their workflow
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center items-center gap-4">
        {testimonials.map((testimonial, idx) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(idx)}
            className={`focus:outline-none transition-all duration-300 ${
              idx === activeIndex ? "scale-125" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`View testimonial from ${testimonial.author}`}
          >
            {testimonial.avatar ? (
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                idx === activeIndex 
                  ? "bg-primary text-white border-primary" 
                  : "bg-white text-muted-foreground border-muted"
              }`}>
                <span className="font-bold text-sm">{testimonial.author.charAt(0)}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}