import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative mt-16 overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-navy opacity-30 z-0"></div>
      
      {/* Top Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-8 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white dark:fill-gray-800 opacity-30"></path>
        </svg>
      </div>
      
      <div className="relative pt-12 pb-6 px-4 z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 relative">
                <span className="text-gradient">Casio</span> FX-991ES Plus
                <span className="absolute -top-1 -right-8 premium-badge text-xs">2nd</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                The perfect scientific calculator for educational and professional use. 
                With 417 functions and natural textbook display, it's an essential tool for students and professionals.
              </p>
              <div className="pt-4 flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="subtitle text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="hover-link text-gray-600 dark:text-gray-400 text-sm">Calculator</a>
                  </Link>
                </li>
                <li>
                  <Link href="/3d-view">
                    <a className="hover-link text-gray-600 dark:text-gray-400 text-sm">3D View</a>
                  </Link>
                </li>
                <li>
                  <Link href="/product-details">
                    <a className="hover-link text-gray-600 dark:text-gray-400 text-sm">Product Details</a>
                  </Link>
                </li>
                <li>
                  <Link href="/learn">
                    <a className="hover-link text-gray-600 dark:text-gray-400 text-sm">Learn Functions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/challenge">
                    <a className="hover-link text-gray-600 dark:text-gray-400 text-sm">Take Challenge</a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="subtitle text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Subscribe</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Stay updated with the latest calculator features and learning resources.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="premium-input px-4 py-2 flex-grow text-sm focus:outline-none" 
                />
                <button className="btn-primary px-4 py-2 rounded-r-md text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Calculator inspiration based on Casio FX-991ES Plus. For educational purposes only.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 md:mt-0">
                © {currentYear} Designed with ❤️ by Atharva Zope. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
