import React from 'react';

const Contact = () => {
  return (
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
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
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
  );
};

export default Contact;