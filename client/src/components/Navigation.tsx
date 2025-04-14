import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/ThemeContext";

const Navigation = () => {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location === path;

  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Casio FX-991ES Plus</h1>
            <span className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300">2nd Edition</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
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

      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link href="/">
              <a className={`py-4 px-1 border-b-2 ${isActive("/") ? "border-blue-500 text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"} font-medium text-sm transition-colors`}>
                Calculator
              </a>
            </Link>
            <Link href="/3d-view">
              <a className={`py-4 px-1 border-b-2 ${isActive("/3d-view") ? "border-blue-500 text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"} font-medium text-sm transition-colors`}>
                3D View
              </a>
            </Link>
            <Link href="/learn">
              <a className={`py-4 px-1 border-b-2 ${isActive("/learn") ? "border-blue-500 text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"} font-medium text-sm transition-colors`}>
                Learn
              </a>
            </Link>
            <Link href="/challenge">
              <a className={`py-4 px-1 border-b-2 ${isActive("/challenge") ? "border-blue-500 text-gray-900 dark:text-white" : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"} font-medium text-sm transition-colors`}>
                Challenge
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
