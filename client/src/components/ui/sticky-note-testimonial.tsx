import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface StickyNoteTestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}

export default function StickyNoteTestimonial({
  quote,
  author,
  role,
  index
}: StickyNoteTestimonialProps) {
  const [ref] = useScrollReveal<HTMLDivElement>();
  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
  const colors = ["bg-accent", "bg-secondary", "bg-accent", "bg-secondary"];
  
  const rotation = rotations[index % rotations.length];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal sticky-note ${rotation} ${color} hover:shadow-xl transition-shadow`}
      whileHover={{ 
        scale: 1.02, 
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 10 }
      }}
    >
      <Quote size={24} className="mb-2 text-secondary-foreground opacity-60" />
      <p className="text-base md:text-lg font-medium italic mb-4">{quote}</p>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-sm font-bold">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-xs text-secondary-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}