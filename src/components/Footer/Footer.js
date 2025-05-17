import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-colors">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Portfolyo | Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;