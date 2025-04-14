import { useState } from "react";

type Topic = "basic" | "fractions" | "statistics" | "matrices" | "integration" | "complex";

const Learn = () => {
  const [activeTopic, setActiveTopic] = useState<Topic>("basic");

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Calculator Tutorials</h2>
        
        {/* Topics navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 ${activeTopic === "basic" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("basic")}
          >
            Basic Operations
          </button>
          <button 
            className={`px-4 py-2 ${activeTopic === "fractions" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("fractions")}
          >
            Fractions
          </button>
          <button 
            className={`px-4 py-2 ${activeTopic === "statistics" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("statistics")}
          >
            Statistics
          </button>
          <button 
            className={`px-4 py-2 ${activeTopic === "matrices" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("matrices")}
          >
            Matrices
          </button>
          <button 
            className={`px-4 py-2 ${activeTopic === "integration" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("integration")}
          >
            Integration
          </button>
          <button 
            className={`px-4 py-2 ${activeTopic === "complex" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"} rounded-md transition-colors`}
            onClick={() => setActiveTopic("complex")}
          >
            Complex Numbers
          </button>
        </div>
        
        {/* Tutorial content */}
        <div className="prose prose-blue max-w-none dark:prose-invert">
          {activeTopic === "basic" && (
            <>
              <h3>Basic Calculator Operations</h3>
              <p>Learn the fundamental operations of your Casio FX-991ES Plus calculator. This tutorial covers powering on, basic arithmetic, and using the display effectively.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Concepts</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Using SHIFT (yellow) and ALPHA (red) keys to access secondary functions</li>
                  <li>Understanding the dual-line natural display</li>
                  <li>Order of operations and parentheses</li>
                  <li>Storing and recalling values with memory functions</li>
                </ul>
              </div>
              
              <h4>Example: Calculating Expressions</h4>
              <p>Let's solve a basic arithmetic expression: <code>(5 + 3) × 4 - 7</code></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter the left parenthesis</div>
                  <div className="text-gray-600 dark:text-gray-400">Press the <strong>(</strong> key</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Enter the first number</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>5</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Enter the addition operator</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>+</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 4: Enter the second number</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>3</strong></div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Pro Tip</h4>
                <p className="text-gray-700 dark:text-gray-300">Use the replay function to recall previous calculations. Press the up arrow key to cycle through your calculation history.</p>
              </div>
              
              <div className="flex justify-between mt-6">
                <button className="text-blue-500 hover:underline">Previous: Introduction</button>
                <button className="text-blue-500 hover:underline">Next: Working with Fractions</button>
              </div>
            </>
          )}
          
          {activeTopic === "fractions" && (
            <>
              <h3>Working with Fractions</h3>
              <p>The Casio FX-991ES Plus offers powerful fraction capabilities, allowing you to perform calculations with fractions and mixed numbers easily.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Features</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Entering proper and improper fractions</li>
                  <li>Converting between decimal and fraction formats</li>
                  <li>Performing arithmetic with mixed numbers</li>
                  <li>Simplifying fractions automatically</li>
                </ul>
              </div>
              
              <h4>Example: Adding Fractions</h4>
              <p>Let's calculate <code>2/3 + 1/4</code></p>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Pro Tip</h4>
                <p className="text-gray-700 dark:text-gray-300">Use the S⇔D button to toggle between fraction and decimal display formats.</p>
              </div>
            </>
          )}
          
          {activeTopic !== "basic" && activeTopic !== "fractions" && (
            <div className="text-center py-8">
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">Tutorial Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-400">We're currently working on this tutorial. Please check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
