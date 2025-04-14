import { useEffect } from "react";
import CalculatorBody from "@/components/CalculatorBody";
import HistoryPanel from "@/components/HistoryPanel";
import { useCalculator } from "@/hooks/useCalculator";
import { setupKeyboardEvents } from "@/lib/keyBindings";

const Calculator = () => {
  const { addToHistory } = useCalculator();

  useEffect(() => {
    const cleanupKeyboardEvents = setupKeyboardEvents();
    return () => cleanupKeyboardEvents();
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 flex justify-center">
        <CalculatorBody />
      </div>
      <div className="md:w-1/2">
        <HistoryPanel />
      </div>
    </div>
  );
};

export default Calculator;
