import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8 relative z-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-400">
        <p>&copy; 2025 Clariant Benedictus Tan</p>
        <div className="flex gap-4">
          <a href="https://github.com/clariantb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/clariant-tan-125603298/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;