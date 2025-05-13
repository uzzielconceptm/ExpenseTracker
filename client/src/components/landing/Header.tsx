import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-primary text-2xl font-heading font-bold">ExpenseWise</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-neutral-700 hover:text-primary font-medium transition-colors">Features</a>
          <a href="#demo" className="text-neutral-700 hover:text-primary font-medium transition-colors">Demo</a>
          <a href="#pricing" className="text-neutral-700 hover:text-primary font-medium transition-colors">Pricing</a>
          <a href="#early-access" className="ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium">Try It Free</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-700 hover:text-primary focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                href="#features" 
                className="text-neutral-700 hover:text-primary font-medium transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-neutral-700 hover:text-primary font-medium transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-neutral-700 hover:text-primary font-medium transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a 
                href="#early-access" 
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
                onClick={closeMobileMenu}
              >
                Try It Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
