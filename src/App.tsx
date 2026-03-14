import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import './App.css';

function Navigation() {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const isActive = (path: string) => activePath === path;

  return (
    <nav className="nav">
      <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
      <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
      <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
      <Link to="/appointment" className={isActive('/appointment') ? 'active' : ''}>Appointment</Link>
      <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <h1>Smile Dental Care</h1>
                <p>Dhole Patil Road, Pune</p>
              </div>
              <Navigation />
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Smile Dental Care</h3>
                <p>Shop No.14, Sai Baba Apartment, Ground floor</p>
                <p>Balkrishna Sakharam Dhole Patil Rd</p>
                <p>Near Ruby Hall Clinic, Pune 411001</p>
              </div>
              <div className="footer-section">
                <h3>Hours</h3>
                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="footer-section">
                <h3>Contact</h3>
                <p>Phone: 088069 66423</p>
                <p>LGBTQ+ friendly</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Smile Dental Care. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <a
          href="https://api.whatsapp.com/send/?phone=918806966423&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="32" height="32">
            <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.253 1.409 1.409-5.253-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.07 0-7.444 6.056-13.5 13.5-13.5s13.5 6.056 13.5 13.5-6.056 13.5-13.5 13.5zM21.793 18.5c-0.213-0.107-1.262-0.622-1.456-0.694-0.194-0.072-0.336-0.107-0.478 0.107s-0.549 0.694-0.672 0.836c-0.123 0.142-0.246 0.16-0.459 0.053-1.568-0.784-2.596-1.4-3.631-3.172-0.273-0.469 0.273-0.436 0.783-1.45 0.086-0.142 0.043-0.266-0.024-0.373-0.067-0.107-0.478-1.152-0.655-1.577-0.172-0.415-0.347-0.358-0.478-0.365-0.124-0.007-0.266-0.007-0.408-0.007s-0.372 0.053-0.566 0.266c-0.194 0.213-0.742 0.725-0.742 1.768s0.76 2.051 0.866 2.193c0.107 0.142 1.502 2.293 3.637 3.215 1.365 0.588 1.902 0.627 2.584 0.529 0.418-0.061 1.262-0.516 1.44-1.014 0.178-0.498 0.178-0.925 0.125-1.014-0.053-0.089-0.195-0.142-0.408-0.249z"/>
          </svg>
        </a>

        <a
          href="tel:+918806966423"
          className="call-button"
          aria-label="Call Now"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
