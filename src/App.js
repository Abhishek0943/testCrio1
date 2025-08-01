import React, { useState } from "react";
import "./styles.css";

function Modal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    DOB: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length < 10 || formData.phone.length > 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
    }
    const today = new Date();
    const inputDate = new Date(formData.DOB);
    if (inputDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }
    setFormData({
      username: "",
      email: "",
      phone: "",
      DOB: "",
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">
          <h2>User Details Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Email Address:
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                id="dob"
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`App ${isModalOpen ? "modal-open" : ""}`}>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>Open Form</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
