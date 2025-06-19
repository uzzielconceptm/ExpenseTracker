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
      {/* Floating geometric shapes */}
      <div className="floating-shapes"></div>
      
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
