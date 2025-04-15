import { useState, useEffect } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { calculatorButtons } from "@/lib/calculatorEngine";
import { useTheme } from "@/context/ThemeContext";

const CalculatorBody = () => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [showReflection, setShowReflection] = useState(false);
  
  // Add reflection effect when calculator loads or theme changes
  useEffect(() => {
    setShowReflection(true);
    const timer = setTimeout(() => {
      setShowReflection(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [theme]);
  
  return (
    <div 
      className="calculator-container relative bg-gradient-to-b from-[#2e2e2e] to-[#222222] rounded-3xl p-3 pb-6 flex flex-col shadow-2xl max-w-[380px] w-full aspect-[380/800] border border-gray-800/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isHovered 
          ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 20px rgba(71, 130, 255, 0.2)' 
          : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Glass reflection effect */}
      <div 
        className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-10"
        style={{
          background: 'linear-gradient(130deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 50%)',
          opacity: showReflection ? 1 : 0,
          transition: 'opacity 1.5s ease'
        }}
      ></div>
      
      {/* Solar panel and display section */}
      <div className="mb-2 relative z-0">
        {/* Casio logo and solar panel */}
        <div className="flex justify-between items-center mb-2 px-1">
          <div className="text-white font-bold text-sm flex flex-col">
            <span className="text-gradient-gold">CASIO</span>
            <span className="text-xs font-normal text-gray-300">fx-991ES PLUS</span>
            <span className="text-xs font-normal text-gray-300">NATURAL-V.P.A.M.</span>
          </div>
          <div className="solar-panel h-4 w-24 rounded bg-gradient-to-r from-blue-900/40 to-blue-800/30 relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-r border-blue-900/50 h-full"></div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
          </div>
          <div className="text-xs text-right text-gray-300 flex flex-col items-end">
            <span className="premium-badge">2nd</span>
            <span className="text-[10px] mt-1">edition</span>
          </div>
        </div>

        {/* Calculator display */}
        <CalculatorDisplay />
      </div>

      {/* Function buttons section with hover animation */}
      <div className="grid grid-cols-5 gap-2 mb-2">
        {calculatorButtons.row1.map((button, index) => (
          <CalculatorButton 
            key={`row1-${index}`} 
            {...button} 
            className="calculator-button"
          />
        ))}
      </div>

      {/* Navigation and function keys */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row2.map((button, index) => (
          <CalculatorButton 
            key={`row2-${index}`} 
            {...button}
            className="calculator-button" 
          />
        ))}
      </div>

      {/* More function keys */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row3.map((button, index) => (
          <CalculatorButton 
            key={`row3-${index}`} 
            {...button} 
            className="calculator-button"
          />
        ))}
      </div>

      {/* Brackets and scientific functions */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row4.map((button, index) => (
          <CalculatorButton 
            key={`row4-${index}`} 
            {...button} 
            className="calculator-button"
          />
        ))}
      </div>

      {/* More scientific functions */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row5.map((button, index) => (
          <CalculatorButton 
            key={`row5-${index}`} 
            {...button} 
            className="calculator-button"
          />
        ))}
      </div>

      {/* Constants section */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row6.map((button, index) => (
          <CalculatorButton 
            key={`row6-${index}`} 
            {...button} 
            className="calculator-button"
          />
        ))}
      </div>

      {/* Numeric keypad section - Row 1 */}
      <div className="grid grid-cols-5 gap-2 mb-1">
        {calculatorButtons.row7.map((button, index) => (
          <CalculatorButton 
            key={`row7-${index}`} 
            {...button} 
            type={index >= 3 ? "clear" : "number"}
            className="calculator-button"
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
            className="calculator-button"
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
            className="calculator-button"
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
            className="calculator-button"
          />
        ))}
      </div>
      
      {/* Bottom logo */}
      <div className="absolute bottom-1 right-3 text-[10px] text-gray-500 italic">
        CASIO COMPUTER CO., LTD.
      </div>
    </div>
  );
};

export default CalculatorBody;
