import { create, all } from 'mathjs';

// Create a mathjs instance with all functions
const math = create(all);

// Configure mathjs
math.config({
  number: 'number', // Use JavaScript's number type
  precision: 15     // Set precision for BigNumber
});

export interface ButtonProps {
  label: string;
  secondaryLabel?: string;
  tertiaryLabel?: string;
  action: string;
  type?: ButtonType;
  className?: string;
}

export type ButtonType = "default" | "shift" | "alpha" | "number" | "operator" | "function" | "clear" | "control";

export const calculatorButtons = {
  row1: [
    { label: "SHIFT", action: "shift", type: "shift" },
    { label: "ALPHA", action: "alpha", type: "alpha" },
    { label: "MODE", action: "mode", type: "control" },
    { label: "SETUP", action: "setup", type: "control" },
    { label: "ON", action: "on", type: "control" }
  ],
  row2: [
    { label: "SOLVE", secondaryLabel: "d/dx", action: "solve", type: "function" },
    { label: "∫dx", secondaryLabel: "Σ", action: "integrate", type: "function" },
    { label: "CALC", secondaryLabel: "∫", action: "calc", type: "function" },
    { label: "x^y", secondaryLabel: "□", action: "power", type: "function" },
    { label: "log", secondaryLabel: "10^x", action: "log", type: "function" }
  ],
  row3: [
    { label: "√", secondaryLabel: "∛", action: "sqrt", type: "function" },
    { label: "x²", secondaryLabel: "□", action: "square", type: "function" },
    { label: "^", secondaryLabel: "□", action: "pow", type: "function" },
    { label: "log", secondaryLabel: "e^x", action: "log10", type: "function" },
    { label: "ln", secondaryLabel: "□", action: "ln", type: "function" }
  ],
  row4: [
    { label: "(-)", secondaryLabel: "□", action: "negate", type: "function" },
    { label: "°'''", secondaryLabel: "□", action: "degrees", type: "function" },
    { label: "hyp", secondaryLabel: "□", action: "hyp", type: "function" },
    { label: "sin", secondaryLabel: "sin^-1", action: "sin", type: "function" },
    { label: "cos", secondaryLabel: "cos^-1", action: "cos", type: "function" }
  ],
  row5: [
    { label: "STO", secondaryLabel: "RCL", action: "store", type: "function" },
    { label: "ENG", secondaryLabel: "□", action: "eng", type: "function" },
    { label: "(", secondaryLabel: "□", action: "leftParen", type: "function" },
    { label: ")", secondaryLabel: "□", action: "rightParen", type: "function" },
    { label: "S⇔D", secondaryLabel: "M+", action: "sd", type: "function" }
  ],
  row6: [
    { label: "CONST", secondaryLabel: "□", action: "const", type: "function" },
    { label: "CONV", secondaryLabel: "□", action: "conv", type: "function" },
    { label: "CLR", secondaryLabel: "INS", action: "clear", type: "function" },
    { label: "INS", secondaryLabel: "OFF", action: "ins", type: "function" }
  ],
  row7: [
    { label: "7", secondaryLabel: "□", action: "7", type: "number" },
    { label: "8", secondaryLabel: "□", action: "8", type: "number" },
    { label: "9", secondaryLabel: "□", action: "9", type: "number" },
    { label: "DEL", secondaryLabel: "INS", action: "delete", type: "clear" },
    { label: "AC", secondaryLabel: "OFF", action: "allClear", type: "clear" }
  ],
  row8: [
    { label: "4", secondaryLabel: "□", action: "4", type: "number" },
    { label: "5", secondaryLabel: "□", action: "5", type: "number" },
    { label: "6", secondaryLabel: "□", action: "6", type: "number" },
    { label: "×", secondaryLabel: "□", action: "*", type: "operator" },
    { label: "÷", secondaryLabel: "□", action: "/", type: "operator" }
  ],
  row9: [
    { label: "1", secondaryLabel: "□", action: "1", type: "number" },
    { label: "2", secondaryLabel: "□", action: "2", type: "number" },
    { label: "3", secondaryLabel: "□", action: "3", type: "number" },
    { label: "+", secondaryLabel: "□", action: "+", type: "operator" },
    { label: "−", secondaryLabel: "□", action: "-", type: "operator" }
  ],
  row10: [
    { label: "0", secondaryLabel: "□", action: "0", type: "number" },
    { label: ".", secondaryLabel: "□", action: ".", type: "number" },
    { label: "×10^x", secondaryLabel: "□", action: "exp", type: "function" },
    { label: "Ans", secondaryLabel: "□", action: "ans", type: "function" },
    { label: "=", secondaryLabel: "□", action: "equals", type: "operator" }
  ]
};

// Calculator modes
export const calculatorModes = [
  "COMP", // Computation
  "CMPLX", // Complex number
  "STAT", // Statistics
  "BASE", // Base-n
  "EQN", // Equation
  "MATRIX", // Matrix
  "TABLE", // Table
  "VECTOR" // Vector
];

