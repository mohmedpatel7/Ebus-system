import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addBus } from "../../Redux/features/buses";
import { useNavigate } from "react-router-dom";

export default function AddBuses() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    busType: "",
    contactInfo: "",
    timeDate: "",
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
        const result = await dispatch(addBus(formData)).unwrap();
        if (result) {
          navigate("/");
          alert("Bus details added successfully..!");
        } else {
          alert("Bus adding failed!");
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
        {/* from Field */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="from"
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

        {/* busType Field */}
        <div className="form-floating mb-3">
          <select
            className="form-control"
            name="busType"
            value={formData.busType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select bustype
            </option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
            <option value="Sleeper">Sleeper</option>
            <option value="Seater">Seater</option>
          </select>
          <label htmlFor="floatingbusType">Bustype</label>
          <div className="invalid-feedback">Please provide a bustype.</div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="contactInfo"
            placeholder="contactinfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingcontactInfo">Contactinfo</label>
          <div className="invalid-feedback">Please enter contact info .</div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="datetime-local"
            className="form-control"
            name="timeDate"
            placeholder="Date"
            value={formData.timeDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="floatingcontactInfo">Date</label>
          <div className="invalid-feedback">Please enter Date.</div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Add
        </button>
      </form>
    </div>
  );
}
