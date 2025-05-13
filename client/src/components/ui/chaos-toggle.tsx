import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { Wind } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ChaosToggle() {
  const { chaosMode } = useChaos();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            className="chaos-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chaos mode enabled"
          >
            <Wind size={22} className="text-primary-foreground" />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chaos mode is permanently enabled</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}