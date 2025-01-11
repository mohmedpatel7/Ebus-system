import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AdminSignin } from "../../Redux/features/authentication";

export default function Signin() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [validated, setValidated] = useState(false); // State to track form validation.

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        const result = await dispatch(AdminSignin(formData)).unwrap();
        if (result) {
          navigate("/");
          alert("Admin singin..");
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        alert(error.message);
      }
    }

    setValidated(true);
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In for Admin</h2>
      <form
        className={`needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
        onSubmit={handleSubmit}
      >
        {/* id Field */}
        <div className="form-floating mb-3">
          <input
            type="id"
            className="form-control"
            name="id"
            placeholder="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingid">Amdin Id</label>
          <div className="invalid-feedback">Please provide a valid id.</div>
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
          <div className="invalid-feedback">
            Please provide a valid password.
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
    </div>
  );
}
