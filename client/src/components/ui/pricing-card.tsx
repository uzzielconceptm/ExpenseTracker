import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { itemFadeIn } from "@/lib/animations";

interface PricingCardProps {
  name: string;
  description: string;
  price: number | null;
  frequency: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  buttonLink: string;
  index: number;
}

export default function PricingCard({
  name,
  description,
  price,
  frequency,
  features,
  popular,
  buttonText,
  buttonLink,
  index
}: PricingCardProps) {
  return (
    <motion.div 
      className={`
        bg-white rounded-xl overflow-hidden transition-all hover:shadow-xl
        ${popular 
          ? 'border-2 border-primary shadow-xl transform md:-translate-y-4 scale-105' 
          : 'border border-neutral-200 shadow-lg'
        }
      `}
      variants={itemFadeIn}
      custom={index}
    >
      {popular && (
        <div className="bg-primary text-white text-center py-2 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="p-8">
        <h3 className="font-heading font-semibold text-2xl mb-2">{name}</h3>
        <p className="text-neutral-700 mb-6">{description}</p>
        
        {price && (
          <div className="mb-6">
            <span className="font-heading font-bold text-4xl">${price}</span>
            <span className="text-neutral-500">/{frequency}</span>
          </div>
        )}
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <i className="fas fa-check text-accent mt-1 mr-3"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href={buttonLink}
          className={`
            block w-full font-medium rounded-lg py-3 text-center transition-colors
            ${popular 
              ? 'bg-primary text-white hover:bg-primary/90' 
              : 'bg-white border border-primary text-primary hover:bg-neutral-50'
            }
          `}
        >
          {buttonText}
        </a>
      </div>
    </motion.div>
  );
}
