import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link } from "wouter";
import { useChaos } from "@/lib/ChaosContext";
import { useAuth } from "@/lib/AuthContext";
import Logo from "@/assets/logo";
import { Button } from "@/components/ui/button";

export default function StoryHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { chaosMode } = useChaos();
  const { user, logout, isAuthenticated } = useAuth();

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
      className={`fixed w-full bg-white/95 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-lg border-b border-slate-200/50' : 'py-5'
      } ${chaosMode ? 'chaos-mode' : ''}`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout - Centered */}
        <div className="hidden md:flex justify-center items-center">
          <div className="flex items-center space-x-12">
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
              <div className="flex items-center">
                <Logo variant="icon" size="sm" colorMode="light" className="h-8 w-8 mr-2" />
                <span className="font-bold text-xl">ExactusBooks</span>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-primary transition-colors text-base font-medium">Features</a>
              <a href="#savings" className="text-slate-600 hover:text-primary transition-colors text-base font-medium">Savings</a>
              <a href="#plans" className="text-slate-600 hover:text-primary transition-colors text-base font-medium">Plans</a>
              <a href="#security" className="text-slate-600 hover:text-primary transition-colors text-base font-medium">Security</a>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4 ml-4">
                  <Link href="/dashboard">
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-4 ml-4">
                  <Link href="/auth">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link href="/auth">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl transition-all text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Layout - Logo left, Menu right */}
        <div className="flex md:hidden justify-between items-center">
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
            <div className="flex items-center">
              <Logo variant="icon" size="sm" colorMode="light" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">ExactusBooks</span>
            </div>
          </motion.div>
          
          <button 
            className="text-foreground hover:text-primary focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Updated menu items */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 absolute w-full left-0 py-4 shadow-lg"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a 
                href="#savings" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Savings
              </a>
              <a 
                href="#plans" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Plans
              </a>
              <a 
                href="#security" 
                className="text-foreground hover:text-primary transition-colors block py-2"
                onClick={closeMobileMenu}
              >
                Security
              </a>
              <a 
                href="#early-access" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors text-center"
                onClick={closeMobileMenu}
              >
                Get early access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* No toggle here - chaos mode is always enabled */}
    </header>
  );
}