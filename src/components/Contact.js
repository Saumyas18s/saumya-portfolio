import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isEditing] = useState(false);

  // Editable content state
  const [content, setContent] = useState({
    title: "Get in Touch",
    description: "If you have any inquiries or just want to say hi, please use the contact form!",
    email: "saumyasingh62552@gmail.com"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContentChange = (field, value) => {
    setContent({
      ...content,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  const EditableDiv = ({ content, onEdit, className, placeholder }) => {
    const [isEditingLocal, setIsEditingLocal] = useState(false);
    const [tempContent, setTempContent] = useState(content);
    const [isHovered, setIsHovered] = useState(false);

    const handleSave = () => {
      onEdit(tempContent);
      setIsEditingLocal(false);
    };

    const handleCancel = () => {
      setTempContent(content);
      setIsEditingLocal(false);
    };

    if (isEditingLocal) {
      return (
        <div className={`editing ${className}`}>
          <input
            className="edit-input"
            type="text"
            value={tempContent}
            onChange={(e) => setTempContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
            placeholder={placeholder}
          />
          <div className="edit-controls">
            <button onClick={handleSave} className="save-btn">✓</button>
            <button onClick={handleCancel} className="cancel-btn">✕</button>
          </div>
        </div>
      );
    }

    return (
      <div 
        className={`editable ${className} ${isHovered && isEditing ? 'hovered' : ''}`}
        onClick={() => isEditing && setIsEditingLocal(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={isEditing ? "Click to edit" : ""}
      >
        {content || placeholder}
        {isEditing && (
          <span className={`edit-icon ${isHovered ? 'visible' : ''}`}>✏</span>
        )}
      </div>
    );
  };

  return (
    <div className="contact-wrapper">
      {/* <div className="edit-mode-toggle">
        <button 
          className={`toggle-btn ${isEditing ? 'active' : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Lock' : 'Edit'}
        </button>
      </div> */}

      <div className="contact-container">
        <div className="contact-header">
          <EditableDiv
            content={content.title}
            onEdit={(value) => handleContentChange('title', value)}
            className="contact-title"
            placeholder="Enter title"
          />
          
          {/* <EditableDiv
            content={content.subtitle}
            onEdit={(value) => handleContentChange('subtitle', value)}
            className="contact-subtitle"
            placeholder="Enter subtitle"
          /> */}
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <EditableDiv
              content={content.description}
              onEdit={(value) => handleContentChange('description', value)}
              className="contact-description"
              placeholder="Enter description"
            />

            <div className="contact-info">
              <div className="contact-email">
                <div className="email-icon">✉</div>
                <EditableDiv
                  content={content.email}
                  onEdit={(value) => handleContentChange('email', value)}
                  className="email-text"
                  placeholder="Enter email"
                />
              </div>

              <div className="social-links">
                <a href="https://github.com/Saumyas18s" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/saumya-singh-ss121825/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/toon.trendz/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                />
              </div>

              <button 
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
