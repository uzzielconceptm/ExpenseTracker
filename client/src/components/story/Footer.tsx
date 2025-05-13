import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';
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
              From shoebox to streamlined expense management.
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
              <li><a href="#journey" className="text-neutral-400 hover:text-white transition-colors">Journey</a></li>
              <li><a href="#cases" className="text-neutral-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">API Docs</a></li>
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
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; {currentYear} ExpenseWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}