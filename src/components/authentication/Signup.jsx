import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validated, setValidated] = useState(false); // For Bootstrap validation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (
      form.checkValidity() === false ||
      formData.password !== formData.confirmPassword
    ) {
      e.stopPropagation();
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!"); // You can replace this with a custom message display.
      }
    } else {
      console.log("Form submitted successfully!", formData);
      // Proceed with form submission (e.g., API call).
    }

    setValidated(true); // Mark the form as validated.
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create an Account</h2>
      <form
        onSubmit={handleSubmit}
        className={`needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
      >
        {/* Name Field */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingName">Name</label>
          <div className="invalid-feedback">Please provide your name.</div>
        </div>

        {/* Email Field */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingEmail">Email</label>
          <div className="invalid-feedback">Please provide a valid email.</div>
        </div>

        {/* Password Field */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
          <div className="invalid-feedback">Please provide a password.</div>
        </div>

        {/* Confirm Password Field */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          <div className="invalid-feedback">Please confirm your password.</div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}
