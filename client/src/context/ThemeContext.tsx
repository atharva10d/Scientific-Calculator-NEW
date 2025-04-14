import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create context with a default value to avoid undefined checks
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {} // Empty function as placeholder
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

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
