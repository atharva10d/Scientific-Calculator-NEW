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
          
          {activeTopic === "statistics" && (
            <>
              <h3>Statistical Calculations</h3>
              <p>The Casio FX-991ES Plus 2nd Edition provides powerful statistical analysis tools. This tutorial covers how to perform various statistical calculations including mean, standard deviation, regression analysis, and more.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Features</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Single-variable and paired-variable statistics</li>
                  <li>Statistical regression analysis (linear, quadratic, logarithmic, etc.)</li>
                  <li>Sample and population standard deviation</li>
                  <li>Data input with STAT editor</li>
                  <li>Calculating mean, median, mode, min, max, and quartiles</li>
                </ul>
              </div>
              
              <h4>Using the STAT Mode</h4>
              <p>To enter the statistical calculation mode:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter STAT mode</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>MODE</strong> and then <strong>2</strong> (STAT)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Select the type of statistical calculation</div>
                  <div className="text-gray-600 dark:text-gray-400">1: 1-Variable 2: 2-Variable</div>
                </div>
              </div>
              
              <h4>Example: Calculating Mean and Standard Deviation</h4>
              <p>Let's calculate the mean and standard deviation of the data set: 10, 15, 13, 22, 8</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter STAT mode</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>MODE</strong> and then <strong>2</strong> (STAT)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Select 1-Variable statistics</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>1</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Input data values</div>
                  <div className="text-gray-600 dark:text-gray-400">Enter each value followed by <strong>ENTER</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 4: View statistical values</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>1</strong> (STAT) to access statistical variables</div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Statistical Variables</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>x̄:</strong> Mean of the data<br />
                  <strong>σx:</strong> Population standard deviation<br />
                  <strong>sx:</strong> Sample standard deviation<br />
                  <strong>n:</strong> Number of data items<br />
                  <strong>Σx:</strong> Sum of all data<br />
                  <strong>Σx²:</strong> Sum of squares of all data
                </p>
              </div>
            </>
          )}
          
          {activeTopic === "matrices" && (
            <>
              <h3>Matrix Calculations</h3>
              <p>The FX-991ES Plus 2nd Edition allows you to perform matrix operations including addition, multiplication, determinants, and finding inverses.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Matrix Features</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Matrix dimensions: up to 3×3</li>
                  <li>Matrix addition and subtraction</li>
                  <li>Matrix multiplication</li>
                  <li>Determinant calculation</li>
                  <li>Finding the inverse of a matrix</li>
                  <li>Transposing a matrix</li>
                </ul>
              </div>
              
              <h4>Entering the Matrix Mode</h4>
              <p>To use the matrix functions:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter Matrix mode</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>MODE</strong> and then <strong>4</strong> (MATRIX)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Define matrix dimensions</div>
                  <div className="text-gray-600 dark:text-gray-400">Input the number of rows and columns</div>
                </div>
              </div>
              
              <h4>Example: Finding the Determinant of a 2×2 Matrix</h4>
              <p>Let's calculate the determinant of the matrix: [[4, 2], [1, 3]]</p>
              
              <div className="grid grid-cols-1 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter Matrix mode</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>MODE</strong> then <strong>4</strong> (MATRIX)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Select matrix entry</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>1</strong> (MatA)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Define dimensions</div>
                  <div className="text-gray-600 dark:text-gray-400">Enter <strong>2</strong> for rows, <strong>2</strong> for columns</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 4: Enter matrix values</div>
                  <div className="text-gray-600 dark:text-gray-400">Enter each value followed by <strong>EXE</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 5: Calculate determinant</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>4</strong> (MATRIX), select <strong>Det</strong>, then <strong>MatA</strong></div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Result</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The determinant should be: 4 × 3 - 2 × 1 = 12 - 2 = 10
                </p>
              </div>
            </>
          )}
          
          {activeTopic === "integration" && (
            <>
              <h3>Integration Calculations</h3>
              <p>The FX-991ES Plus 2nd Edition can perform numerical integration, allowing you to solve definite integrals of various functions.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Integration Features</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Definite integral calculation using numerical methods</li>
                  <li>Support for complex functions with variables</li>
                  <li>Adjustable accuracy settings</li>
                  <li>Integration with respect to x</li>
                </ul>
              </div>
              
              <h4>Example: Calculating ∫₁²x² dx</h4>
              <p>Let's calculate the definite integral of x² from 1 to 2:</p>
              
              <div className="grid grid-cols-1 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Start the integration calculation</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>8</strong> (∫dx)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Enter the function</div>
                  <div className="text-gray-600 dark:text-gray-400">Input <strong>X,θ,T</strong> <strong>x²</strong> (by pressing X,θ,T then x²)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Set the lower limit</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>,</strong> then <strong>1</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 4: Set the upper limit</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>,</strong> then <strong>2</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 5: Calculate the result</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>=</strong></div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Result</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The calculator should display: ∫₁²x² dx = 7/3 = 2.333...<br />
                  This is because ∫x² dx = x³/3, so [2³/3 - 1³/3] = [8/3 - 1/3] = 7/3
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md my-4 border-l-4 border-yellow-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Important Note</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The calculator uses numerical integration methods, so results may have small approximation errors for complex functions. The integration range must be finite.
                </p>
              </div>
            </>
          )}
          
          {activeTopic === "complex" && (
            <>
              <h3>Complex Number Calculations</h3>
              <p>The FX-991ES Plus 2nd Edition provides comprehensive support for complex number operations in both rectangular (a+bi) and polar (r∠θ) formats.</p>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md my-4">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Complex Number Features</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                  <li>Addition, subtraction, multiplication, and division of complex numbers</li>
                  <li>Conversion between rectangular and polar forms</li>
                  <li>Complex number powers and roots</li>
                  <li>Conjugate calculation</li>
                  <li>Absolute value (modulus) calculation</li>
                  <li>Argument calculation</li>
                </ul>
              </div>
              
              <h4>Setting Complex Number Mode</h4>
              <p>To work with complex numbers:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter the setup menu</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>MODE</strong> (SETUP)</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Access complex number settings</div>
                  <div className="text-gray-600 dark:text-gray-400">Navigate using arrow keys to "Complex Mode"</div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Set number format</div>
                  <div className="text-gray-600 dark:text-gray-400">Select a+bi (rectangular) or r∠θ (polar)</div>
                </div>
              </div>
              
              <h4>Example: Adding Complex Numbers</h4>
              <p>Let's calculate (3+2i) + (4-5i):</p>
              
              <div className="grid grid-cols-1 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 1: Enter the first complex number</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>3</strong> <strong>+</strong> <strong>2</strong> <strong>SHIFT</strong> then <strong>i</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 2: Add the second complex number</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>+</strong> <strong>(</strong> <strong>4</strong> <strong>-</strong> <strong>5</strong> <strong>SHIFT</strong> then <strong>i</strong> <strong>)</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Step 3: Calculate the result</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>=</strong></div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-4 border-l-4 border-blue-500">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Result</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The calculator will display: 7-3i<br />
                  This is because (3+2i) + (4-5i) = (3+4) + (2-5)i = 7-3i
                </p>
              </div>
              
              <h4>Converting Between Forms</h4>
              <p>To convert between rectangular and polar forms:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Rectangular to Polar</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>MENU</strong>, select <strong>COMPLEX</strong>, then <strong>Rec to Pol</strong></div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                  <div className="font-medium text-gray-800 dark:text-white mb-1">Polar to Rectangular</div>
                  <div className="text-gray-600 dark:text-gray-400">Press <strong>SHIFT</strong> then <strong>MENU</strong>, select <strong>COMPLEX</strong>, then <strong>Pol to Rec</strong></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
