import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Ana Sayfa bileşeni
function Home() {
  return (
    <div className="page">
      <h1>Ana Sayfa</h1>
      <p>Portfolyo sayfama hoş geldiniz!</p>
    </div>
  );
}

// Ben Kimim bileşeni
function About() {
  return (
    <div className="page">
      <h1>Ben Kimim?</h1>
      <p>Burada kendiniz hakkında bilgi verebilirsiniz.</p>
    </div>
  );
}

// Neler Yapabilirim bileşeni
function Skills() {
  return (
    <div className="page">
      <h1>Neler Yapabilirim?</h1>
      <ul>
        <li>Web Geliştirme</li>
        <li>Mobil Uygulama Geliştirme</li>
        <li>UI/UX Tasarım</li>
        {/* Diğer yeteneklerinizi ekleyin */}
      </ul>
    </div>
  );
}

// Portfolyo bileşeni
function Portfolio() {
  return (
    <div className="page">
      <h1>Portfolyo</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">Proje 1</div>
        <div className="portfolio-item">Proje 2</div>
        <div className="portfolio-item">Proje 3</div>
      </div>
    </div>
  );
}

// İletişim bileşeni
function Contact() {
  return (
    <div className="page">
      <h1>İletişim</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ad Soyad</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">İçerik</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Gönder</button>
      </form>
    </div>
  );
}

// Footer bileşeni (Sosyal medya bağlantıları için)
function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Portfolyo</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">Portfolyo</div>
          <ul className="nav-links">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/about">Ben Kimim?</Link></li>
            <li><Link to="/skills">Neler Yapabilirim?</Link></li>
            <li><Link to="/portfolio">Portfolyo</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

