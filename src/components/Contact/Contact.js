import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS servis ID, şablon ID ve public key değerlerinizi buraya girin
    emailjs.sendForm(
      'service_wpopkhp', 
      'template_p2zuw4n', 
      form.current, 
      'XlqDa59uwS1xfl9gv'
    )
      .then((result) => {
        setStatus({ success: true, message: 'Mesajınız başarıyla gönderildi!' });
        form.current.reset();
      }, (error) => {
        setStatus({ success: false, message: 'Bir hata oluştu, lütfen tekrar deneyin.' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
                  <p>Balıkesir, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>mehmetkoc2050@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary text-xl mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold">Telefon</h4>
                  <p>+90 538 842 96 05</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-bold mb-3">Sosyal Medya</h4>
              <div className="flex space-x-4">
                <a href="https://x.com/MehmetK26695521" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/MehmetKoc16" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mehmet-ko%C3%A7-3479a5340/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-darker flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            {status && (
              <div className={`mb-4 p-3 rounded ${status.success ? 'bg-green-800/30 text-green-400' : 'bg-red-800/30 text-red-400'}`}>
                {status.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="user_name" className="block mb-2 font-medium">İsim</label>
                <input type="text" name="user_name" id="user_name" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="user_email" className="block mb-2 font-medium">Email</label>
                <input type="email" name="user_email" id="user_email" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Konu</label>
                <input type="text" name="subject" id="subject" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-medium">Mesaj</label>
                <textarea name="message" id="message" rows="5" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-black" required></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors flex justify-center items-center"
                disabled={loading}
              >
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


