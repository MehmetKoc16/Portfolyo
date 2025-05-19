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

  // Mobil cihaz kontrolü
  const isMobile = window.innerWidth < 768;

  // Masaüstü için scrollToSection
  const scrollToSectionDesktop = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Navbar yüksekliğini hesapla
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Sayfayı kaydır
      window.scrollTo({
        top: element.offsetTop - navbarHeight - 20, // Ekstra 20px boşluk
        behavior: 'smooth'
      });
      
      // Mobil menüyü kapat
      setMobileMenuOpen(false);
    }
  };

  // Mobil için scrollToSection
  const scrollToSectionMobile = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Navbar yüksekliğini hesapla
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Sayfayı kaydır - mobil için başlığı daha yukarıda göster
      window.scrollTo({
        top: element.offsetTop - navbarHeight + 330, // Mobil için daha az boşluk
        behavior: 'smooth'
      });
      
      // Mobil menüyü kapat
      setMobileMenuOpen(false);
    }
  };

  // Cihaz tipine göre doğru fonksiyonu seç
  const scrollToSection = (sectionId) => {
    if (isMobile) {
      scrollToSectionMobile(sectionId);
    } else {
      scrollToSectionDesktop(sectionId);
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


