interface TimeNodeProps {
  title: string;
  phase: "past" | "present" | "future";
  position: "left" | "right";
  index: number;
  children: React.ReactNode;
}

export default function TimeNode({ 
  title, 
  phase, 
  position, 
  index, 
  children 
}: TimeNodeProps) {
  // Simple animation variants
  const variants = {
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      }
    }
  };

  const phaseColors = {
    past: "bg-accent text-accent-foreground",
    present: "bg-primary text-primary-foreground",
    future: "bg-secondary text-secondary-foreground"
  };

  return (
    <div className="relative pb-16">
      {/* Timeline dot */}
      <div 
        className={`timeline-dot ${phaseColors[phase]}`} 
        style={{ top: "2rem" }}
      />
      
      {/* Content container - always visible */}
      <div
        className={`${position === "left" ? "mr-auto" : "ml-auto"} 
                   max-w-md md:max-w-lg ${position === "left" ? "md:mr-[5%]" : "md:ml-[5%]"}`}
      >
        <div className={`mb-4 inline-block px-3 py-1 rounded-full text-sm font-medium ${phaseColors[phase]}`}>
          {phase === "past" ? "BEFORE" : phase === "present" ? "SOLUTION" : "FREEDOM"}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}