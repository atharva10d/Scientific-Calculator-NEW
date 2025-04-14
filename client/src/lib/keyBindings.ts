import { useCalculator } from "@/hooks/useCalculator";

/**
 * Sets up keyboard event listeners for the calculator
 * @returns Cleanup function to remove event listeners
 */
export const setupKeyboardEvents = (): (() => void) => {
  // Get the calculator context and functions
  const calculatorContext = document.getElementById('root') as HTMLElement;
  
  // Map keyboard keys to calculator actions
  const keyMap: Record<string, { action: string; label: string }> = {
    '0': { action: '0', label: '0' },
    '1': { action: '1', label: '1' },
    '2': { action: '2', label: '2' },
    '3': { action: '3', label: '3' },
    '4': { action: '4', label: '4' },
    '5': { action: '5', label: '5' },
    '6': { action: '6', label: '6' },
    '7': { action: '7', label: '7' },
    '8': { action: '8', label: '8' },
    '9': { action: '9', label: '9' },
    '.': { action: '.', label: '.' },
    '+': { action: '+', label: '+' },
    '-': { action: '-', label: '−' },
    '*': { action: '*', label: '×' },
    '/': { action: '/', label: '÷' },
    '^': { action: 'pow', label: '^' },
    '(': { action: 'leftParen', label: '(' },
    ')': { action: 'rightParen', label: ')' },
    'Enter': { action: 'equals', label: '=' },
    '=': { action: 'equals', label: '=' },
    'Backspace': { action: 'delete', label: 'DEL' },
    'Delete': { action: 'delete', label: 'DEL' },
    'Escape': { action: 'allClear', label: 'AC' },
    's': { action: 'sin', label: 'sin(' },
    'c': { action: 'cos', label: 'cos(' },
    't': { action: 'tan', label: 'tan(' },
    'l': { action: 'log', label: 'log(' },
    'n': { action: 'ln', label: 'ln(' },
    'r': { action: 'sqrt', label: '√(' },
    'Shift': { action: 'shift', label: 'SHIFT' },
    'Alt': { action: 'alpha', label: 'ALPHA' },
  };

  const keydownHandler = (event: KeyboardEvent) => {
    // Simulate button press on keydown
    const key = event.key;
    
    if (keyMap[key]) {
      // Prevent default behavior for calculator keys
      event.preventDefault();
      
      // Find the button element
      const buttonAction = keyMap[key].action;
      const buttons = document.querySelectorAll('.calc-button');
      
      // Find the button with matching action and simulate a click
      buttons.forEach((button) => {
        const buttonElement = button as HTMLElement;
        if (buttonElement.textContent?.includes(keyMap[key].label)) {
          // Visual feedback - add active class
          buttonElement.classList.add('scale-95', 'brightness-90');
          
          // Get the calculator instance using the root element's data attribute
          const calculatorElement = document.querySelector('[data-calculator]');
          if (calculatorElement) {
            const handleButtonPress = (calculatorElement as any).handleButtonPress;
            if (typeof handleButtonPress === 'function') {
              handleButtonPress(buttonAction, keyMap[key].label);
            }
          }
          
          // Also try to directly click the button to ensure event handlers are triggered
          buttonElement.click();
          
          // Remove active class after a short delay
          setTimeout(() => {
            buttonElement.classList.remove('scale-95', 'brightness-90');
          }, 100);
        }
      });
    }
  };

  const keyupHandler = (event: KeyboardEvent) => {
    // Remove active class when key is released
    const key = event.key;
    
    if (keyMap[key]) {
      const buttons = document.querySelectorAll('.calc-button');
      
      buttons.forEach((button) => {
        const buttonElement = button as HTMLElement;
        if (buttonElement.textContent?.includes(keyMap[key].label)) {
          buttonElement.classList.remove('scale-95', 'brightness-90');
        }
      });
    }
  };

  // Add event listeners
  window.addEventListener('keydown', keydownHandler);
  window.addEventListener('keyup', keyupHandler);

  // Return cleanup function
  return () => {
    window.removeEventListener('keydown', keydownHandler);
    window.removeEventListener('keyup', keyupHandler);
  };
};
