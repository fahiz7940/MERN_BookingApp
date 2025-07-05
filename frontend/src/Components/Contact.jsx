import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Drop us a message or just say hello ☕🌸</p>
        
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-right">
        <h2>Brew & Bloom Café</h2>
        <p><strong>Address:</strong> 123 Vintage Street, CoffeeTown, 45678</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Opening Hours:</strong><br />
          Mon - Fri: 8am - 8pm<br />
          Sat - Sun: 9am - 10pm
        </p>

        <div className="map-container">
          <iframe 
            title="Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.008893545978!2d106.69538987499161!3d10.8066550893488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cc4e85bb61%3A0x41a5e2fc6fbaf0a7!2sCafe!5e0!3m2!1sen!2sin!4v1614372280128!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
