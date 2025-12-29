import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    // EmailJS Configuration
    const serviceId = 'service_hmsgaoj'; // Create at emailjs.com
    const templateId = 'template_gfnqvew'; // Create at emailjs.com
    const publicKey = 'R3scVYmG6qWwtnd_l'; // Get from emailjs.com

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Pawan Nagar',
          reply_to: formData.email,
        },
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or email me directly at your@email.com'
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Create Something Amazing Together</h3>
            <p>
              I'm currently available for freelance work and full-time positions. 
              Whether you have a project in mind or just want to connect, 
              feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> pawannagar.cse@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +91 8989839348
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Indore, India
              </div>
              <div className="contact-item">
                <strong>Availability:</strong> Open for Opportunities
              </div>
            </div>
          </div>

          <div className="contact-form">
            {status.success && (
              <div style={{
                backgroundColor: '#10b98120',
                color: '#10b981',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✅ {status.message}
              </div>
            )}
            
            {status.error && (
              <div style={{
                backgroundColor: '#ef444420',
                color: '#ef4444',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ❌ {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status.loading}
                style={{ width: '100%', padding: '16px' }}
              >
                {status.loading ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;