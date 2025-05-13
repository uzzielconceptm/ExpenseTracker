import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";

interface ReceiptProps {
  children?: React.ReactNode;
  className?: string;
  index?: number;
}

export default function AnimatedReceipt({ children, className = "", index = 0 }: ReceiptProps) {
  const { chaosMode } = useChaos();
  
  const variants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotate: chaosMode ? Math.random() * 20 - 10 : 0
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotate: chaosMode ? Math.random() * 10 - 5 : 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  return (
    <motion.div
      className={`receipt paper-curl bg-white p-4 rounded-md shadow-md ${className} ${chaosMode ? 'chaos-mode' : ''}`}
      variants={variants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      {children}
    </motion.div>
  );
}