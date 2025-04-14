import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { Calculator, calculatorModes, processButtonPress, formatInputForDisplay } from "@/lib/calculatorEngine";

interface CalculatorContextType {
  input: string;
  displayInput: string;
  result: string;
  history: Array<{ input: string; result: string }>;
  mode: string;
  shiftActive: boolean;
  alphaActive: boolean;
  handleButtonPress: (action: string, label: string) => void;
  clearHistory: () => void;
  addToHistory: (item: { input: string; result: string }) => void;
  useHistoryItem: (item: { input: string; result: string }) => void;
}

// Create context with default values to avoid undefined checks
const CalculatorContext = createContext<CalculatorContextType>({
  input: "",
  displayInput: "",
  result: "0",
  history: [],
  mode: calculatorModes[0],
  shiftActive: false,
  alphaActive: false,
  handleButtonPress: () => {},
  clearHistory: () => {},
  addToHistory: () => {},
  useHistoryItem: () => {}
});

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [calculator, setCalculator] = useState<Calculator>({
    input: "",
    result: "0",
    history: [],
    mode: calculatorModes[0],
    shiftActive: false,
    alphaActive: false
  });

  // Load history from localStorage on initial render
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR fallback
    
    const savedHistory = localStorage.getItem("calculator-history");
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setCalculator(prev => ({
          ...prev,
          history: parsedHistory
        }));
      } catch (e) {
        console.error("Failed to parse history from localStorage:", e);
      }
    }
  }, []);

  // Save history to localStorage when it changes
  useEffect(() => {
    if (typeof window === 'undefined') return; // SSR fallback
    localStorage.setItem("calculator-history", JSON.stringify(calculator.history));
  }, [calculator.history]);

  const handleButtonPress = (action: string, label: string) => {
    setCalculator(prevState => processButtonPress(prevState, action, label));
  };

  const clearHistory = () => {
    setCalculator(prev => ({
      ...prev,
      history: []
    }));
  };

  const addToHistory = (item: { input: string; result: string }) => {
    setCalculator(prev => ({
      ...prev,
      history: [item, ...prev.history].slice(0, 20) // Keep only 20 latest entries
    }));
  };

  const useHistoryItem = (item: { input: string; result: string }) => {
    setCalculator(prev => ({
      ...prev,
      input: item.input,
      result: item.result
    }));
  };

  // Format input for display
  const displayInput = formatInputForDisplay(calculator.input);

  return (
    <CalculatorContext.Provider
      value={{
        input: calculator.input,
        displayInput,
        result: calculator.result,
        history: calculator.history,
        mode: calculator.mode,
        shiftActive: calculator.shiftActive,
        alphaActive: calculator.alphaActive,
        handleButtonPress,
        clearHistory,
        addToHistory,
        useHistoryItem
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

// Custom hook to use the calculator context
export const useCalculator = () => useContext(CalculatorContext);

export default CalculatorContext;
