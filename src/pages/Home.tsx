export default function Home() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Smile Dental Care</h1>
            <p className="hero-subtitle">Your Trusted Dental Care Partner in Pune</p>
            <p className="hero-description">
              Experience professional dental care with modern technology and compassionate service.
              We are committed to providing exceptional dental treatments in a comfortable, welcoming environment.
            </p>
            <div className="hero-buttons">
              <a href="/appointment" className="btn btn-primary">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Book Appointment
              </a>
              <a href="tel:+918806966423" className="btn btn-secondary">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Expert Dental Care</h3>
              <p>Highly qualified dental professionals with years of experience and advanced training</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3>Flexible Hours</h3>
              <p>Open Monday to Saturday, 10 AM to 8 PM for your convenience and busy schedules</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h3>Modern Technology</h3>
              <p>State-of-the-art equipment for accurate diagnosis and comfortable treatment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <h2>Our Dental Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>General Dentistry</h3>
              <p>Comprehensive checkups, cleanings, and preventive dental care for all ages</p>
            </div>
            <div className="service-card">
              <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Cosmetic Dentistry</h3>
              <p>Teeth whitening, veneers, and smile makeovers for a confident smile</p>
            </div>
            <div className="service-card">
              <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Orthodontics</h3>
              <p>Braces and clear aligners for perfect teeth alignment and bite correction</p>
            </div>
            <div className="service-card">
              <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Root Canal</h3>
              <p>Advanced endodontic treatments with minimal discomfort and quick recovery</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a href="/services" className="btn btn-primary btn-large">
              View All Services
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Smile?</h2>
          <p>Book your appointment today and take the first step towards better dental health and confidence</p>
          <div className="cta-buttons">
            <a href="/appointment" className="btn btn-primary btn-large">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Book Appointment
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=918806966423&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
