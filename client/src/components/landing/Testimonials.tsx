import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import TestimonialCard from "@/components/ui/testimonial-card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Freelance Designer",
      quote: "ExpenseFlow has saved me hours each month on expense tracking. The receipt matching is like magic!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Marcus T.",
      role: "Marketing Consultant",
      quote: "Tax season used to be a nightmare. Now I have every receipt organized and my accountant loves me for it.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Alicia R.",
      role: "Content Creator",
      quote: "The email receipt scanning feature alone is worth the price. I no longer have to manually save email receipts!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4.5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-900 text-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">What Our Users Say</h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            Join hundreds of solopreneurs who are saving time and getting organized with ExpenseFlow.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              image={testimonial.image}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
