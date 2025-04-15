import { useState, useEffect } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";
import { calculatorButtons } from "@/lib/calculatorEngine";
import { useTheme } from "@/context/ThemeContext";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorBody = () => {
  const { theme } = useTheme();
  const { shiftActive, alphaActive } = useCalculator();
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
      className={`calc-body p-3 pb-6 flex flex-col max-w-[380px] w-full mx-auto ${shiftActive ? 'shift-active' : ''} ${alphaActive ? 'alpha-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.01)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(71, 130, 255, 0.15)' 
          : '0 10px 30px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Glass reflection effect */}
      <div 
        className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none z-10"
        style={{
          background: 'linear-gradient(130deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%)',
          opacity: showReflection ? 1 : 0,
          transition: 'opacity 1.5s ease'
        }}
      ></div>
      
      {/* Brand and model identifiers */}
      <div className="calc-brand">CASIO</div>
      <div className="calc-model">fx-991ES PLUS</div>
      
      {/* Solar panel */}
      <div className="calc-solar"></div>
      
      {/* "NATURAL-V.P.A.M." and "2nd edition" text */}
      <div className="absolute top-10 left-4 text-xs font-normal text-slate-600 dark:text-slate-400">
        NATURAL-V.P.A.M.
      </div>
      <div className="absolute top-10 right-28 text-xs text-slate-600 dark:text-slate-400">
        <span className="text-[10px] font-bold">2nd edition</span>
      </div>
      
      {/* Calculator display */}
      <div className="mt-16 mb-4">
        <CalculatorDisplay />
      </div>

      {/* Function buttons grid */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row1.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row1-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* Main function keys */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row2.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row2-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* More function keys */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row3.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row3-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* Trig functions */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row4.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row4-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* More scientific functions */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row5.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row5-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* Control functions */}
      <div className="grid grid-cols-4 gap-1.5 mb-1.5">
        {calculatorButtons.row6.map((button, index) => {
          const { type, ...restProps } = button;
          return (
            <CalculatorButton 
              key={`row6-${index}`} 
              {...restProps}
              type={type as any}
            />
          );
        })}
      </div>

      {/* Numeric keypad and clear buttons */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row7.map((button, index) => (
          <CalculatorButton 
            key={`row7-${index}`} 
            {...button} 
            type={index >= 3 ? "clear" : "number"}
          />
        ))}
      </div>

      {/* Numeric keypad with operations */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row8.map((button, index) => (
          <CalculatorButton 
            key={`row8-${index}`} 
            {...button} 
            type={index < 3 ? "number" : "operator"}
          />
        ))}
      </div>

      {/* More numeric keypad with operations */}
      <div className="grid grid-cols-5 gap-1.5 mb-1.5">
        {calculatorButtons.row9.map((button, index) => (
          <CalculatorButton 
            key={`row9-${index}`} 
            {...button} 
            type={index < 3 ? "number" : "operator"}
          />
        ))}
      </div>

      {/* Final numeric row with equals */}
      <div className="grid grid-cols-5 gap-1.5">
        {calculatorButtons.row10.map((button, index) => (
          <CalculatorButton 
            key={`row10-${index}`} 
            {...button} 
            type={index < 2 ? "number" : index === 4 ? "operator" : "function"}
          />
        ))}
      </div>
      
      {/* Brand footer */}
      <div className="absolute bottom-1 right-3 text-[10px] text-slate-600 dark:text-slate-400 italic">
        CASIO COMPUTER CO., LTD.
      </div>
    </div>
  );
};

export default CalculatorBody;
