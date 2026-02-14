import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-wrapper">

      <div className="contact-section">
        <h2>💌 NEGOCIOS 💌</h2>
        <a
          href="mailto:odalysydafne@trendsetters.com"
          className="contact-email"
        >
          📧 odalysydafne@trendsetters.com
        </a>
      </div>

      <div className="contact-section">
        <h2>💌 TRABAJA CON NOSOTRAS 💌</h2>
        <a
          href="mailto:contacto@jm.com"
          className="contact-email"
        >
          📧 contacto@jm.com
        </a>
      </div>

    </div>
  );
};

export default ContactSection;
