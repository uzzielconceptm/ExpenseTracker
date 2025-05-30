import { useEffect } from "react";
import { useChaos } from "@/lib/ChaosContext";
import Header from "@/components/story/Header";
import IntroScene from "@/components/story/IntroScene";
import HowItWorks from "@/components/story/HowItWorks";
import EarlyAccessForm from "@/components/story/EarlyAccessForm";
import Footer from "@/components/story/Footer";
import ExpenseBenefits from "@/components/story/ExpenseBenefits";
import SecurityFeatures from "@/components/story/SecurityFeatures";
import CombinedSuccessStories from "@/components/story/CombinedSuccessStories";
import ForAccountants from "@/components/story/ForAccountants";
import Savings from "@/components/story/Savings";
import Plans from "@/components/story/Plans";

export default function StoryLandingPage() {
  const { chaosMode } = useChaos();
  
  useEffect(() => {
    // Always add chaos mode to body
    document.body.classList.add('chaos-mode');
    
    // Scroll to element only on hash change, not initial load
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

    // Only add event listener for hash changes, don't scroll on initial load
    window.addEventListener("hashchange", scrollToElement);
    
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
        <ExpenseBenefits />
        <HowItWorks />
        <ForAccountants />
        <Savings />
        <Plans />
        <SecurityFeatures />
        <CombinedSuccessStories />
        <EarlyAccessForm />
      </main>
      <Footer />
    </div>
  );
}