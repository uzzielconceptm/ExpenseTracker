import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { itemFadeIn } from "@/lib/animations";

interface FeatureCardProps {
  id: string;
  icon: string;
  color: string;
  title: string;
  description: string;
  details: string;
  index: number;
}

export default function FeatureCard({ id, icon, color, title, description, details, index }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="feature-card bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
      variants={itemFadeIn}
      custom={index}
    >
      <div className={`text-${color} text-4xl mb-4`}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-neutral-700 mb-4">
        {description}
      </p>
      <button 
        className="text-primary font-medium flex items-center feature-toggle"
        onClick={toggleDetails}
        aria-expanded={isExpanded}
        aria-controls={id}
      >
        Learn more 
        <ChevronDown 
          className="ml-2 transition-transform" 
          style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <motion.div 
        id={id}
        className="mt-4 pt-4 border-t border-neutral-200"
        initial={{ height: 0, opacity: 0, marginTop: 0, paddingTop: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0, 
          marginTop: isExpanded ? 16 : 0,
          paddingTop: isExpanded ? 16 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-neutral-700">
          {details}
        </p>
      </motion.div>
    </motion.div>
  );
}
