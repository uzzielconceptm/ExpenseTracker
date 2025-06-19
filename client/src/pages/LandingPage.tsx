import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Demo from "@/components/landing/Demo";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import EarlyAccessForm from "@/components/landing/EarlyAccessForm";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  useEffect(() => {
    // Scroll to element on hash change and initial load
    const scrollToElement = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", scrollToElement);
    scrollToElement(); // For initial load

    return () => {
      window.removeEventListener("hashchange", scrollToElement);
    };
  }, []);

  return (
    <div className="font-sans text-neutral-900 relative min-h-screen">
      {/* Enhanced floating geometric shapes */}
      <div className="floating-shapes"></div>
      
      {/* Large dramatic background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Large moving gradient orb */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-full blur-xl"
          style={{
            top: '10%',
            right: '5%',
            animation: 'mega-drift 15s ease-in-out infinite'
          }}
        ></div>
        
        {/* Second large moving orb */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-teal-500/25 to-cyan-500/20 rounded-full blur-xl"
          style={{
            bottom: '15%',
            left: '8%',
            animation: 'mega-drift 20s ease-in-out infinite reverse',
            animationDelay: '-5s'
          }}
        ></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-400/25 to-teal-400/20 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/25 rounded-full blur-md animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-teal-400/25 to-cyan-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-br from-indigo-400/20 to-purple-400/25 rounded-full blur-md animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
        
        {/* Additional floating elements for complete coverage */}
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/25 rounded-full blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-violet-400/22 to-purple-400/18 rounded-full blur-sm animate-bounce" style={{animationDuration: '5s', animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/5 w-40 h-40 bg-gradient-to-br from-cyan-400/25 to-blue-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/6 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/18 to-rose-400/22 rounded-full blur-sm animate-bounce" style={{animationDuration: '6s'}}></div>
        
        {/* Additional sophisticated elements */}
        <div className="absolute top-1/5 left-1/6 w-16 h-16 bg-gradient-to-br from-amber-400/15 to-orange-400/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-22 h-22 bg-gradient-to-br from-lime-400/18 to-green-400/15 rounded-full blur-sm animate-bounce" style={{animationDuration: '7s', animationDelay: '2.5s'}}></div>
        <div className="absolute top-2/5 left-4/5 w-18 h-18 bg-gradient-to-br from-red-400/12 to-pink-400/18 rounded-full blur-sm animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      
      <Header />
      <main>
        <Hero />
        <div className="section-gradient">
          <Features />
        </div>
        <Demo />
        <div className="section-gradient">
          <Testimonials />
        </div>
        <Pricing />
        <EarlyAccessForm />
      </main>
      <Footer />
    </div>
  );
}
