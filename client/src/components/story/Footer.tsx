import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github, Phone, Mail } from 'lucide-react';
import Logo from "@/assets/logo";

export default function StoryFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Logo variant="full" colorMode="dark" size="md" className="h-10" />
            </motion.div>
            <p className="text-neutral-400 mb-6">
              Receipts, bank transactions, and expenses—organized in one place.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#for-accountants" className="text-neutral-400 hover:text-white transition-colors">For Accountants</a></li>
              <li><a href="#security" className="text-neutral-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#early-access" className="text-neutral-400 hover:text-white transition-colors">Early Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <div className="mb-4 text-neutral-400">
            <p className="font-medium text-white mb-3">Contact Us</p>
            <p className="flex items-center justify-center gap-2 mb-2">
              <Phone size={16} />
              <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} />
              <a href="mailto:hello@finmatch.com" className="hover:text-white transition-colors">hello@finmatch.com</a>
            </p>
          </div>
          
          <div className="mb-4 text-neutral-500 max-w-xl mx-auto">
            <p>FinMatch is not affiliated with any banking institution. Gmail is a trademark of Google.</p>
          </div>
          
          <p className="text-neutral-500">&copy; {currentYear} FinMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}