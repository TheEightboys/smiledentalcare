export default function Services() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive oral health care for the whole family',
      treatments: [
        'Regular Dental Checkups',
        'Professional Teeth Cleaning',
        'Cavity Fillings',
        'Dental X-rays',
        'Fluoride Treatments',
        'Oral Cancer Screening'
      ]
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with our aesthetic dental services',
      treatments: [
        'Teeth Whitening',
        'Porcelain Veneers',
        'Dental Bonding',
        'Smile Makeovers',
        'Gum Contouring',
        'Composite Fillings'
      ]
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth for improved function and appearance',
      treatments: [
        'Metal Braces',
        'Ceramic Braces',
        'Clear Aligners',
        'Retainers',
        'Early Orthodontic Treatment',
        'Adult Orthodontics'
      ]
    },
    {
      title: 'Root Canal Treatment',
      description: 'Save your natural teeth with advanced endodontic care',
      treatments: [
        'Single Sitting Root Canal',
        'Retreatment',
        'Apicoectomy',
        'Pulpotomy',
        'Post and Core',
        'Crown Placement'
      ]
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      treatments: [
        'Single Tooth Implants',
        'Multiple Tooth Implants',
        'Full Arch Restoration',
        'Implant-Supported Dentures',
        'Bone Grafting',
        'Sinus Lift'
      ]
    },
    {
      title: 'Periodontics',
      description: 'Treatment for gum disease and related conditions',
      treatments: [
        'Scaling and Root Planing',
        'Gum Disease Treatment',
        'Periodontal Maintenance',
        'Gum Grafting',
        'Crown Lengthening',
        'Laser Gum Treatment'
      ]
    },
    {
      title: 'Oral Surgery',
      description: 'Surgical procedures for various dental conditions',
      treatments: [
        'Tooth Extractions',
        'Wisdom Teeth Removal',
        'Impacted Teeth Surgery',
        'Jaw Surgery',
        'Biopsy',
        'Frenectomy'
      ]
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children',
      treatments: [
        'Dental Checkups for Kids',
        'Fluoride Treatments',
        'Dental Sealants',
        'Cavity Prevention',
        'Habit Counseling',
        'Early Orthodontic Assessment'
      ]
    },
    {
      title: 'Prosthodontics',
      description: 'Restoration and replacement of damaged or missing teeth',
      treatments: [
        'Dental Crowns',
        'Bridges',
        'Dentures',
        'Partial Dentures',
        'Implant-Supported Prosthetics',
        'Overdentures'
      ]
    }
  ];

  return (
    <div className="page">
      <section className="page-header">
        <div className="container">
          <h1>Our Dental Services</h1>
          <p>Comprehensive dental care for all your oral health needs</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="services-intro">
            <p>
              At Smile Dental Care, we offer a complete range of dental services using the latest
              technology and techniques. Our experienced team is committed to providing high-quality
              care in a comfortable, patient-friendly environment.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="treatment-list">
                  {service.treatments.map((treatment, idx) => (
                    <li key={idx}>{treatment}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <h2>Need a Specific Treatment?</h2>
            <p>Contact us to discuss your dental needs and schedule a personalized consultation</p>
            <div className="cta-buttons">
              <a href="/appointment" className="btn btn-primary btn-large">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Book Appointment
              </a>
              <a href="/contact" className="btn btn-secondary btn-large">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
