import { motion } from "framer-motion";
import { useChaos } from "@/lib/ChaosContext";
import { Sparkles, Wind } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ChaosToggle() {
  const { chaosMode, toggleChaosMode } = useChaos();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            onClick={toggleChaosMode}
            className="chaos-toggle"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={chaosMode ? "Disable chaos mode" : "Enable chaos mode"}
          >
            {chaosMode ? (
              <Wind size={22} className="text-primary-foreground" />
            ) : (
              <Sparkles size={22} className="text-primary" />
            )}
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>{chaosMode ? "Disable chaos mode" : "Enable chaos mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}