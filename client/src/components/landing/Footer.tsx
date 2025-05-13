export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">ExpenseWise</h3>
            <p className="text-neutral-400 mb-6">
              Smart expense tracking built for solopreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="text-neutral-400 hover:text-white transition-colors">Demo</a></li>
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
          <p>&copy; {new Date().getFullYear()} ExpenseWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
