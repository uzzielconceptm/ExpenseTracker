import { motion } from "framer-motion";
import { itemFadeIn } from "@/lib/animations";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({ name, role, quote, image, rating, index }: TestimonialCardProps) {
  // Function to render full, half or empty stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    }
    
    return stars;
  };

  return (
    <motion.div 
      className="bg-neutral-800 rounded-xl p-8"
      variants={itemFadeIn}
      custom={index}
    >
      <div className="flex items-center mb-2">
        {renderStars(rating)}
      </div>
      <p className="italic mb-6 text-neutral-300">
        "{quote}"
      </p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={`${name}, ${role}`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
