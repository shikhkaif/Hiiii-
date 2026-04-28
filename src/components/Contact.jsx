function Contact() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('Form submission is disabled in this demo. Please contact me directly via email.');
  };

  return (
    <section id="contact" className="section" tabIndex="-1">
      <div className="section-heading">
        <h2>Contact</h2>
        <p>Reach out via email, phone, LinkedIn, or the contact form below.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3 className="contact-title">Email</h3>
          <p>kaif.shaikh@email.com</p>
        </div>
        <div className="contact-card">
          <h3 className="contact-title">Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="contact-card">
          <h3 className="contact-title">LinkedIn</h3>
          <p>linkedin.com/in/kaif-shaikh</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" aria-label="Name" required />
        <input type="email" placeholder="Your Email" aria-label="Email" required />
        <textarea placeholder="How can I help you?" aria-label="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
