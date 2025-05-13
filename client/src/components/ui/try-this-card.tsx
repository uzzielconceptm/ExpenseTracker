import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface TryThisCardProps {
  title: string;
  description: string;
  actionLabel: string;
  children: React.ReactNode;
}

export default function TryThisCard({ 
  title, 
  description, 
  actionLabel, 
  children 
}: TryThisCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref] = useScrollReveal<HTMLDivElement>();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={ref}
      className="scroll-reveal bg-muted rounded-lg overflow-hidden shadow-md"
    >
      <div className="p-5 border-b border-border">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button 
          onClick={toggleExpand} 
          variant={isExpanded ? "secondary" : "default"}
          className="w-full"
        >
          {isExpanded ? "Close" : actionLabel}
        </Button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-background">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}