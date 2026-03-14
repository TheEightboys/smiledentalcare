export default function Contact() {
  return (
    <div className="page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Smile Dental Care</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Visit Our Clinic</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p>Shop No.14, Sai Baba Apartment, Ground floor</p>
                    <p>13, Tadiwala Road, Panchasheel Chawk</p>
                    <p>Balkrishna Sakharam Dhole Patil Rd</p>
                    <p>Next to Ajay Medical, Near Ruby Hall Clinic</p>
                    <p>Pune, Maharashtra 411001</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:+918806966423">088069 66423</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Hours</h3>
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <a
                    href="https://api.whatsapp.com/send/?phone=918806966423&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <a href="tel:+918806966423" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    Call Now
                  </a>
                  <a href="/appointment" className="btn btn-secondary">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                    Book Appointment
                  </a>
                </div>
              </div>

              <div className="additional-info">
                <h3>Additional Information</h3>
                <ul>
                  <li>LGBTQ+ friendly practice</li>
                  <li>Wheelchair accessible</li>
                  <li>Free parking available nearby</li>
                  <li>Emergency dental services available</li>
                </ul>
              </div>
            </div>

            <div className="map-container">
              <h2>Find Us on Map</h2>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5348923!2d73.87402017585413!3d18.534892166974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b8e5f8e80d%3A0x7f6b7e2f5e5e5e5e!2sSmile%20Dental%20Care%2C%20Dhole%20Patil%20Road!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smile Dental Care Location"
                />
              </div>
              <div className="map-links">
                <a
                  href="https://www.google.com/maps/dir//Smile+Dental+Care,+Dhole+Patil+Road/@18.5348923,73.8740202,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
