import React from 'react';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Viewport yüksekliğini al
      const viewportHeight = window.innerHeight;
      // Elementin yüksekliğini al
      const elementHeight = element.getBoundingClientRect().height;
      // Elementin üst pozisyonunu al
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      // Ortalama için gerekli offset hesapla
      const offset = elementTop - (viewportHeight - elementHeight) / 2;
      
      // Sayfayı kaydır
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-darker text-light">
      <nav className="sticky top-0 z-50 bg-dark shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div id="logo" className="font-bold">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-primary transition-colors">Ana Sayfa</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-primary transition-colors">Ben Kimim?</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="hover:text-primary transition-colors">Neler Yapabilirim?</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} className="hover:text-primary transition-colors">Portfolyo</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-primary transition-colors">İletişim</a></li>
          </ul>
          <div className="md:hidden">
            <button className="text-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Ana Sayfa Bölümü */}
        <section id="home" className="py-20 flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Hoş Geldiniz</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">Modern web teknolojileri ile yaratıcı çözümler üreten bir yazılım geliştiricisinin portfolyo sayfasına hoş geldiniz.</p>
        </section>

        {/* Ben Kimim Bölümü */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Ben Kimim?</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <p className="mb-6">Merhaba! Ben [Adınız], [X] yıllık deneyime sahip bir [mesleğiniz/uzmanlık alanınız]. Modern web teknolojileri konusunda tutkulu ve sürekli kendini geliştiren biriyim. Kullanıcı odaklı, performanslı ve estetik çözümler üretmeyi seviyorum.</p>
                <p className="mb-6">Yazılım geliştirme süreçlerinde problem çözme yeteneğim ve analitik düşünce yapım ile öne çıkıyorum. Her projede en güncel teknolojileri kullanarak, sürdürülebilir ve ölçeklenebilir çözümler sunmayı hedefliyorum.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  <div className="bg-dark-darker p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm font-medium">Yıllık Deneyim</div>
                  </div>
                  <div className="bg-dark-darker p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm font-medium">Tamamlanan Proje</div>
                  </div>
                  <div className="bg-dark-darker p-6 rounded-lg shadow-md transform hover:-translate-y-2 transition-transform">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm font-medium">Mutlu Müşteri</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute inset-4 border-2 border-primary rounded-lg"></div>
                <img src="https://via.placeholder.com/600x700" alt="Profil" className="relative z-10 rounded-lg shadow-xl w-full" />
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
                <p>React Native kullanarak iOS ve Android platformları için native hissiyatı veren mobil uygulamalar geliştiriyorum.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Backend Geliştirme</h3>
                <p>Node.js, Express ve MongoDB kullanarak güvenli, ölçeklenebilir ve performanslı API'lar ve backend sistemleri geliştiriyorum.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">UI/UX Tasarım</h3>
                <p>Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel arayüzler tasarlıyorum. Figma ve Adobe XD araçlarını etkin şekilde kullanıyorum.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-search"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">SEO Optimizasyonu</h3>
                <p>Web sitelerinin arama motorlarında daha iyi sıralanması için SEO optimizasyonu yapıyorum. Teknik SEO, içerik stratejisi ve performans iyileştirmeleri konularında uzmanım.</p>
              </div>
              <div className="bg-dark-darker p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">DevOps</h3>
                <p>CI/CD pipeline'ları kurarak, otomatik test ve deployment süreçleri oluşturuyorum. Docker, AWS ve Netlify gibi teknolojileri kullanarak projeleri yayına alıyorum.</p>
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
