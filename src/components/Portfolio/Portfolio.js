import React, { useState } from 'react';

const Portfolio = () => {
  // Restoran otomasyonu için resim dizisi
  const restaurantImages = [
    "/image/restoran1.png", 
    "/image/restoran2.png", 
    "/image/restoran3.png", 
    "/image/restoran4.png", 
    "/image/restoran5.png",
    "/image/restoran6.png",
    "/image/restoran7.png"
  ];
  
  // Todo uygulaması için resim dizisi
  const todoImages = [
    "/image/todo_app.png",
    "/image/todo_app2.png",
  ];

  // Her proje için aktif resim indeksi
  const [activeImageIndex, setActiveImageIndex] = useState({
    1: 0,
    2: 0,
    3: 0
  });

  // Resim değiştirme fonksiyonu
  const changeImage = (projectId, direction) => {
    let imageCount;
    
    if (projectId === 2) {
      imageCount = restaurantImages.length;
    } else if (projectId === 3) {
      imageCount = todoImages.length;
    } else {
      return; // Diğer projeler için resim değiştirme yok
    }
    
    let newIndex = activeImageIndex[projectId] + direction;
    
    // Döngüsel gezinme
    if (newIndex < 0) newIndex = imageCount - 1;
    if (newIndex >= imageCount) newIndex = 0;
    
    setActiveImageIndex({...activeImageIndex, [projectId]: newIndex});
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
      images: todoImages,
      tags: ["React", "Firebase", "JavaScript"],
      demoLink: "https://example.com",
      githubLink: "https://github.com/MehmetKoc16/todo_app"
    }
  ];

  // Resim galerisi olan projeleri kontrol eden yardımcı fonksiyon
  const hasImageGallery = (projectId) => {
    return projectId === 2 || projectId === 3;
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Portfolyo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <div key={project.id} className="overflow-hidden flex flex-col bg-transparent rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
              {/* Görsel alanı */}
              <div className="relative bg-transparent rounded-t-xl overflow-hidden" style={{ height: "220px" }}>
                {hasImageGallery(project.id) ? (
                  <>
                    <img 
                      src={project.images[activeImageIndex[project.id]]} 
                      alt={`${project.title} - Görsel ${activeImageIndex[project.id] + 1}`} 
                      className="w-full h-full object-contain" 
                    />
                    {/* Resim değiştirme okları - sadece birden fazla resim varsa göster */}
                    {project.images.length > 1 && (
                      <>
                        <button 
                          onClick={() => changeImage(project.id, -1)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          aria-label="Önceki resim"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                          onClick={() => changeImage(project.id, 1)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                          aria-label="Sonraki resim"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                        {/* Resim göstergeleri */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                          {project.images.map((_, index) => (
                            <span 
                              key={index} 
                              className={`w-3 h-3 rounded-full ${index === activeImageIndex[project.id] ? 'bg-primary' : 'bg-gray-400'}`}
                            ></span>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain" 
                  />
                )}
              </div>
              
              {/* İçerik alanı */}
              <div className="bg-black p-6 flex-grow flex flex-col rounded-b-xl">
                <h3 className="text-2xl font-bold mb-3 text-center">{project.title}</h3>
                <p className="mb-5 text-gray-300 text-sm">{project.description}</p>
                
                {/* Etiketler */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-1.5 bg-dark-darker text-white rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                
                {/* Butonlar */}
                <div className="flex justify-center gap-6 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-darker hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-darker hover:bg-gray-700 transition-colors"
                    aria-label="Demo"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/MehmetKoc16?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            <span className="flex items-center justify-center">
              <i className="fab fa-github mr-2 text-lg"></i>
              Tüm Projeleri Gör
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;








