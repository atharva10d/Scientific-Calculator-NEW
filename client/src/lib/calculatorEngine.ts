import { create, all } from 'mathjs';

// Create a mathjs instance with all functions
const math = create(all);

// Configure mathjs
math.config({
  number: 'number', // Use JavaScript's number type
  precision: 15     // Set precision for BigNumber
});

// Add specialized calculator functions
math.import({
  // Sexagesimal conversions (Degrees, Minutes, Seconds)
  toDMS: function(decimal: number) {
    const deg = Math.floor(decimal);
    const minFloat = (decimal - deg) * 60;
    const min = Math.floor(minFloat);
    const sec = Math.round((minFloat - min) * 60);
    return { deg, min, sec };
  },
  fromDMS: function(deg: number, min: number, sec: number) {
    return deg + min/60 + sec/3600;
  },
  
  // Factorial (already exists in mathjs, but adding for clarity)
  factorial: math.factorial,
  
  // Base-n calculations
  toBinary: function(n: number) { return n.toString(2); },
  toOctal: function(n: number) { return n.toString(8); },
  toHex: function(n: number) { return n.toString(16).toUpperCase(); },
  fromBinary: function(str: string) { return parseInt(str, 2); },
  fromOctal: function(str: string) { return parseInt(str, 8); },
  fromHex: function(str: string) { return parseInt(str, 16); },
  
  // Complex number operations (already supported by mathjs)
  
  // Matrix operations (already supported by mathjs)
  
  // Vector operations
  dotProduct: function(v1: number[], v2: number[]) {
    if (v1.length !== v2.length) throw new Error('Vectors must be of the same length');
    return v1.reduce((sum, val, i) => sum + val * v2[i], 0);
  },
  crossProduct: function(v1: number[], v2: number[]) {
    if (v1.length !== 3 || v2.length !== 3) throw new Error('Cross product is only defined for 3D vectors');
    return [
      v1[1] * v2[2] - v1[2] * v2[1],
      v1[2] * v2[0] - v1[0] * v2[2],
      v1[0] * v2[1] - v1[1] * v2[0]
    ];
  },
  
  // Integration (already supported by mathjs, but enhancing)
  numericalIntegration: function(f: (x: number) => number, a: number, b: number, n = 1000) {
    const h = (b - a) / n;
    let sum = 0.5 * (f(a) + f(b));
    for (let i = 1; i < n; i++) {
      sum += f(a + i * h);
    }
    return sum * h;
  },
  
  // Differential calculation
  numericalDerivative: function(f: (x: number) => number, x: number, h = 0.0001) {
    return (f(x + h) - f(x - h)) / (2 * h);
  }
}, { override: true });

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
    // Check for multi-statement calculations (CALC Function)
    if (expression.includes(':')) {
      const statements = expression.split(':');
      let result;
      
      // Execute each statement in sequence
      for (const statement of statements) {
        if (statement.trim() !== '') {
          result = evaluateSingleExpression(statement);
        }
      }
      
      return result || 'Error';
    }
    
    return evaluateSingleExpression(expression);
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return 'Error';
  }
};

/**
 * Evaluates a single mathematical expression
 */
