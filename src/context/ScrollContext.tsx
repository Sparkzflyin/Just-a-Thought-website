"use client";

import { createContext, useState, useContext } from "react";

interface ScrollContextType {
  targetId: string | null;
  setTargetId: (id: string | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [targetId, setTargetId] = useState<string | null>(null);

  return (
    <ScrollContext.Provider value={{ targetId, setTargetId }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
