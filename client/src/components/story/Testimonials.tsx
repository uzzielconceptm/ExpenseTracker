import { useRef } from "react";
import { motion } from "framer-motion";
import StickyNoteTestimonial from "@/components/ui/sticky-note-testimonial";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data in realistic format
  const stickyTestimonials = [
    {
      quote: "Before ExpenseWise, I would scramble at tax time trying to find receipts from months ago. Now I'm saving about $2,300 annually in deductions I would have missed.",
      author: "Sarah J.",
      role: "Independent Photographer"
    },
    {
      quote: "I spent 5-6 hours every month organizing expenses. ExpenseWise automated most of it, and now it takes me less than an hour. The mobile app is particularly useful for capturing receipts on the go.",
      author: "Marcus T.",
      role: "Financial Consultant"
    },
    {
      quote: "The integration with my bank account has been seamless. When I make business purchases, ExpenseWise categorizes them automatically with about 90% accuracy.",
      author: "Alicia R.",
      role: "E-commerce Store Owner"
    },
    {
      quote: "I used to struggle with expense tracking for my business trips. ExpenseWise lets me scan receipts right away, tag them to specific clients, and generate accurate reports for billing.",
      author: "James K.",
      role: "IT Consultant"
    },
    {
      quote: "I've tried at least five different expense tracking apps over the years. ExpenseWise is the only one that has the right balance of automation and flexibility.",
      author: "Elena M.",
      role: "Interior Designer"
    }
  ];

  return (
    <section id="testimonials" className="py-14 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Voices of Freedom
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Read the stories of solopreneurs who escaped the receipt nightmare
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Sticky notes section */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stickyTestimonials.map((testimonial, index) => (
              <StickyNoteTestimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-accent rounded-full opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary rounded-full opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
}