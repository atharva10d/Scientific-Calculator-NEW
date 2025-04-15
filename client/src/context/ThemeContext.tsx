import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isTransitioning: boolean;
}

// Create context with a default value to avoid undefined checks
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {}, // Empty function as placeholder
  isTransitioning: false
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check for system preference or saved preference
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === 'undefined') return "light"; // SSR fallback
    
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    return "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Add transitions
  useEffect(() => {
    const setupTransitions = () => {
      // Add transition class to body
      document.body.classList.add('transition-colors', 'duration-500');
      
      // Add transition to all elements that might change with theme
      const style = document.createElement('style');
      style.innerHTML = `
        * {
          transition: background-color 0.5s ease, border-color 0.5s ease, color 0.5s ease, fill 0.5s ease, stroke 0.5s ease, opacity 0.5s ease;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    };
    
    return setupTransitions();
  }, []);

  useEffect(() => {
    // Update HTML class for dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      // Only update if the user hasn't explicitly set a preference
      if (!localStorage.getItem("theme")) {
        setTheme(newTheme);
      }
    };
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add a transition overlay effect
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.pointerEvents = 'none';
    
    document.body.appendChild(overlay);
    
    // Animate the overlay
    setTimeout(() => { overlay.style.opacity = '1'; }, 10);
    
    // Change theme after a slight delay for smoother transition
    setTimeout(() => {
      setTheme(prev => (prev === "light" ? "dark" : "light"));
      
      // Fade out overlay
      overlay.style.opacity = '0';
      
      // Remove overlay after transition
      setTimeout(() => {
        document.body.removeChild(overlay);
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
