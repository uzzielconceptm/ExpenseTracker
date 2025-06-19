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
      
      {/* Additional visible background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/15 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-blue-400/20 rounded-full blur-sm animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-br from-teal-400/20 to-cyan-400/15 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-indigo-400/15 to-purple-400/20 rounded-full blur-sm animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
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
