import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Ticaret Web Sitesi",
      description: "Modern bir e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi.",
      image: "/images/project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 2,
      title: "Fitness Takip Uygulaması",
      description: "Egzersiz rutinlerini ve beslenme planlarını takip etmek için Flutter ile geliştirilmiş mobil uygulama.",
      image: "/images/project2.jpg",
      tags: ["Flutter", "Firebase", "Dart"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      id: 3,
      title: "2D Platform Oyunu",
      description: "Unity ve C# ile geliştirilen, çeşitli bölümler ve zorluklar içeren 2D platform oyunu.",
      image: "/images/project3.jpg",
      tags: ["Unity", "C#", "Game Design"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto bg-dark rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Portfolyo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-dark-darker rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                    <i className="fas fa-external-link-alt mr-1"></i> Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
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