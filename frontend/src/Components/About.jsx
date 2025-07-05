import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero-text">
          <h1>Our Story</h1>
          <p>
            Welcome to <span className="highlight">Brew & Bloom</span> — where timeless coffee traditions meet the beauty of a serene floral café.
            We’re passionate about creating a cozy space where every sip feels like home.
          </p>
        </div>
        <div className="about-hero-image">
          <img src="/imgs/about.jpg" alt="Cafe Interior" />
        </div>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Brew & Bloom, we blend craftsmanship, love, and nature into every cup.
          Our goal is to inspire peaceful moments through the art of coffee and the charm of floral designs.
        </p>
      </div>

      <div className="about-founder">
        <h2>Founder's Note</h2>
        <p>
          "We believe that coffee is not just a drink, but a feeling — a connection to memories, laughter, and dreams.
          Brew & Bloom is our way of sharing that story with you."
        </p>
      </div>
    </div>
  )
}

export default About
