import { useRef } from "react";
import { motion } from "framer-motion";
import StickyNoteTestimonial from "@/components/ui/sticky-note-testimonial";
import JournalPageTestimonial from "@/components/ui/journal-page-testimonial";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data in first-person format
  const stickyTestimonials = [
    {
      quote: "I stopped dreading tax time! My accountant actually said I have the most organized records of any client.",
      author: "Sarah J.",
      role: "Freelance Designer"
    },
    {
      quote: "ExpenseWise saves me 3+ hours a week. That's time I can spend with clients instead of sorting receipts.",
      author: "Marcus T.",
      role: "Marketing Consultant"
    },
    {
      quote: "The email scanner is MAGIC. I never manually save a receipt from my inbox now.",
      author: "Alicia R.",
      role: "Content Creator"
    }
  ];
  
  const journalTestimonials = [
    {
      quote: "Month end used to be a nightmare. Now I click one button and get a perfectly categorized expense report. My taxes basically file themselves!",
      author: "James K.",
      role: "Freelance Developer",
      date: "April 18, 2023"
    },
    {
      quote: "As someone with ADHD, keeping track of receipts was impossible. ExpenseWise's automatic scanning turned my financial chaos into perfect organization without any effort.",
      author: "Elena M.",
      role: "Graphic Artist",
      date: "May 2, 2023"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Voices of Freedom
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Read the stories of solopreneurs who escaped the receipt nightmare
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Sticky notes section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
          
          {/* Journal entries section */}
          <div className="grid md:grid-cols-2 gap-12">
            {journalTestimonials.map((testimonial, index) => (
              <JournalPageTestimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                date={testimonial.date}
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