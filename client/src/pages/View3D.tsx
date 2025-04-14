import { useState } from "react";
import ThreeJSModel from "@/components/ThreeJSModel";

const View3D = () => {
  const [showCase, setShowCase] = useState(true);

  const toggleCase = () => {
    setShowCase(!showCase);
  };

  const resetView = () => {
    // This will be implemented in the ThreeJSModel component
    const viewerElement = document.getElementById("reset-view-trigger");
    if (viewerElement) {
      viewerElement.click();
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Viewer */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col h-[500px] transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">3D Calculator Model</h2>
            <div className="flex space-x-2">
              <button 
                onClick={resetView}
                className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Reset View
              </button>
              <button 
                onClick={toggleCase}
                className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Toggle Case
              </button>
            </div>
          </div>
          
          {/* 3D Viewer component */}
          <div className="flex-grow bg-gray-100 dark:bg-gray-900 rounded-md relative overflow-hidden">
            <ThreeJSModel showCase={showCase} />
          </div>
        </div>
        
        {/* Features panel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-colors duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Features & Hotspots</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium text-gray-800 dark:text-white">Solar Panel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dual-powered calculator with solar capability when light is sufficient.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium text-gray-800 dark:text-white">Natural Textbook Display</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Shows mathematical expressions as they appear in textbooks.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium text-gray-800 dark:text-white">Protective Case</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Slide-on hard case protects the calculator from damage.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium text-gray-800 dark:text-white">Function Keys</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">417 functions including calculus, statistics, and matrices.</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <h3 className="font-medium text-gray-800 dark:text-white">SHIFT & ALPHA Keys</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Access secondary (yellow) and tertiary (red) functions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View3D;
