import { useCalculator } from "@/hooks/useCalculator";
import { formatInputForDisplay } from "@/lib/calculatorEngine";
import { useState, useEffect } from "react";

const CalculatorDisplay = () => {
  const { input, result, mode, shiftActive, alphaActive } = useCalculator();
  const [formattedInput, setFormattedInput] = useState("");
  
  // Format the input for natural display
  useEffect(() => {
    setFormattedInput(formatInputForDisplay(input));
  }, [input]);

  return (
    <div className="bg-calc-display p-2 pb-4 rounded-sm h-28 mb-4 flex flex-col justify-between select-none">
      {/* Mode indicators and status row at top of display */}
      <div className="flex justify-between text-[10px] text-gray-700 dark:text-gray-600">
        <div className="flex gap-1">
          <span>𝐃</span>
          {shiftActive && <span className="font-bold">SHIFT</span>}
          {alphaActive && <span className="font-bold">ALPHA</span>}
        </div>
        <div className="flex gap-2">
          <span className="font-bold">{mode}</span>
          <span>{(shiftActive || alphaActive) ? "▲" : ""}</span>
        </div>
      </div>
      
      {/* Natural display line (similar to Casio FX-991ES) */}
      <div className="natural-display text-xs text-left font-mono h-6 overflow-hidden overflow-ellipsis whitespace-nowrap">
        {formattedInput || " "}
      </div>
      
      {/* Main display content with Casio-like styling */}
      <div className="display-text font-mono flex flex-col bg-white/5 rounded-sm p-1">
        <div className="text-xl text-right font-bold font-digit tracking-wider overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
          {result || "0"}
        </div>
      </div>
      
      {/* Bottom shadow line typical for calculators */}
      <div className="h-[1px] bg-black/10 dark:bg-white/10 mt-1"></div>
    </div>
  );
};

export default CalculatorDisplay;
