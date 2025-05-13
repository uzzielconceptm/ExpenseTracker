import { createContext, useContext, useState, ReactNode } from "react";

type ChaosContextType = {
  chaosMode: boolean;
  toggleChaosMode: () => void;
};

const ChaosContext = createContext<ChaosContextType | undefined>(undefined);

export function ChaosProvider({ children }: { children: ReactNode }) {
  // Start with chaos mode enabled by default
  const [chaosMode, setChaosMode] = useState(true);

  const toggleChaosMode = () => {
    setChaosMode((prev) => !prev);
  };

  return (
    <ChaosContext.Provider value={{ chaosMode, toggleChaosMode }}>
      {children}
    </ChaosContext.Provider>
  );
}

export function useChaos() {
  const context = useContext(ChaosContext);
  if (context === undefined) {
    throw new Error("useChaos must be used within a ChaosProvider");
  }
  return context;
}