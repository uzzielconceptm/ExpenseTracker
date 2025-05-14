import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useChaos } from "@/lib/ChaosContext";
import Logo from "@/assets/logo";

export default function StoryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { chaosMode } = useChaos();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-3'
      } ${chaosMode ? 'chaos-mode' : ''}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          animate={{
            rotate: chaosMode ? [0, -2, 0, 2, 0] : 0
          }}
          transition={{
            duration: 5,
            repeat: chaosMode ? Infinity : 0,
            repeatType: "reverse"
          }}
        >
          <Logo variant="full" size="md" colorMode="light" className="h-10" />
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#journey" className="text-foreground hover:text-primary transition-colors">Journey</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#security" className="text-foreground hover:text-primary transition-colors">Security</a>
          <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">Stories</a>
          <a 
            href="#early-access" 
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors ml-4"
          >
            Start My Clean Slate
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            className="text-foreground hover:text-primary focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t absolute w-full left-0 py-3"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#journey" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Journey
              </a>
              <a 
                href="#benefits" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a 
                href="#security" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Security
              </a>
              <a 
                href="#success-stories" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Stories
              </a>
{/* Remove testimonials link since it's now part of success stories */}
              <a 
                href="#early-access" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Start My Clean Slate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* No toggle here - chaos mode is always enabled */}
    </header>
  );
}