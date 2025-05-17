import React, { useState, useEffect, useMemo } from 'react';

// Yıldızlı arka plan bileşeni
const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const generateStars = () => {
      const starCount = 150; // Yıldız sayısı
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          duration: `${Math.random() * 5 + 3}s`,
          delay: `${Math.random() * 5}s`
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
  }, []);
  
  return (
    <div className="stars">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            '--delay': star.delay
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  // Değiştirilecek metin dizisi
  const textArray = useMemo(() => ["Mobil Yazılım Geliştirici", "Web Geliştirici", "Bilgisayar Mühendisliği Öğrencisi"], []);
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, currentIndex - 1) 
        : fullText.substring(0, currentIndex + 1)
      );

      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);

      if (!isDeleting && currentIndex === fullText.length) {
        // Yazma tamamlandı, silme başlasın
        setTimeout(() => setIsDeleting(true), newTextDelay);
      } else if (isDeleting && currentIndex === 0) {
        // Silme tamamlandı, sonraki kelimeye geç
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping, 
      isDeleting ? erasingDelay : typingDelay
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, textArray, erasingDelay, typingDelay, newTextDelay]);

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
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Mobil cihazlarda doğrudan elementin en üstüne kaydır
      if (window.innerWidth < 768) {
        window.scrollTo({
          top: element.offsetTop - navbarHeight +90, // Navbar yüksekliği + 10px ekstra boşluk
          behavior: 'smooth'
        });
      } else {
        // Desktop için mevcut merkezi kaydırma davranışını koru
        const viewportHeight = window.innerHeight;
        const elementHeight = element.getBoundingClientRect().height;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offset = elementTop - (viewportHeight - elementHeight) / 2;
        
        window.scrollTo({
          top: offset,
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
      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div id="logo" className="font-bold">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
                className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`}>Ana Sayfa</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`}>Hakkımda</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} 
                className={`hover:text-primary transition-colors ${activeSection === 'skills' ? 'text-primary' : ''}`}>Neler Yapabilirim?</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} 
                className={`hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'text-primary' : ''}`}>Projelerim</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                className={`hover:text-primary transition-colors ${activeSection === 'contact' ? 'text-primary' : ''}`}>İletişim</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-light"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
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
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Ana Sayfa Bölümü */}
        <section id="home" className="py-20 flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Merhaba, Ben Mehmet Koç</h1>
          <h3 className="text-2xl md:text-3xl mb-6 text-center">
            <span className="text-primary">{displayText}</span>
            <span className="animate-blink">|</span>
          </h3>
          <p className="text-xl max-w-3xl mx-auto text-center mb-8"></p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
              Projelerimi Gör
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
              İletişim
            </button>
          </div>
        </section>

        {/* Hakkımda Bölümü */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Hakkımda</h2>
            
            <div className="bg-dark rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Sol taraf - Kişisel tanıtım */}
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">
                    Ben <span className="text-primary">Mehmet Koç</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    Bilgisayar Mühendisliği 2. sınıf öğrencisiyim ve yazılım geliştirme tutkusu ile yolculuğuma devam ediyorum. Web, mobil uygulamalar ve oyun geliştirme alanlarında aktif olarak projeler üretiyorum. Özellikle kullanıcı odaklı, işlevsel ve estetik arayüzler oluşturmayı seviyorum.
                  </p>
                  
                  <p className="text-gray-300 mb-6">
                    Kod yazmak, sadece bir meslek değil, aynı zamanda yaratıcılığımı ifade etmenin en keyifli yolu. Boş zamanlarımda webtoon okumayı, gezmeyi ve spor yapmayı seviyorum. Sürekli yeni şeyler öğrenmeyi ve sınırlarımı zorlamayı hedefliyorum.
Yazılımın sunduğu sonsuz olanaklarla daha fazlasını üretmeye ve kendimi geliştirmeye devam ediyorum. </p>
                </div>
                
                {/* Sağ taraf - Kişisel bilgiler */}
                <div className="md:w-2/5 bg-dark-darker rounded-lg p-6 mt-8 md:mt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-400 mb-1">İsim:</h4>
                      <p className="font-medium">Mehmet Koç</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-400 mb-1">Email:</h4>
                      <p className="font-medium">mehmetkoc2050@gmail.com</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-400 mb-1">Yaş:</h4>
                      <p className="font-medium">20</p>
                    </div>
                    
                    <div>
                      <h4 className="text-gray-400 mb-1">Konum:</h4>
                      <p className="font-medium">Balıkesir, Türkiye</p>
                    </div>
                    
                    <div className="pt-4">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neler Yapabilirim Bölümü */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Neler Yapabilirim?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Web Geliştirme</h3>
                <p>Modern ve responsive web siteleri geliştiriyorum. HTML, CSS, JavaScript ve React gibi teknolojileri kullanarak kullanıcı dostu arayüzler tasarlıyorum.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Mobil Uygulama</h3>
                <p>Flutter ve Dart kullanarak iOS ve Android platformları için hızlı, güzel ve native performanslı cross-platform mobil uygulamalar geliştiriyorum.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-gamepad"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Oyun Geliştirme</h3>
                <p>Unity ve C# kullanarak 2D/3D oyunlar geliştiriyorum. Oyun mekaniği tasarımı, karakter kontrolü ve kullanıcı deneyimi odaklı interaktif oyunlar oluşturuyorum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolyo Bölümü */}
        <section id="portfolio" className="py-20">
          <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Portfolyo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dark-darker rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img src="https://via.placeholder.com/600x400" alt="Proje 1" className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">E-Ticaret Sitesi</h3>
                  <p className="text-gray-300 mb-4">React, Node.js ve MongoDB kullanarak geliştirdiğim tam kapsamlı bir e-ticaret platformu.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Node.js</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">MongoDB</span>
                  </div>
                  <div className="flex justify-between">
                    <button className="text-primary hover:underline">Demo</button>
                    <button className="text-primary hover:underline">GitHub</button>
                  </div>
                </div>
              </div>
              <div className="bg-dark-darker rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img src="https://via.placeholder.com/600x400" alt="Proje 2" className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sosyal Medya Uygulaması</h3>
                  <p className="text-gray-300 mb-4">React Native ile geliştirdiğim, kullanıcıların fotoğraf paylaşabildiği bir mobil uygulama.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">React Native</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Firebase</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Redux</span>
                  </div>
                  <div className="flex justify-between">
                    <button className="text-primary hover:underline">Demo</button>
                    <button className="text-primary hover:underline">GitHub</button>
                  </div>
                </div>
              </div>
              <div className="bg-dark-darker rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-700 relative overflow-hidden">
                  <img src="https://via.placeholder.com/600x400" alt="Proje 3" className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blog Platformu</h3>
                  <p className="text-gray-300 mb-4">Next.js ve Tailwind CSS kullanarak geliştirdiğim, SEO dostu bir blog platformu.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Next.js</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Sanity.io</span>
                  </div>
                  <div className="flex justify-between">
                    <button className="text-primary hover:underline">Demo</button>
                    <button className="text-primary hover:underline">GitHub</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <button className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">Tüm Projeleri Gör</button>
            </div>
          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">İletişim</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Bana Ulaşın</h3>
                <p className="mb-6">Bir projeniz mi var? Birlikte çalışmak ister misiniz? Aşağıdaki iletişim bilgilerinden bana ulaşabilir veya formu doldurarak mesaj gönderebilirsiniz.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Adres</h4>
                      <p>İstanbul, Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Telefon</h4>
                      <p>+90 555 123 45 67</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold mb-3">Sosyal Medya</h4>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-github"></i>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                      <i className="fab fa-linkedin"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">İsim</label>
                    <input type="text" id="name" className="w-full px-4 py-2 bg-dark-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 bg-dark-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2 font-medium">Konu</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 bg-dark-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 font-medium">Mesaj</label>
                    <textarea id="message" rows="5" className="w-full px-4 py-2 bg-dark-darker border border-gray-700 rounded-lg focus:outline-none focus:border-primary"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">Gönder</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default App;





























