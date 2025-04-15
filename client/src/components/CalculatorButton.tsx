import { useState } from "react";
import { useCalculator } from "@/hooks/useCalculator";
import { ButtonProps } from "@/lib/calculatorEngine";

const CalculatorButton = ({ label, secondaryLabel, tertiaryLabel, action, type = "default", className = "" }: ButtonProps) => {
  const { handleButtonPress, shiftActive, alphaActive } = useCalculator();
  const [isPressed, setIsPressed] = useState(false);

  const getButtonClassNames = () => {
    const baseClass = "calc-btn";
    
    // Apply styling based on button type
    switch (type) {
      case "shift":
        return `${baseClass} btn-shift`;
      case "alpha":
        return `${baseClass} btn-alpha`;
      case "number":
        return `${baseClass} btn-number text-base font-bold`;
      case "operator":
        return `${baseClass} btn-operator text-base`;
      case "function":
        return `${baseClass} btn-function text-xs`;
      case "clear":
        return `${baseClass} btn-clear text-sm font-bold`;
      case "control":
        return `${baseClass} btn-control text-xs font-medium`;
      default:
        return `${baseClass} btn-function`;
    }
  };

  // Determine button height based on its type
  const getButtonSizeClass = () => {
    if (type === "number" || type === "operator") {
      return "h-12 md:h-14";
    }
    return "h-10 md:h-12";
  };
  
  // Click handlers for the press effect
  const handleMouseDown = () => {
    setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`${getButtonClassNames()} ${getButtonSizeClass()} ${className}`}
      onClick={() => handleButtonPress(action, label)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transform: isPressed ? 'translateY(1px) scale(0.98)' : '',
        boxShadow: isPressed ? 'inset 0 1px 3px rgba(0, 0, 0, 0.2)' : ''
      }}
    >
      {/* Main label */}
      <span className="relative">{label}</span>
      
      {/* Secondary label (usually for SHIFT functions - shown in blue) */}
      {secondaryLabel && secondaryLabel !== "□" && (
        <span className="secondary-label">
          {secondaryLabel}
        </span>
      )}
      
      {/* Tertiary label (usually for ALPHA functions - shown in green) */}
      {tertiaryLabel && tertiaryLabel !== "□" && (
        <span className="tertiary-label">
          {tertiaryLabel}
        </span>
      )}
    </button>
  );
};

export default CalculatorButton;
