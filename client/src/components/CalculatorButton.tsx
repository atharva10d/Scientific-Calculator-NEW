import { useState } from "react";
import { useCalculator } from "@/hooks/useCalculator";
import { ButtonProps } from "@/lib/calculatorEngine";

const CalculatorButton = ({ label, secondaryLabel, tertiaryLabel, action, type = "default", className = "" }: ButtonProps) => {
  const { handleButtonPress, shiftActive, alphaActive } = useCalculator();
  const [isPressed, setIsPressed] = useState(false);

  const getButtonStyle = () => {
    const baseStyles = {
      shift: {
        active: "bg-gradient-to-b from-yellow-300 to-yellow-500 text-black shadow-md shadow-yellow-900/20 border-t border-yellow-200 border-b border-b-yellow-600",
        inactive: "bg-gradient-to-b from-gray-400 to-gray-600 text-white shadow-md shadow-gray-900/20 border-t border-gray-300 border-b border-b-gray-700"
      },
      alpha: {
        active: "bg-gradient-to-b from-red-400 to-red-600 text-white shadow-md shadow-red-900/20 border-t border-red-300 border-b border-b-red-700",
        inactive: "bg-gradient-to-b from-gray-400 to-gray-600 text-white shadow-md shadow-gray-900/20 border-t border-gray-300 border-b border-b-gray-700"
      },
      number: "bg-gradient-to-b from-gray-100 to-gray-300 text-black text-xl shadow-sm shadow-black/20 border-t border-white border-b border-b-gray-400",
      operator: "bg-gradient-to-b from-blue-100 to-blue-200 text-black text-xl shadow-sm shadow-black/20 border-t border-blue-50 border-b border-b-blue-300",
      function: "bg-gradient-to-b from-gray-100 to-gray-300 text-black shadow-sm shadow-black/20 border-t border-white border-b border-b-gray-400",
      clear: "bg-gradient-to-b from-green-400 to-green-600 text-white shadow-md shadow-green-900/20 border-t border-green-300 border-b border-b-green-700",
      control: "bg-gradient-to-b from-gray-400 to-gray-600 text-white shadow-md shadow-gray-900/20 border-t border-gray-300 border-b border-b-gray-700",
      default: "bg-gradient-to-b from-gray-200 to-gray-300 text-black shadow-sm shadow-black/20 border-t border-white border-b border-b-gray-400"
    };

    switch (type) {
      case "shift":
        return shiftActive ? baseStyles.shift.active : baseStyles.shift.inactive;
      case "alpha":
        return alphaActive ? baseStyles.alpha.active : baseStyles.alpha.inactive;
      case "number":
        return baseStyles.number;
      case "operator":
        return baseStyles.operator;
      case "function":
        return baseStyles.function;
      case "clear":
        return baseStyles.clear;
      case "control":
        return baseStyles.control;
      default:
        return baseStyles.default;
    }
  };

  const getSecondaryLabelColor = () => {
    if (type === "clear") return "text-green-800";
    return "text-yellow-600 font-bold";
  };

  const getTertiaryLabelColor = () => {
    return "text-red-600 font-bold";
  };

  const buttonSize = type === "number" || type === "operator" ? "h-10" : "h-8";
  
  // Button press effect
  const handleMouseDown = () => {
    setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`relative ${getButtonStyle()} ${buttonSize} rounded-md text-center flex flex-col justify-center items-center transition-all duration-100 overflow-hidden ${className}`}
      onClick={() => handleButtonPress(action, label)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transform: isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)',
        boxShadow: isPressed ? 'inset 0 1px 3px rgba(0, 0, 0, 0.2)' : ''
      }}
    >
      {/* Button shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30"></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-${isPressed ? '0' : '100'} transition-opacity duration-200`}></div>
      </div>
      
      {/* Button content */}
      <span className={`relative ${type === "function" ? "text-[10px]" : ""}`}>{label}</span>
      {secondaryLabel && (
        <span className={`absolute bottom-1 left-1 ${getSecondaryLabelColor()} text-[8px]`}>
          {secondaryLabel}
        </span>
      )}
      {tertiaryLabel && (
        <span className={`absolute bottom-1 right-1 ${getTertiaryLabelColor()} text-[8px]`}>
          {tertiaryLabel}
        </span>
      )}
    </button>
  );
};

export default CalculatorButton;
