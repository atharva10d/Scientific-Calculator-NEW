import { useCalculator } from "@/hooks/useCalculator";

const CalculatorDisplay = () => {
  const { input, result, mode } = useCalculator();

  return (
    <div className="bg-calc-display p-2 pb-4 rounded-sm h-24 mb-4 flex flex-col justify-between">
      {/* Mode indicators at top of display */}
      <div className="flex justify-between text-[10px] text-gray-600">
        <span>𝐃</span>
        <div className="flex gap-2">
          <span>{mode}</span>
          <span>▲</span>
        </div>
      </div>
      
      {/* Main display content */}
      <div className="display-text font-mono flex flex-col">
        <div className="text-sm">{input || " "}</div>
        <div className="text-xl text-right">{result || "0"}</div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
