import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/ThemeContext";

const Navigation = () => {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <>
      <header className={`premium-navbar sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              <span className="text-gradient">Casio</span> FX-991ES Plus
            </h1>
            <span className="premium-badge text-xs">2nd Edition</span>
            <div className="h-10 w-0 group-hover:w-10 overflow-hidden transition-all duration-500">
              <div className="shiny w-10 h-10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="btn p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 md:space-x-8 overflow-x-auto no-scrollbar py-1">
            <Link 
              href="/"
              className={`hover-link py-3 px-3 md:px-1 ${isActive("/") ? "text-gradient font-semibold" : "text-gray-700 dark:text-gray-300"} font-medium text-sm md:text-base transition-all whitespace-nowrap`}
            >
              Calculator
            </Link>
            <Link 
              href="/3d-view"
              className={`hover-link py-3 px-3 md:px-1 ${isActive("/3d-view") ? "text-gradient font-semibold" : "text-gray-700 dark:text-gray-300"} font-medium text-sm md:text-base transition-all whitespace-nowrap`}
            >
              3D View
            </Link>
            <Link 
              href="/product-details"
              className={`hover-link py-3 px-3 md:px-1 ${isActive("/product-details") ? "text-gradient font-semibold" : "text-gray-700 dark:text-gray-300"} font-medium text-sm md:text-base transition-all whitespace-nowrap`}
            >
              Product Details
            </Link>
            <Link 
              href="/learn"
              className={`hover-link py-3 px-3 md:px-1 ${isActive("/learn") ? "text-gradient font-semibold" : "text-gray-700 dark:text-gray-300"} font-medium text-sm md:text-base transition-all whitespace-nowrap`}
            >
              Learn
            </Link>
            <Link 
              href="/challenge"
              className={`hover-link py-3 px-3 md:px-1 ${isActive("/challenge") ? "text-gradient font-semibold" : "text-gray-700 dark:text-gray-300"} font-medium text-sm md:text-base transition-all whitespace-nowrap`}
            >
              Challenge
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
