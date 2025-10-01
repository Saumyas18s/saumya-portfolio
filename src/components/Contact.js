import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); setSubmitStatus(null);
    try {
      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) throw new Error('ENV');

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: `${formData.fullName}`.trim() || 'Anonymous',
          email: formData.email,
          phone: formData.phone || 'NA',
          message: formData.message
        },
        { publicKey: PUBLIC_KEY }
      );

      setSubmitStatus('success');
      setFormData({ fullName:'', email:'', phone:'', message:'' });
    } catch (e) {
      console.error(e);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3500);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glass-card">
        <header className="card-header">
          <div className="title-row">
          
            <h1 className="contact-title">
              Get in <span className="title-accent">Touch</span>
            </h1>
          </div>
        </header>

        <div className="card-grid">
          {/* LEFT: video */}
          <div className="media-panel">
            <div className="media-frame">
              <video
                className="contact-video"
                src={`${process.env.PUBLIC_URL}/videos/contact.mp4`}
                autoPlay muted loop playsInline
              />
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="form-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="input-group">
                <span className="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5A1.5 1.5 0 0 0 4.5 21h15A1.5 1.5 0 0 0 21 19.5C21 16.5 17 14 12 14Z" fill="currentColor"/></svg>
                </span>
                <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required/>
              </label>

              <label className="input-group">
                <span className="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" fill="currentColor"/></svg>
                </span>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
              </label>

              <label className="input-group">
                <span className="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.6 11.6 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.6 11.6 0 0 0 .57 3.6 1 1 0 0 1-.25 1Z" fill="currentColor"/></svg>
                </span>
                <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}/>
              </label>


             <label className="input-group textarea">
                <span className="input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" fill="currentColor"/></svg>
                </span>
                <textarea name="message" placeholder="Message" rows="12" value={formData.message} onChange={handleChange} required/>
              </label>

              <button type="submit" className={`submit-btn ${isSubmitting ? 'is-loading' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Submit'}
                <span className="plane" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18"><path d="M2 21 23 12 2 3l3 8-3 10Zm3.5-3.3 1.7-3.8 4.1-2-4.1-2-1.7-3.8L18.6 12 5.5 17.7Z" fill="currentColor"/></svg>
                </span>
              </button>

              {submitStatus === 'success' && <div className="success-note">Message sent successfully! I'll get back to you soon.</div>}
              {submitStatus === 'error' && <div className="success-note" style={{background:'rgba(255,235,238,.55)',border:'1px solid #f5c2c7',color:'#842029'}}>Sending failed. Please try again.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
