import { useCalculator } from "@/hooks/useCalculator";
import { ButtonProps } from "@/lib/calculatorEngine";

const CalculatorButton = ({ label, secondaryLabel, tertiaryLabel, action, type = "default", className = "" }: ButtonProps) => {
  const { handleButtonPress, shiftActive, alphaActive } = useCalculator();

  const getButtonStyle = () => {
    switch (type) {
      case "shift":
        return shiftActive
          ? "bg-yellow-400 text-black"
          : "bg-gray-500 text-white";
      case "alpha":
        return alphaActive
          ? "bg-red-500 text-white"
          : "bg-gray-500 text-white";
      case "number":
        return "bg-calc-button text-black text-xl";
      case "operator":
        return "bg-calc-button text-black text-xl";
      case "function":
        return "bg-calc-button text-black";
      case "clear":
        return "bg-green-500 text-white";
      case "control":
        return "bg-gray-500 text-white";
      default:
        return "bg-calc-button text-black";
    }
  };

  const getSecondaryLabelColor = () => {
    if (type === "clear") return "text-gray-800";
    return "text-yellow-500";
  };

  const getTertiaryLabelColor = () => {
    return "text-red-500";
  };

  const buttonSize = type === "number" || type === "operator" ? "h-10" : "h-9";

  return (
    <button
      className={`calc-button ${getButtonStyle()} ${buttonSize} rounded text-center flex flex-col justify-center items-center relative transition-all duration-100 ${className}`}
      onClick={() => handleButtonPress(action, label)}
    >
      <span className={type === "function" ? "text-[10px]" : ""}>{label}</span>
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
