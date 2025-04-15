import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const ProductDetails = () => {
  const { theme } = useTheme();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
        {/* Hero section */}
        <div className="relative">
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            Special Offer!
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-gray-800 p-8 flex flex-col md:flex-row items-center gap-8 transition-colors duration-300">
            <div className="flex-shrink-0 w-64 h-64 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 flex items-center justify-center transition-colors duration-300">
              <img 
                src="/attached_assets/image_1744686709616.png" 
                alt="Casio FX-991ES Plus 2nd Edition Calculator" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                Casio FX-991ES Plus 2nd Edition
              </h1>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 transition-colors duration-300">
                Advanced Scientific Calculator with Natural Textbook Display
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <span className="font-semibold">417 Functions</span> - All the computational power you'll ever need
                </p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <span className="font-semibold">Natural Textbook Display</span> - See expressions as they appear in textbooks
                </p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <span className="font-semibold">Solar + Battery Powered</span> - Reliable performance in any environment
                </p>
              </div>
              <div className="mt-6 flex items-baseline">
                <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">₹1,229</span>
                <span className="ml-2 text-lg line-through text-gray-500 dark:text-gray-400 transition-colors duration-300">₹1,395</span>
                <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-200 transition-colors duration-300">
                  Save ₹166
                </span>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => toggleSection('specifications')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                expandedSection === 'specifications' 
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
              } transition-colors duration-300`}
            >
              Specifications
            </button>
            <button 
              onClick={() => toggleSection('features')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                expandedSection === 'features' 
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
              } transition-colors duration-300`}
            >
              Features
            </button>
            <button 
              onClick={() => toggleSection('functions')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                expandedSection === 'functions' 
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                  : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
              } transition-colors duration-300`}
            >
              Functions
            </button>
          </div>
        </div>

        {/* Content sections */}
        <div className="p-6">
          {/* Specifications */}
          <div className={`${expandedSection === 'specifications' ? 'block' : 'hidden'}`}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Product Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Product Type</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Non Programmable, Non Graphing</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Number of Functions</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">417</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Number of Digits</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">10 + 2 digits</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Display Type</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Natural Textbook Display, Dot Matrix</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Key Type</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Plastic Keys</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Power Supply</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Solar & Battery</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Battery Life</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">Approximately 3 years</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Size (D × W × H)</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">161.5 × 77 × 11.1 mm</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Weight</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">95 g</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Warranty</span>
                  <span className="text-gray-900 dark:text-white font-medium transition-colors duration-300">3 years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className={`${expandedSection === 'features' ? 'block' : 'hidden'}`}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">Natural Textbook Display</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Displays expressions exactly as they appear in textbooks, making it easier to understand and reduce errors. 
                  Show fractions, powers, roots, and more in their natural format.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">Solar + Battery Powered</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Dual-powered calculator that works efficiently in all lighting conditions. 
                  Solar power extends battery life, making it environmentally friendly and reliable.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">Protective Hard Case</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Includes a slide-on hard case that protects the calculator from damage, scratches, and dust. 
                  Perfect for students carrying it in their backpacks.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                <h3 className="font-medium text-lg text-gray-800 dark:text-white mb-2 transition-colors duration-300">Memory Functions</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Features 9 variables (A-F, X, Y, M), independent memory, and answer memory to save important values for later use.
                  Includes memory protection and reset function.
                </p>
              </div>
            </div>
          </div>

          {/* Functions */}
          <div className={`${expandedSection === 'functions' ? 'block' : 'hidden'}`}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Calculator Functions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-300">
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 transition-colors duration-300">
                  <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">Basic Calculations</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Basic Mathematical Functions</li>
                    <li>Bracket Calculation</li>
                    <li>Fraction Calculation</li>
                    <li>Percent Calculation</li>
                    <li>Reciprocal Calculation</li>
                    <li>Degree, Minute, Second (Sexagesimal) Calculations</li>
                    <li>Factorial Function</li>
                    <li>Pi (π) and Square Root (√) Calculations</li>
                    <li>Rounding Function</li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-300">
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 transition-colors duration-300">
                  <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">Advanced Calculations</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Trigonometric and Inverse Trigonometric Functions</li>
                    <li>Hyperbolic and Inverse Hyperbolic Functions</li>
                    <li>Logarithmic and Exponential Calculations</li>
                    <li>Power Functions (Square, Cube, etc.)</li>
                    <li>Base-n calculations (Binary, Octal, Decimal, Hexadecimal)</li>
                    <li>Complex Number Calculations</li>
                    <li>Matrix and Vector Calculations</li>
                    <li>Differential and Integration Calculations</li>
                    <li>Equation Solving (Quadratic, Cubic, Systems)</li>
                    <li>Statistical Calculations</li>
                  </ul>
                </div>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors duration-300">
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 transition-colors duration-300">
                  <h3 className="font-medium text-gray-800 dark:text-white transition-colors duration-300">Special Functions</h3>
                </div>
                <div className="p-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Random Number and Integer Generation</li>
                    <li>Combination and Permutation</li>
                    <li>Coordinate Conversion</li>
                    <li>Unit Conversion</li>
                    <li>Multi-statement Command</li>
                    <li>Continuous and Replay Functions</li>
                    <li>CALC and SOLVE Functions</li>
                    <li>Table Generation</li>
                    <li>Scientific Constants</li>
                    <li>Physics and Chemistry-related Functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 text-center transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Experience the Power of Professional Calculations</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
              Elevate your academic and professional performance with the ultimate scientific calculator - at an unbeatable price!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <div className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                <span className="line-through text-gray-400 dark:text-gray-500 text-xl mr-2 transition-colors duration-300">₹1,395</span>
                <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">₹1,229</span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1 transition-colors duration-300">incl. of all taxes</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
                Buy Now and Save ₹166!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;