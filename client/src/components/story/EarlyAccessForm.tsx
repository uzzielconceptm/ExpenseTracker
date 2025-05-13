import { useState, useEffect } from "react";
import EarlyAccessPopup from "./EarlyAccessPopup";

export default function StoryEarlyAccessForm() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Open popup automatically when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Small delay for better user experience
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden">
      {/* Early Access Popup Dialog */}
      <EarlyAccessPopup isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
}