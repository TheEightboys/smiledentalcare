export default function About() {
  return (
    <div className="page">
      <section className="page-header">
        <div className="container">
          <h1>About Our Clinic</h1>
          <p>Excellence in Dental Care Since Our Establishment</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Smile Dental Care - Your Dental Health Partner</h2>
              <p>
                At Smile Dental Care, we are dedicated to providing exceptional dental care to patients
                of all ages. Located conveniently on Dhole Patil Road in Pune, our clinic is equipped
                with modern dental technology and staffed by experienced professionals who are passionate
                about oral health and patient well-being.
              </p>
              <p>
                We understand that visiting the dentist can be anxiety-inducing for some patients.
                That's why we've created a warm, welcoming environment where comfort and care are our
                top priorities. Our team takes the time to listen to your concerns, explain all
                treatment options clearly, and ensure you feel comfortable throughout your visit.
              </p>
              <p>
                We are proud to be an LGBTQ+ friendly practice, welcoming all patients with respect
                and dignity. Our mission is to help you achieve and maintain optimal oral health while
                creating beautiful, confident smiles that last a lifetime.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">4.8</div>
                <div className="stat-label">Patient Rating</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Successful Treatments</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Patient Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="doctor-info">
            <h2>Meet Our Dental Team</h2>
            <div className="doctor-card">
              <div className="doctor-image">
                <svg viewBox="0 0 24 24" width="120" height="120">
                  <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="doctor-details">
                <h3>Dr. Rajesh Sharma</h3>
                <p className="doctor-qualification">BDS, MDS (Orthodontics), FICOI</p>
                <p>
                  With over 15 years of experience in dentistry, Dr. Sharma brings extensive expertise
                  in general, cosmetic, and orthodontic dentistry. He is committed to continuing education
                  and stays current with the latest dental techniques and technologies through regular
                  training and professional development.
                </p>
                <p>
                  Specializing in comprehensive dental care, from routine checkups to complex procedures,
                  Dr. Sharma ensures patient comfort and satisfaction are always the top priority.
                  His gentle approach and attention to detail have earned him the trust of thousands
                  of satisfied patients.
                </p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Patient-Centered Care</h3>
                <p>Your comfort, satisfaction, and dental health are our highest priorities in every interaction</p>
              </div>
              <div className="value-item">
                <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Clinical Excellence</h3>
                <p>We maintain the highest standards in all aspects of dental care and treatment outcomes</p>
              </div>
              <div className="value-item">
                <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Integrity & Transparency</h3>
                <p>Honest, clear communication and ethical practices in all patient interactions</p>
              </div>
              <div className="value-item">
                <div className="info-icon" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Innovation & Technology</h3>
                <p>Utilizing the latest dental technology and techniques for superior treatment outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
