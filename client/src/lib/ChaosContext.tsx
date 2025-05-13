import { createContext, useContext, ReactNode } from "react";

// Simplified context that only provides chaosMode as true
type ChaosContextType = {
  chaosMode: boolean;
};

const ChaosContext = createContext<ChaosContextType>({ chaosMode: true });

export function ChaosProvider({ children }: { children: ReactNode }) {
  // Always provide chaosMode as true
  const value = { chaosMode: true };

  return (
    <ChaosContext.Provider value={value}>
      {children}
    </ChaosContext.Provider>
  );
}

export function useChaos() {
  return useContext(ChaosContext);
}