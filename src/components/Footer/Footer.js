
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://x.com/MehmetK26695521" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://github.com/MehmetKoc16" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mehmet-ko%C3%A7-3479a5340" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mehmet Koç | Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;
