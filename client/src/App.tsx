import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Calculator from "@/pages/Calculator";
import View3D from "@/pages/View3D";
import Learn from "@/pages/Learn";
import Challenge from "@/pages/Challenge";
import ProductDetails from "@/pages/ProductDetails";
import { ThemeProvider } from "@/context/ThemeContext";
import { CalculatorProvider } from "@/context/CalculatorContext";
import { useTheme } from "@/context/ThemeContext";

// Custom cursor removed as requested

function Router() {
  return (
    <Switch>
      <Route path="/" component={Calculator} />
      <Route path="/3d-view" component={View3D} />
      <Route path="/learn" component={Learn} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/product-details" component={ProductDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Page transition wrapper
function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="w-full"
      style={{ 
        animation: "fadeIn 0.5s ease-in-out" 
      }}
    >
      {children}
    </div>
  );
}

// Main app component with theme
function AppContent() {
  const { theme } = useTheme();
  
  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${theme}`}>
        <Navigation />
        <main className="flex-grow container mx-auto p-4 md:p-6 flex">
          <PageTransitionWrapper>
            <Router />
          </PageTransitionWrapper>
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </CalculatorProvider>
    </ThemeProvider>
  );
}

export default App;
