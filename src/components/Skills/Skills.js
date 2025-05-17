import React from 'react';

const Skills = () => {
  return (
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
  );
};

export default Skills;