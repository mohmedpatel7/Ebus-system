import React from "react";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("admin_token");

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to eBus</h1>
          <p>
            Your trusted partner in bus transportation. Book tickets, view
            schedules, and enjoy seamless travel with us.
          </p>
          {isAdmin && isUser && (
            <button
              className="btn btn-light"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Get Started
            </button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-heading">Why Choose eBus?</h2>
          <div className="features">
            <div className="feature">
              <i className="fas fa-bus"></i>
              <h3>Reliable Service</h3>
              <p>Experience punctual and dependable bus transportation.</p>
            </div>
            <div className="feature">
              <i className="fas fa-ticket-alt"></i>
              <h3>Easy Ticket Booking</h3>
              <p>
                Book your tickets effortlessly with our user-friendly system.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Extensive Routes</h3>
              <p>Travel to various destinations with our wide network.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
