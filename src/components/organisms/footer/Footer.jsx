import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Company Info</h4>
          <Link to="/about">About Us</Link>
          <Link to="/career">Carrier</Link>
          <Link to="/hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link to="/about">About Us</Link>
          <Link to="/career">Carrier</Link>
          <Link to="/hiring">We are hiring</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-column">
          <h4>Features</h4>
          <Link to="/features/marketing">Business Marketing</Link>
          <Link to="/features/analytics">User Analytic</Link>
          <Link to="/features/chat">Live Chat</Link>
          <Link to="/features/support">Unlimited Support</Link>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <Link to="/ios-android">IOS & Android</Link>
          <Link to="/demo">Watch a Demo</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/api">API</Link>
        </div>

        <div className="footer-column contact">
          <h4>Get In Touch</h4>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>(480) 555-0103</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>
              4517 Washington Ave. Manchester, Kentucky 39495
            </span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>debra.holt@example.com</span>
          </div>
        </div>
      </div>

      <div className="footerB">
            <div className="footer-bottom">
        <p>Made With Love By Figmaland All Right Reserved</p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
      </div>

  
    </footer>
  );
};

export default Footer;
