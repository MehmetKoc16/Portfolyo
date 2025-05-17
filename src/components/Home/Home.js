import React from 'react';
import TypeWriter from '../TypeWriter/TypeWriter';

const Home = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Merhaba, Ben <span className="text-primary">Mehmet KOÇ</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          <TypeWriter />
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            İletişime Geç
          </button>
          <a 
            href="/Mehmet_KOÇ_CV.pdf" 
            download 
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-download mr-2"></i>
              CV İndir
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('about')} className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Home;
