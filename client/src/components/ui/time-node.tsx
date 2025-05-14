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
  const phaseColors = {
    past: "bg-accent text-accent-foreground",
    present: "bg-primary text-primary-foreground",
    future: "bg-secondary text-secondary-foreground"
  };

  const labelColors = {
    past: "text-accent-foreground bg-accent/10",
    present: "text-primary-foreground bg-primary/10",
    future: "text-secondary-foreground bg-secondary/10"
  };

  return (
    <div className={`relative pb-16 ${index > 0 ? 'mt-12' : ''}`}>
      <div className={`${position === "left" ? "ml-auto text-right" : "mr-auto"} max-w-md md:max-w-lg px-4`}>
        <div className={`mb-4 inline-block px-3 py-1 rounded-full text-sm font-medium ${labelColors[phase]}`}>
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