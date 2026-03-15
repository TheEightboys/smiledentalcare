import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      <header className="topbar" id="home">
        <div className="site-container topbar-inner">
          <a className="brand" href="#home" aria-label="Smile Dental Care Home">
            Smile Dental Care
          </a>

          <nav className="menu" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#help">Help</a>
          </nav>

          <a className="contact-cta" href="tel:+918806966423">Contact us</a>
        </div>
      </header>

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
