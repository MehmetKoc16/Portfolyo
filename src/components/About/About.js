import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Hakkımda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[400px] bg-dark-darker rounded-lg overflow-hidden">
                <img src="/images/profile.jpg" alt="Mehmet KOÇ" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-white">Yıl Deneyim</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Web & Mobil Geliştirici</h3>
            <p className="mb-6">
              Merhaba! Ben Mehmet KOÇ, 5+ yıllık deneyime sahip bir yazılım geliştiricisiyim. Web geliştirme, mobil uygulama geliştirme ve oyun geliştirme alanlarında uzmanlaşmış durumdayım.
            </p>
            <p className="mb-6">
              React, Flutter ve Unity teknolojilerini kullanarak kullanıcı dostu, performanslı ve modern uygulamalar geliştiriyorum. Her projede en iyi kullanıcı deneyimini sunmak için çalışıyorum.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold mb-2">İsim:</h4>
                <p>Mehmet KOÇ</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p>info@example.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Konum:</h4>
                <p>İstanbul, Türkiye</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Freelance:</h4>
                <p>Müsait</p>
              </div>
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
    </section>
  );
};

export default About;