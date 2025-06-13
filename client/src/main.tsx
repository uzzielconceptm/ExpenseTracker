import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

// Add framer motion components to window for easier debugging
if (typeof window !== 'undefined') {
  (window as any).motion = motion;
  (window as any).AnimatePresence = AnimatePresence;
}

createRoot(document.getElementById("root")!).render(<App />);
