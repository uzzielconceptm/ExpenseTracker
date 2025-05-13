import { useEffect } from "react";
import { useChaos } from "@/lib/ChaosContext";
import Header from "@/components/story/Header";
import IntroScene from "@/components/story/IntroScene";
import Journey from "@/components/story/Journey";
import CaseStudies from "@/components/story/CaseStudies";
import Testimonials from "@/components/story/Testimonials";
import Pricing from "@/components/story/Pricing";
import EarlyAccessForm from "@/components/story/EarlyAccessForm";
import Footer from "@/components/story/Footer";

export default function StoryLandingPage() {
  const { chaosMode } = useChaos();
  
  useEffect(() => {
    // Update body class when chaos mode changes
    if (chaosMode) {
      document.body.classList.add('chaos-mode');
    } else {
      document.body.classList.remove('chaos-mode');
    }
    
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
    
    // Initialize scroll reveal
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.scroll-reveal');
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("hashchange", scrollToElement);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('chaos-mode');
    };
  }, [chaosMode]);

  return (
    <div className={`font-mono text-foreground bg-background ${chaosMode ? 'chaos-mode' : ''}`}>
      <Header />
      <main>
        <IntroScene />
        <Journey />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <EarlyAccessForm />
      </main>
      <Footer />
    </div>
  );
}