const evaluateSingleExpression = (expression: string): string => {
  try {
    // Replace display characters with mathjs operators
    let processedExpression = expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/\^/g, '**')
      .replace(/π/g, 'pi')
      .replace(/∫/g, 'integrate');
      
    // Handle special functions and angle measurements
    processedExpression = processedExpression
      // Trigonometric functions with degree arguments
      .replace(/sin\(([^)]+)°\)/g, 'sin($1*pi/180)')
      .replace(/cos\(([^)]+)°\)/g, 'cos($1*pi/180)')
      .replace(/tan\(([^)]+)°\)/g, 'tan($1*pi/180)')
      
      // Hyperbolic functions
      .replace(/sinh\(/g, 'sinh(')
      .replace(/cosh\(/g, 'cosh(')
      .replace(/tanh\(/g, 'tanh(')
      
      // Inverse hyperbolic functions
      .replace(/asinh\(/g, 'asinh(')
      .replace(/acosh\(/g, 'acosh(')
      .replace(/atanh\(/g, 'atanh(')
      
      // Handle factorial notation
      .replace(/(\d+)!/g, 'factorial($1)')
      
      // Handle percentage calculations
      .replace(/(\d+(\.\d+)?)%/g, '($1/100)')
      
      // Handle e notation (scientific)
      .replace(/(\d+(\.\d+)?)e\+?(\d+)/gi, '$1*10^$3')
      .replace(/(\d+(\.\d+)?)e-(\d+)/gi, '$1*10^(-$3)')
      
      // Base-n calculations identifiers
      .replace(/0b([01]+)/g, 'fromBinary("$1")')
      .replace(/0o([0-7]+)/g, 'fromOctal("$1")')
      .replace(/0x([0-9a-fA-F]+)/g, 'fromHex("$1")');
    
    // Special processing for fractions
    if (processedExpression.includes('/') && !processedExpression.includes('/(')) {
      const parts = processedExpression.split('/');
      if (parts.length === 2 && !isNaN(Number(parts[0])) && !isNaN(Number(parts[1]))) {
        return math.fraction(processedExpression).toString();
      }
    }
    
    // Special processing for complex numbers
    if (processedExpression.includes('i')) {
      // Make sure 'i' is treated as the imaginary unit
      processedExpression = processedExpression.replace(/([0-9])i/g, '$1*i');
    }

    // Evaluate the expression
    const result = math.evaluate(processedExpression);
    
    // Format the result based on type
    if (typeof result === 'number') {
      // If it's a whole number, don't show decimal places
      if (Math.floor(result) === result) {
        return result.toString();
      }
      // Otherwise show up to 10 decimal places and trim trailing zeros
      const fixedResult = parseFloat(result.toFixed(10)).toString();
      return fixedResult;
    } 
    
    // Handle complex results
    if (result && typeof result === 'object' && 're' in result && 'im' in result) {
      // Format complex number
      const re = result.re;
      const im = result.im;
      
      if (im === 0) return re.toString();
      if (re === 0) return (im === 1) ? 'i' : (im === -1) ? '-i' : `${im}i`;
      
      const imSign = im < 0 ? '-' : '+';
      const imValue = Math.abs(im) === 1 ? 'i' : `${Math.abs(im)}i`;
      
      return `${re}${imSign}${imValue}`;
    }
    
    // Arrays, matrices, vectors
    if (Array.isArray(result)) {
      return JSON.stringify(result);
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
    .replace(/pi/g, 'π')
    .replace(/e/g, 'e');
  
  // Handle special functions for natural display exactly like the calculator
  displayInput = displayInput
    // Square root and cube root
    .replace(/sqrt\(([^)]+)\)/g, '√($1)')
    .replace(/cbrt\(([^)]+)\)/g, '∛($1)')
    
    // Powers
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\^4/g, '⁴')
    .replace(/\^5/g, '⁵')
    .replace(/\^6/g, '⁶')
    .replace(/\^7/g, '⁷')
    .replace(/\^8/g, '⁸')
    .replace(/\^9/g, '⁹')
    
    // Fractions: 1/2 -> ½
    .replace(/(\d+)\/(\d+)/g, function(match, num, den) {
      return `${num}⁄${den}`; // Unicode fraction slash for natural display
    })
    
    // Integrals and derivatives
    .replace(/integrate\(([^,]+),([^,]+),([^,]+),([^)]+)\)/g, '∫₍$2₎^$3 $1 d$4')
    .replace(/derivative\(([^,]+),([^)]+)\)/g, 'd/d$2($1)')
    
    // Logarithms and exponentials
    .replace(/log10\(([^)]+)\)/g, 'log($1)')
    .replace(/log\(([^)]+)\)/g, 'ln($1)')
    .replace(/exp\(([^)]+)\)/g, 'e^($1)')
    
    // Inverse trig functions
    .replace(/asin\(([^)]+)\)/g, 'sin⁻¹($1)')
    .replace(/acos\(([^)]+)\)/g, 'cos⁻¹($1)')
    .replace(/atan\(([^)]+)\)/g, 'tan⁻¹($1)')
    
    // Hyperbolic functions
    .replace(/sinh\(([^)]+)\)/g, 'sinh($1)')
    .replace(/cosh\(([^)]+)\)/g, 'cosh($1)')
    .replace(/tanh\(([^)]+)\)/g, 'tanh($1)')
    
    // Inverse hyperbolic
    .replace(/asinh\(([^)]+)\)/g, 'sinh⁻¹($1)')
    .replace(/acosh\(([^)]+)\)/g, 'cosh⁻¹($1)')
    .replace(/atanh\(([^)]+)\)/g, 'tanh⁻¹($1)')
    
    // Factorial
    .replace(/factorial\(([^)]+)\)/g, '$1!')
    
    // Degrees, minutes, seconds
    .replace(/toDMS\(([^)]+)\)/g, 'DMS($1)')
    
    // Complex numbers
    .replace(/([+-]?\d+(?:\.\d+)?)\*i/g, '$1i');
  
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
      
    // Advanced Functions  
    case 'sqrt':
      if (shiftActive) {
        // Cube root
        return {
          ...calculator,
          input: input + 'cbrt(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'sqrt(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'square':
      return {
        ...calculator,
        input: input + '^2',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'pow':
      return {
        ...calculator,
        input: input + '^',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'log':
      if (shiftActive) {
        // 10^x
        return {
          ...calculator,
          input: input + '10^(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'log10(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'ln':
      if (shiftActive) {
        // e^x
        return {
          ...calculator,
          input: input + 'exp(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'log(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'sin':
      if (shiftActive) {
        // inverse sine
        return {
          ...calculator,
          input: input + 'asin(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'sin(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'cos':
      if (shiftActive) {
        // inverse cosine
        return {
          ...calculator,
          input: input + 'acos(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'cos(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'tan':
      if (shiftActive) {
        // inverse tangent
        return {
          ...calculator,
          input: input + 'atan(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'tan(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'hyp':
      if (shiftActive) {
        // Inverse hyperbolic
        return {
          ...calculator,
          input: input + 'a',
          shiftActive: false,
          alphaActive: true // Set alpha active to signal inverse hyperbolic
        };
      }
      return {
        ...calculator,
        input: input,
        shiftActive: false,
        alphaActive: true // Set alpha active to signal hyperbolic
      };
      
    case 'integrate':
      return {
        ...calculator,
        input: input + 'integrate(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'solve':
      if (shiftActive) {
        // Derivative
        return {
          ...calculator,
          input: input + 'derivative(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return {
        ...calculator,
        input: input + 'solve(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'negate':
      return {
        ...calculator,
        input: input + '(-',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'degrees':
      // Degrees, minutes, seconds
      return {
        ...calculator,
        input: input + 'toDMS(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'leftParen':
      return {
        ...calculator,
        input: input + '(',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'rightParen':
      return {
        ...calculator,
        input: input + ')',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'calc':
      // Multi-statement Command
      return {
        ...calculator,
        input: input + ':',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'exp':
      // Scientific notation
      return {
        ...calculator,
        input: input + 'e',
        shiftActive: false,
        alphaActive: false
      };
      
    case 'sd':
      // Switch between Standard form and Decimal
      try {
        // If input has a fraction, convert it to decimal or vice versa
        const currentExpression = input;
        const lastResult = result !== '0' ? result : '';
        
        if (lastResult.includes('/')) {
          // Convert fraction to decimal
          const decimalResult = math.evaluate(lastResult);
          return {
            ...calculator,
            result: decimalResult.toString(),
            shiftActive: false,
            alphaActive: false
          };
        } else if (lastResult !== '' && !isNaN(Number(lastResult))) {
          // Convert decimal to fraction if possible
          try {
            const fractionResult = math.fraction(Number(lastResult));
            return {
              ...calculator,
              result: `${fractionResult.n}/${fractionResult.d}`,
              shiftActive: false,
              alphaActive: false
            };
          } catch (e) {
            // If can't convert to fraction, keep as is
            return calculator;
          }
        }
      } catch (error) {
        console.error("Error in S⇔D conversion:", error);
      }
      return calculator;
    
    // Base-n Calculations (toggle in BASE mode)
    case 'base':
      if (mode === 'BASE') {
        // Cycle through bases: DEC -> HEX -> BIN -> OCT -> DEC
        // This would need mode state for the current base
        try {
          const value = Number(result);
          if (!isNaN(value)) {
            let newResult;
            switch (label) {
              case 'HEX':
                newResult = (math as any).toHex(value);
                break;
              case 'BIN':
                newResult = (math as any).toBinary(value);
                break;
              case 'OCT':
                newResult = (math as any).toOctal(value);
                break;
              default: // DEC
                newResult = value.toString();
            }
            return {
              ...calculator,
              result: newResult,
              shiftActive: false,
              alphaActive: false
            };
          }
        } catch (error) {
          console.error("Error in base conversion:", error);
        }
      }
      return calculator;
    
    // Matrix Operations (in MATRIX mode)
    case 'matrix':
      if (mode === 'MATRIX') {
        // Placeholder for matrix operations
        // Would need more state to track matrices
        return {
          ...calculator,
          input: input + 'matrix(',
          shiftActive: false,
          alphaActive: false
        };
      }
      return calculator;
    
    // Complex Number Operations (in CMPLX mode)
    case 'complex':
      if (mode === 'CMPLX') {
        // For complex numbers, we use 'i' as the imaginary unit
        return {
          ...calculator,
          input: input + 'i',
          shiftActive: false,
          alphaActive: false
        };
      }
      return calculator;
    
    // Vector Operations (in VECTOR mode)
    case 'vector':
      if (mode === 'VECTOR') {
        // Placeholder for vector operations
        return {
          ...calculator,
          input: input + 'vector(',
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
      
      // Default handling for other buttons
      return {
        ...calculator,
        input: input + label,
        shiftActive: false,
        alphaActive: false
      };
  }
};
