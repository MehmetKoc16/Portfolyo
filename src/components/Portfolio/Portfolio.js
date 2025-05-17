import React, { useState } from 'react';

const Portfolio = () => {
  // Restoran otomasyonu için resim dizisi
  const restaurantImages = ["/image/restoran1.png", "/image/restoran2.png", "/image/restoran3.png", "/image/restoran4.png", "/image/restoran5.png", "/image/restoran6.png", "/image/restoran7.png"];
  const [activeImageIndex, setActiveImageIndex] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  // Resim değiştirme fonksiyonu
  const changeImage = (projectId, direction) => {
    if (projectId === 2) { // Sadece restoran otomasyonu için
      const imageCount = restaurantImages.length;
      let newIndex = activeImageIndex[projectId] + direction;
      
      // Döngüsel gezinme
      if (newIndex < 0) newIndex = imageCount - 1;
      if (newIndex >= imageCount) newIndex = 0;
      
      setActiveImageIndex({...activeImageIndex, [projectId]: newIndex});
    }
  };

  const projects = [
    {
      id: 1,
      title: "Hava Durumu Uygulaması",
      description: "Flutter ve Dart kullanarak geliştirilen, gerçek zamanlı hava durumu verilerini API ile çeken mobil uygulama.",
      image: "/image/weather_app.png",
      tags: ["Flutter", "Dart", "API"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/MehmetKoc16/WeatherApp"
    },
    {
      id: 2,
      title: "Restoran Otomasyonu",
      description: "PyQt5 ve QtDesigner kullanarak geliştirilen, restoran işletmelerinin sipariş, stok ve müşteri yönetimini sağlayan masaüstü uygulaması.",
      images: restaurantImages,
      tags: ["Python", "PyQt5", "QtDesigner"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/MehmetKoc16/Restoran-Uygulamas-"
    },
    {
      id: 3,
      title: "Todo Uygulaması",
      description: "React ve Firebase kullanarak geliştirilen, görevlerinizi organize etmenizi sağlayan web tabanlı todo uygulaması.",
      image: "/image/todo_app.png",
      tags: ["React", "Firebase", "JavaScript"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/MehmetKoc16/todo_app"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Portfolyo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="overflow-hidden flex flex-col bg-transparent">
              {/* Görsel alanı - Görseldeki gibi üst kısım açık renkli */}
              <div className="relative h-48 bg-gray-300 rounded-t-lg overflow-hidden">
                {project.id === 2 ? (
                  <>
                    <img 
                      src={project.images[activeImageIndex[project.id]]} 
                      alt={`${project.title} - Görsel ${activeImageIndex[project.id] + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                    {/* Resim değiştirme okları */}
                    <button 
                      onClick={() => changeImage(project.id, -1)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      aria-label="Önceki resim"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                      onClick={() => changeImage(project.id, 1)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      aria-label="Sonraki resim"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    {/* Resim göstergeleri */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                      {project.images.map((_, index) => (
                        <span 
                          key={index} 
                          className={`w-2 h-2 rounded-full ${index === activeImageIndex[project.id] ? 'bg-white' : 'bg-white/50'}`}
                        ></span>
                      ))}
                    </div>
                  </>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                )}
              </div>
              
              {/* İçerik alanı - Görseldeki gibi alt kısım koyu renkli */}
              <div className="bg-black p-6 flex-grow flex flex-col items-center text-center rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300 text-sm">{project.description}</p>
                
                {/* Etiketler - görseldeki gibi yatay sıralı */}
                <div className="flex justify-center gap-3 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-dark-darker text-white rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                
                {/* Butonlar - görseldeki gibi yan yana yuvarlak butonlar */}
                <div className="flex justify-center gap-3 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-darker hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-darker hover:bg-gray-700 transition-colors"
                    aria-label="Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/MehmetKoc16?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center">
              <i className="fab fa-github mr-2"></i>
              Tüm Projeleri Gör
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




