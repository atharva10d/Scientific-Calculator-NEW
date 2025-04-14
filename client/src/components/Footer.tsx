const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 mt-6 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            <p>Calculator inspiration based on Casio FX-991ES Plus 2nd Edition.</p>
            <p>For educational and demonstrational use only.</p>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            <p>Designed and developed by Atharva Zope</p>
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
