import React from 'react';

const Header = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Mehmet <span className="text-primary">KOÇ</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
                className={`text-lg ${activeSection === 'home' ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}>Ana Sayfa</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                className={`text-lg ${activeSection === 'about' ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}>Hakkımda</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
                className={`text-lg ${activeSection === 'skills' ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}>Neler Yapabilirim?</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} 
                className={`text-lg ${activeSection === 'portfolio' ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}>Portfolyo</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                className={`text-lg ${activeSection === 'contact' ? 'text-primary' : 'text-white hover:text-primary'} transition-colors`}>İletişim</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </nav>
        
        {/* Mobile Menu - Açılır kapanır menü */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark/90 backdrop-blur-md border-t border-gray-800 py-2">
            <div className="container mx-auto px-4">
              <ul className="flex flex-col space-y-2">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
                    className={`block py-2 px-3 rounded ${activeSection === 'home' ? 'bg-primary/10 text-primary' : 'hover:bg-dark-darker'}`}>Ana Sayfa</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                    className={`block py-2 px-3 rounded ${activeSection === 'about' ? 'bg-primary/10 text-primary' : 'hover:bg-dark-darker'}`}>Hakkımda</a></li>
                <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
                    className={`block py-2 px-3 rounded ${activeSection === 'skills' ? 'bg-primary/10 text-primary' : 'hover:bg-dark-darker'}`}>Neler Yapabilirim?</a></li>
                <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} 
                    className={`block py-2 px-3 rounded ${activeSection === 'portfolio' ? 'bg-primary/10 text-primary' : 'hover:bg-dark-darker'}`}>Portfolyo</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                    className={`block py-2 px-3 rounded ${activeSection === 'contact' ? 'bg-primary/10 text-primary' : 'hover:bg-dark-darker'}`}>İletişim</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
