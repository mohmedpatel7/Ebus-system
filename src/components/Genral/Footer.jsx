import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

export default function Footer() {
  return (
    <footer className="footer bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-brand">Ebus</h5>
            <p className="footer-description">
              Your trusted partner in bus transportation. Book tickets, view
              schedules, and enjoy seamless travel.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-contact">Email: support@ebus.com</p>
            <p className="footer-contact">Phone: +1-800-555-1234</p>
            <div className="footer-social">
              <a href="#" className="social-link me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Ebus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
