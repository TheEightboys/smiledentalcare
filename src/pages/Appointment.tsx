import { useState, FormEvent } from 'react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page">
      <section className="page-header">
        <div className="container">
          <h1>Book an Appointment</h1>
          <p>Schedule your visit with us</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="appointment-container">
            <div className="appointment-info">
              <h2>Schedule Your Visit</h2>
              <p>
                Fill out the form to request an appointment. We'll contact you shortly to confirm
                your booking and answer any questions you may have.
              </p>

              <div className="contact-methods">
                <h3>Prefer to Call or Message?</h3>
                <div className="contact-method-card">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <div>
                    <strong>Call Us</strong>
                    <p>088069 66423</p>
                  </div>
                </div>
                <div className="contact-method-card">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>Message us instantly</p>
                  </div>
                </div>
              </div>

              <div className="clinic-hours">
                <h3>Clinic Hours</h3>
                <div className="hours-list">
                  <div className="hours-row">
                    <span>Monday - Saturday</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="appointment-form-container">
              {submitted ? (
                <div className="success-message">
                  <svg viewBox="0 0 24 24" width="64" height="64">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your appointment request has been submitted. We'll contact you shortly to confirm.</p>
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleSubmit}>
                  <h2>Appointment Form</h2>

                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">Preferred Time *</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Teeth Cleaning">Teeth Cleaning</option>
                      <option value="Tooth Filling">Tooth Filling</option>
                      <option value="Root Canal">Root Canal Treatment</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Orthodontics">Orthodontics (Braces/Aligners)</option>
                      <option value="Dental Implant">Dental Implant</option>
                      <option value="Extraction">Tooth Extraction</option>
                      <option value="Crown/Bridge">Crown or Bridge</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific concerns or questions?"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Submit Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
