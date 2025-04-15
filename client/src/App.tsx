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

function App() {
  return (
    <ThemeProvider>
      <CalculatorProvider>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main className="flex-grow container mx-auto p-4 md:p-6 flex">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </QueryClientProvider>
      </CalculatorProvider>
    </ThemeProvider>
  );
}

export default App;
