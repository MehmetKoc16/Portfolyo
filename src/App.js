import React, { useState, useEffect } from 'react';
import StarryBackground from './components/StarryBackground/StarryBackground';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// TypeWriter bileşeni kullanılmadığı için import kaldırıldı

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll olayını dinle ve aktif bölümü belirle
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Navbar yüksekliğini hesapla
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Sayfayı kaydır - Hakkımda bölümü için özel ayarlama
      if (sectionId === 'about') {
        const windowHeight = window.innerHeight;
        const elementHeight = element.offsetHeight;
        // Eğer bölüm yüksekliği pencere yüksekliğinden küçükse ortala
        if (elementHeight < windowHeight) {
          window.scrollTo({
            top: element.offsetTop - ((windowHeight - elementHeight) / 2),
            behavior: 'smooth'
          });
        } else {
          // Normal kaydırma
          window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth'
          });
        }
      } else {
        // Diğer bölümler için normal kaydırma
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: 'smooth'
        });
      }
      
      // Mobil menüyü kapat
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-darker text-light">
      <StarryBackground />
      
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="pt-16">
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;




