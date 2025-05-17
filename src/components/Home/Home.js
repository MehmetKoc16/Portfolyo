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
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-envelope mr-2"></i>
              İletişime Geç
            </span>
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-project-diagram mr-2"></i>
              Projelerimi Gör
            </span>
          </button>
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Mehmet_KOC_CV.pdf';
              link.download = 'Mehmet_KOC_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-download mr-2"></i>
              CV İndir
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;