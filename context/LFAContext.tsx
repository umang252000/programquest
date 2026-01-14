"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LFAState = {
  problem: string;
  outcomes: string[];
  stakeholders: string[];
  interventions: string[];
  indicators: string[];
};

const initialState: LFAState = {
  problem: "",
  outcomes: [],
  stakeholders: [],
  interventions: [],
  indicators: [],
};

type LFAContextType = {
  data: LFAState;
  updateField: <K extends keyof LFAState>(
    field: K,
    value: LFAState[K]
  ) => void;
};

const LFAContext = createContext<LFAContextType | null>(null);

export function LFAProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<LFAState>(initialState);

  function updateField<K extends keyof LFAState>(
    field: K,
    value: LFAState[K]
  ) {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <LFAContext.Provider value={{ data, updateField }}>
      {children}
    </LFAContext.Provider>
  );
}

export function useLFA() {
  const context = useContext(LFAContext);
  if (!context) {
    throw new Error("useLFA must be used within LFAProvider");
  }
  return context;
}