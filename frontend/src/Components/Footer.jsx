import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // importing icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3 style={styles.logo}>Brew & Bloom ☕🌸</h3>
        <p style={styles.text}>© {new Date().getFullYear()} Brew & Bloom. All rights reserved.</p>
        <div style={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#5C4033',
    color: '#fff',
    padding: '30px 0',
    marginTop: '50px',
    textAlign: 'center'
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto'
  },
  logo: {
    fontSize: '30px',
    marginBottom: '15px',
    fontFamily: "'Porao Grotesque', sans-serif"
  },
  text: {
    fontSize: '14px',
    marginBottom: '15px'
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
  },
  icon: {
    color: '#fff',
    fontSize: '24px',
    transition: 'color 0.3s ease',
    textDecoration: 'none'
  }
};

export default Footer;
