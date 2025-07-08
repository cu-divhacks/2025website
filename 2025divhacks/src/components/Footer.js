import React from 'react';
import emailIcon from '../assets/email-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        id="footer-text"
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      >MLH Code of Conduct</a>
      <div className="footer-icons">
        <a href="mailto:cu.divhacks@gmail.com"><img id="contact-icon" src={emailIcon} alt="Contact Us" /></a>
        <a href="https://instagram.com/divhacks"><img id="contact-icon" src={instagramIcon} alt="Instagram" /></a>
        <a href="https://facebook.com/divhacks"><img id="contact-icon" src={facebookIcon} alt="Facebook" /></a>
        <a href="https://linkedin.com/company/divhacks"><img id="contact-icon" src={linkedinIcon} alt="Linkedin" /></a>
        <a href="https://twitter.com/divhacks"><img id="contact-icon" src={twitterIcon} alt="Twitter" /></a>
      </div>
    </footer>
  );
};

export default Footer; 