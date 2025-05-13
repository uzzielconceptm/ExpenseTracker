import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Maximize2, Minimize2 } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  userProfile: {
    name: string;
    role: string;
  };
  index: number;
  children: React.ReactNode;
}

export default function CaseStudyCard({
  title,
  description,
  image,
  userProfile,
  index,
  children
}: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref] = useScrollReveal<HTMLDivElement>();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      className={`scroll-reveal paper-curl bg-white rounded-lg shadow-lg overflow-hidden
                 ${isExpanded ? "fixed inset-4 md:inset-16 z-50" : "relative"}`}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative">
        {/* Header with image */}
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative p-6 -mt-16">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleExpand}
                className="text-muted-foreground"
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </Button>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4"
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
            
            {!isExpanded && (
              <Button onClick={toggleExpand} variant="outline" className="w-full mt-2">
                See {userProfile.name}'s workflow
              </Button>
            )}
          </div>
        </div>
        
        {/* User profile tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full py-1 px-3 flex items-center shadow-md">
          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-2">
            <span className="text-xs font-bold">{userProfile.name[0]}</span>
          </div>
          <div>
            <p className="text-xs font-semibold">{userProfile.name}</p>
            <p className="text-xs text-muted-foreground">{userProfile.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}