import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { calculatorButtons } from "@/lib/calculatorEngine";

const CalculatorBody = () => {
  return (
    <div className="calculator-container bg-[#333333] rounded-3xl p-3 pb-6 flex flex-col shadow-lg max-w-[380px] w-full aspect-[380/800]">
      {/* Solar panel and display section */}
      <div className="mb-2">
        {/* Casio logo and solar panel */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-white font-bold text-sm flex flex-col">
            <span>CASIO</span>
            <span className="text-xs font-normal text-gray-300">fx-991ES PLUS</span>
            <span className="text-xs font-normal text-gray-300">NATURAL-V.P.A.M.</span>
          </div>
          <div className="solar-panel h-4 w-24 rounded bg-gradient-to-r from-gray-700 to-gray-800"></div>
          <div className="text-xs text-right text-gray-300">
            <span>2nd edition</span>
          </div>
        </div>

        {/* Calculator display */}
        <CalculatorDisplay />
      </div>

      {/* Function buttons section */}
      <div className="grid grid-cols-5 gap-2 mb-2">
        {calculatorButtons.row1.map((button, index) => (
          <CalculatorButton key={`row1-${index}`} {...button} />
        ))}
      </div>

      {/* Navigation and function keys */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row2.map((button, index) => (
          <CalculatorButton key={`row2-${index}`} {...button} />
        ))}
      </div>

      {/* More function keys */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row3.map((button, index) => (
          <CalculatorButton key={`row3-${index}`} {...button} />
        ))}
      </div>

      {/* Brackets and scientific functions */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row4.map((button, index) => (
          <CalculatorButton key={`row4-${index}`} {...button} />
        ))}
      </div>

      {/* More scientific functions */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row5.map((button, index) => (
          <CalculatorButton key={`row5-${index}`} {...button} />
        ))}
      </div>

      {/* Constants section */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row6.map((button, index) => (
          <CalculatorButton key={`row6-${index}`} {...button} />
        ))}
      </div>

      {/* Numeric keypad section - Row 1 */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row7.map((button, index) => (
          <CalculatorButton 
            key={`row7-${index}`} 
            {...button} 
            type={index >= 3 ? "clear" : "number"}
          />
        ))}
      </div>

      {/* Numeric keypad section - Row 2 */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row8.map((button, index) => (
          <CalculatorButton 
            key={`row8-${index}`} 
            {...button} 
            type={index < 3 ? "number" : "operator"}
          />
        ))}
      </div>

      {/* Numeric keypad section - Row 3 */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row9.map((button, index) => (
          <CalculatorButton 
            key={`row9-${index}`} 
            {...button} 
            type={index < 3 ? "number" : "operator"}
          />
        ))}
      </div>

      {/* Numeric keypad section - Row 4 */}
      <div className="grid grid-cols-5 gap-2">
        {calculatorButtons.row10.map((button, index) => (
          <CalculatorButton 
            key={`row10-${index}`} 
            {...button} 
            type={index < 2 ? "number" : index === 4 ? "operator" : "function"}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
