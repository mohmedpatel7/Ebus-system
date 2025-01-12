import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import {} from "../../Redux/features/";
import { useNavigate } from "react-router-dom";

export default function AddBuses() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    Bustype: "",
    contact: "",
    date: "",
  });

  const [validated, setValidated] = useState(false); // For Bootstrap validation

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
        const result = await dispatch(userSignup(formData)).unwrap();
        if (result) {
          navigate("/");
          alert("Signup successful!");
        } else {
          alert("Signup failed!");
        }
      } catch (error) {
        alert(error.message);
      }
    }

    setValidated(true); // Mark the form as validated.
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Add Bus Details</h2>
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
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingName">From</label>
          <div className="invalid-feedback">Please provide from.</div>
        </div>

        {/* to Field */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingto">To</label>
          <div className="invalid-feedback">Please provide a valid to.</div>
        </div>

        {/* Bustype Field */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="Bustype"
            placeholder="Bustype"
            value={formData.Bustype}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingBustype">Bustype</label>
          <div className="invalid-feedback">Please provide a Bustype.</div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingcontact">Contact</label>
          <div className="invalid-feedback">Please enter contact info.</div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingcontact">Date</label>
          <div className="invalid-feedback">Please enter Date.</div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}
