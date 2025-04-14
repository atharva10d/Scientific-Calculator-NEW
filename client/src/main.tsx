import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { CalculatorProvider } from "./context/CalculatorContext";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CalculatorProvider>
        <App />
      </CalculatorProvider>
    </ThemeProvider>
  </StrictMode>
);
