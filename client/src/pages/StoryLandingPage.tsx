import { useEffect } from "react";
import { useChaos } from "@/lib/ChaosContext";
import Header from "@/components/story/Header";
import IntroScene from "@/components/story/IntroScene";
import Journey from "@/components/story/Journey";
import Pricing from "@/components/story/Pricing";
import EarlyAccessForm from "@/components/story/EarlyAccessForm";
import Footer from "@/components/story/Footer";
import ExpenseBenefits from "@/components/story/ExpenseBenefits";

import SecurityFeatures from "@/components/story/SecurityFeatures";
import CombinedSuccessStories from "@/components/story/CombinedSuccessStories";

export default function StoryLandingPage() {
  const { chaosMode } = useChaos();
  
  useEffect(() => {
    // Always add chaos mode to body
    document.body.classList.add('chaos-mode');
    
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
  }, []);

  return (
    <div className="font-mono text-foreground bg-background chaos-mode">
      <Header />
      <main>
        <IntroScene />
        <Journey />
        {/* FreshBooks-inspired sections */}
        <ExpenseBenefits />
        <SecurityFeatures />
        {/* Combined success stories section */}
        <CombinedSuccessStories />
        <Pricing />
        <EarlyAccessForm />
      </main>
      <Footer />
    </div>
  );
}