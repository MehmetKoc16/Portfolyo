import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-primary after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Hakkımda</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-12 px-12 md:px-24">
          {/* Sol taraf - Başlık ve açıklama */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">
              Ben <span className="text-primary">Mehmet Koç</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Bilgisayar Mühendisliği 2. sınıf öğrencisiyim ve yazılım geliştirme tutkusu ile yolculuğuma devam ediyorum. 
              Web, mobil uygulamalar ve oyun geliştirme alanlarında aktif olarak projeler üretiyorum. Özellikle kullanıcı odaklı, 
              işlevsel ve estetik arayüzler oluşturmayı seviyorum.
            </p>
            <p className="text-gray-300 mb-6">
              Kod yazmak, sadece bir meslek değil, aynı zamanda yaratıcılığımı ifade etmenin en keyifli yolu. Boş zamanlarımda webtoon okumayı, gezmeyi ve spor yapmayı seviyorum. Sürekli yeni şeyler öğrenmeyi ve sınırlarımı zorlamayı hedefliyorum.
              Yazılımın sunduğu sonsuz olanaklarla daha fazlasını üretmeye ve kendimi geliştirmeye devam ediyorum.
            </p>
          </div>

          {/* Sağ taraf - Kişisel bilgiler */}
          <div className="w-full md:w-1/3 bg-dark-darker rounded-lg p-6 mt-8 md:mt-0">
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
              
              {/* CV İndirme Butonu */}
              <div className="mt-6">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Mehmet_KOC_CV.pdf';
                    link.download = 'Mehmet_KOC_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] w-full"
                >
                  <span className="flex items-center justify-center">
                    <i className="fas fa-download mr-2"></i>
                    CV İndir
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

