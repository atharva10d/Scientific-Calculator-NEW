import { Link } from "wouter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Casio FX-991ES Plus 2nd Edition Simulator
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A fully-functional web-based replica of the popular scientific calculator with 417 functions, 
            including calculus, statistics, and complex number calculations.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/">
              <a className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-md">
                Use Calculator
              </a>
            </Link>
            <Link href="/3d-view">
              <a className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md">
                View 3D Model
              </a>
            </Link>
            <Link href="/learn">
              <a className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md">
                Learn Functions
              </a>
            </Link>
            <Link href="/challenge">
              <a className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md">
                Take Challenge
              </a>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-full max-w-md relative">
            <div className="calculator-shadow rounded-3xl overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 380 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="380" height="800" rx="24" fill="#333333" />
                <rect x="20" y="30" width="340" height="60" rx="4" fill="#222222" />
                <text x="30" y="50" fill="white" fontSize="18" fontWeight="bold">CASIO</text>
                <text x="30" y="70" fill="#AAAAAA" fontSize="12">fx-991ES PLUS</text>
                <text x="250" y="70" fill="#AAAAAA" fontSize="12" textAnchor="end">2nd edition</text>
                <rect x="260" y="40" width="80" height="20" rx="2" fill="url(#solar-gradient)" />
                
                <rect x="20" y="100" width="340" height="120" rx="4" fill="#E6F4F1" />
                <text x="330" y="190" fill="#000000" fontSize="28" textAnchor="end">0</text>
                
                <defs>
                  <linearGradient id="solar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#444444" />
                    <stop offset="100%" stopColor="#222222" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="absolute bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Scientific Functions</h3>
          <p className="text-gray-700 dark:text-gray-300">417 mathematical functions including integration, differentiation, matrices, and complex numbers.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive 3D Model</h3>
          <p className="text-gray-700 dark:text-gray-300">Explore the calculator with a fully interactive 3D model that allows 360° rotation and zoom.</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-blue-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learning Tutorials</h3>
          <p className="text-gray-700 dark:text-gray-300">Step-by-step guides on using the calculator's features with interactive examples and practice sessions.</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-16 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">Natural textbook display</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">10-digit mantissa + 2-digit exponential display</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">417 functions</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">List-based STAT data editor</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">Table function</div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-gray-700 dark:text-gray-300">Comes with slide-on hard case</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