/**
 * Evaluates a mathematical expression
 * @param expression The mathematical expression to evaluate
 * @returns The result of the evaluation
 */
export const evaluateExpression = (expression: string): string => {
  try {
    // Replace display characters with mathjs operators
    let processedExpression = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/π/g, 'pi')
      .replace(/∫/g, 'integrate');
      
    // Handle special functions
    processedExpression = processedExpression
      .replace(/sin\((\d+)°\)/g, 'sin($1*pi/180)')
      .replace(/cos\((\d+)°\)/g, 'cos($1*pi/180)')
      .replace(/tan\((\d+)°\)/g, 'tan($1*pi/180)');

    // Evaluate the expression
    const result = math.evaluate(processedExpression);
    
    // Format the result
    if (typeof result === 'number') {
      // If it's a whole number, don't show decimal places
      if (Math.floor(result) === result) {
        return result.toString();
      }
      // Otherwise show up to 10 decimal places
      return parseFloat(result.toFixed(10)).toString();
    }
    
    return result.toString();
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return 'Error';
  }
};

/**
 * Formats the input for display
 * @param input The raw calculator input
 * @returns Formatted input for natural display
 */
export const formatInputForDisplay = (input: string): string => {
  // Replace operators with display versions
  let displayInput = input
    .replace(/\*/g, '×')
    .replace(/\//g, '÷')
    .replace(/-/g, '−')
    .replace(/\*\*/g, '^')
    .replace(/pi/g, 'π');
  
  // Handle special functions for display
  displayInput = displayInput
    .replace(/sqrt\(([^)]+)\)/g, '√($1)')
    .replace(/integrate\(([^,]+),([^,]+),([^,]+),([^)]+)\)/g, '∫₍$2₎^$3 $1 d$4');
  
  return displayInput;
};

export interface Calculator {
  input: string;
  result: string;
  history: { input: string; result: string }[];
  mode: string;
  shiftActive: boolean;
  alphaActive: boolean;
}

/**
 * Processes a calculator button press
 * @param calculator The current calculator state
 * @param action The button action
 * @param label The button label (for display)
 * @returns Updated calculator state
 */
export const processButtonPress = (
  calculator: Calculator,
  action: string,
  label: string
): Calculator => {
  const { input, result, history, mode, shiftActive, alphaActive } = calculator;
  let newInput = input;
  let newResult = result;
  let newShiftActive = shiftActive;
  let newAlphaActive = alphaActive;
  
  // Handle special actions
  switch (action) {
    case 'shift':
      return {
        ...calculator,
        shiftActive: !shiftActive,
        alphaActive: false
      };
    
    case 'alpha':
      return {
        ...calculator,
        alphaActive: !alphaActive,
        shiftActive: false
      };
    
    case 'on':
    case 'allClear':
      return {
        ...calculator,
        input: '',
        result: '0',
        shiftActive: false,
        alphaActive: false
      };
    
    case 'delete':
      return {
        ...calculator,
        input: input.slice(0, -1),
        shiftActive: false,
        alphaActive: false
      };
    
    case 'equals':
      if (input) {
        try {
          const newResult = evaluateExpression(input);
          const newHistory = [
            { input, result: newResult },
            ...history
          ].slice(0, 20); // Keep only 20 latest entries
          
          return {
            ...calculator,
            result: newResult,
            history: newHistory,
            shiftActive: false,
            alphaActive: false
          };
        } catch (error) {
          return {
            ...calculator,
            result: 'Error',
            shiftActive: false,
            alphaActive: false
          };
        }
      }
      return calculator;
    
    case 'mode':
      // Cycle through calculator modes
      const currentModeIndex = calculatorModes.indexOf(mode);
      const nextModeIndex = (currentModeIndex + 1) % calculatorModes.length;
      return {
        ...calculator,
        mode: calculatorModes[nextModeIndex],
        shiftActive: false,
        alphaActive: false
      };
    
    case 'ans':
      // Insert the previous result
      if (history.length > 0) {
        return {
          ...calculator,
          input: input + history[0].result,
          shiftActive: false,
          alphaActive: false
        };
      }
      return calculator;
    
    default:
      // Handle numeric and operator inputs
      if (/^[0-9.]$/.test(action) || 
          ['+', '-', '*', '/', '(', ')', '^'].includes(action)) {
        return {
          ...calculator,
          input: input + label,
          shiftActive: false,
          alphaActive: false
        };
      }
      
      // Handle functions
      if (['sin', 'cos', 'tan', 'log', 'ln', 'sqrt'].includes(action)) {
        return {
          ...calculator,
          input: input + `${action}(`,
          shiftActive: false,
          alphaActive: false
        };
      }
      
      // Default handling for other buttons
      return {
        ...calculator,
        input: input + label,
        shiftActive: false,
        alphaActive: false
      };
  }
};
