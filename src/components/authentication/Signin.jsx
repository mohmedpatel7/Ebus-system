import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import { userSignin } from "../../Redux/features/authentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validated, setValidated] = useState(false); // State for Bootstrap validation.

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const result = await dispatch(userSignin(formData)).unwrap();
        if (result) {
          navigate("/");
          alert("Signin successfully.");
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        alert(error.message);
      }
    }

    setValidated(true); // Mark the form as validated to display feedback.
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In to Your Account</h2>
      <form
        onSubmit={handleSubmit}
        className={`needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
      >
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
          <div className="invalid-feedback">Please enter a valid email.</div>
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
          <div className="invalid-feedback">Please provide your password.</div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
    </div>
  );
}
