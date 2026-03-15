export default function Home() {
  return (
    <div className="landing-page">
      <section className="hero-panel">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="spark">*</p>
            <h1>Providing Digital Dentistry Services</h1>
            <p className="lead">
              A fresh approach to trusted dental care with gentle treatment, modern tools, and a clinic
              environment focused on comfort.
            </p>

            <div className="hero-actions">
              <a href="tel:+918806966423" className="btn-main">Book An Appointment</a>
              <a href="#about" className="btn-ghost">Watch Clinic Tour</a>
            </div>

            <div className="hero-footnote">
              <img src="/Capture5.PNG" alt="Dental chair setup" loading="lazy" />
              <div>
                <p>From safety and quality consulting to advanced treatment plans.</p>
                <span className="mini-line" />
              </div>
            </div>
          </div>

          <div className="hero-gallery">
            <div className="gallery-main">
              <img src="/clinic1.PNG" alt="Smile Dental Care treatment room" />
            </div>
            <div className="gallery-side">
              <img src="/Capture2.PNG" alt="Dental treatment chair" />
              <img src="/Capture3.PNG" alt="Dental instruments area" />
            </div>
            <div className="hero-stats">
              <article>
                <strong>1500</strong>
                <span>Online Appointments</span>
              </article>
              <article>
                <strong>120K</strong>
                <span>Recovered Patients</span>
              </article>
              <article>
                <strong>96%</strong>
                <span>Satisfaction Rate</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="services-band" id="services">
        <div className="site-container">
          <div className="split-head">
            <h2>You Can Get The Highest Quality Service Here</h2>
            <p>
              We use only high-quality materials and precision methods so every treatment is safe,
              long-lasting, and patient friendly.
            </p>
          </div>

          <div className="service-cards">
            <article className="service-card cream">
              <h3>Dental Implants</h3>
              <p>Reliable implant solutions planned with accurate diagnostics.</p>
              <a href="#help">See More</a>
            </article>
            <article className="service-card mint">
              <h3>Emergency Dentistry</h3>
              <p>Quick support for tooth pain, swelling, and urgent treatment.</p>
              <a href="#help">See More</a>
            </article>
            <article className="service-card sky">
              <h3>Root Canal Treatment</h3>
              <p>Comfort-focused RCT procedures with modern rotary systems.</p>
              <a href="#help">See More</a>
            </article>
            <article className="service-card lemon">
              <h3>Smile Designing</h3>
              <p>Customized smile planning with digital previews and cosmetic options.</p>
              <a href="#help">See More</a>
            </article>
            <article className="service-card peach">
              <h3>Pediatric Dentistry</h3>
              <p>Gentle child-focused care for checkups, fillings, and preventive visits.</p>
              <a href="#help">See More</a>
            </article>
            <article className="service-card sky">
              <h3>Teeth Whitening</h3>
              <p>Safe whitening procedures for a brighter smile with long-lasting results.</p>
              <a href="#help">See More</a>
            </article>
          </div>
        </div>
      </section>

      <section className="reason-block" id="about">
        <div className="site-container reason-grid">
          <div className="reason-image">
            <img src="/Capture4.PNG" alt="Clinic interior with dental unit" loading="lazy" />
          </div>
          <div className="reason-copy">
            <h2>You Have Lots Of Reasons To Choose Us</h2>
            <p>
              Our team combines years of dental expertise with a calm, patient-first process so your
              experience is clear, comfortable, and dependable.
            </p>
            <ul className="reason-list">
              <li>Same-day emergency consultation support</li>
              <li>Sterile clinic setup with modern treatment chairs</li>
              <li>Clear treatment explanation before every procedure</li>
              <li>Comfort-first care for kids, adults, and senior patients</li>
            </ul>
            <a className="btn-main" href="tel:+918806966423">Call For Consultation</a>
          </div>
        </div>
      </section>

      <section className="gallery-showcase">
        <div className="site-container">
          <div className="split-head">
            <h2>Clinic Gallery</h2>
            <p>
              Real photos from our treatment rooms and chair units, matching the setup you shared
              from Google photos for Smile Dental Care.
            </p>
          </div>

          <div className="gallery-grid-large">
            <figure>
              <img src="/clinic1.PNG" alt="Main dental treatment room" loading="lazy" />
              <figcaption>Main treatment room with patient chair</figcaption>
            </figure>
            <figure>
              <img src="/Capture2.PNG" alt="Secondary dental chair room" loading="lazy" />
              <figcaption>Secondary chair setup for daily procedures</figcaption>
            </figure>
            <figure>
              <img src="/Capture3.PNG" alt="Chair and instrument area" loading="lazy" />
              <figcaption>Clinical instrument and consultation area</figcaption>
            </figure>
            <figure>
              <img src="/Capture4.PNG" alt="Dental room side view" loading="lazy" />
              <figcaption>Room side view with monitor and operator unit</figcaption>
            </figure>
            <figure>
              <img src="/Capture5.PNG" alt="Dental chair equipment" loading="lazy" />
              <figcaption>Dental unit equipment for precision treatment</figcaption>
            </figure>
            <figure>
              <img src="/Capture2.PNG" alt="Clean clinic workspace" loading="lazy" />
              <figcaption>Clean workspace with sterilized instrument zone</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="process-band">
        <div className="site-container process-grid">
          <div className="process-copy">
            <h2>How Treatment Works At Our Clinic</h2>
            <p>
              Every appointment follows a transparent and comfortable workflow so you always know
              what to expect.
            </p>
            <div className="process-steps">
              <article>
                <strong>1. Consultation & Scan</strong>
                <span>Detailed checkup, X-ray advice if required, and pain-point evaluation.</span>
              </article>
              <article>
                <strong>2. Personalized Treatment Plan</strong>
                <span>We explain procedure options, cost, and timeline before starting.</span>
              </article>
              <article>
                <strong>3. Gentle Procedure & Follow-up</strong>
                <span>Treatment with comfort care and post-visit oral care guidance.</span>
              </article>
            </div>
          </div>

          <div className="process-images">
            <img src="/clinic1.PNG" alt="Consultation room view" loading="lazy" />
            <img src="/Capture3.PNG" alt="Dental chair and lamp setup" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="services-mini" id="help">
        <div className="site-container">
          <div className="split-head">
            <h2>Frequently Asked Help</h2>
            <p>Quick answers for common dental questions from first-time patients.</p>
          </div>

          <div className="faq-grid">
            <article className="faq-card">
              <h3>Do you handle emergency pain?</h3>
              <p>Yes, call us and we will guide you to the earliest available emergency slot.</p>
            </article>
            <article className="faq-card">
              <h3>Is root canal treatment painful?</h3>
              <p>With modern anesthesia and rotary systems, discomfort is minimal and manageable.</p>
            </article>
            <article className="faq-card">
              <h3>Do you treat children?</h3>
              <p>Yes, we provide child-friendly dental care with a calm and supportive approach.</p>
            </article>
            <article className="faq-card">
              <h3>Can I book by phone or WhatsApp?</h3>
              <p>Yes, you can call directly for booking and quick appointment confirmation.</p>
            </article>
          </div>

          <div className="contact-strip">
            <div><strong>Clinic Hours:</strong> Monday to Saturday, 10:00 AM - 8:00 PM</div>
            <div><strong>Call:</strong> +91 88069 66423</div>
            <a href="tel:+918806966423" className="btn-main">Book Your Visit</a>
          </div>
        </div>
      </section>
    </div>
  );
}
