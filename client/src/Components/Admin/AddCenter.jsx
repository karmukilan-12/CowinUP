import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./AddCenter.css"; 

const AddCenter = () => {
  const [book, setBook] = useState({
    center: "",
    address: "",
    slots: "",
    issue_date: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://cowinup.onrender.com/vaccine", book);
      navigate("/center");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="add-books-form">
      <h1 className="form-title">Add New Center</h1>
      <input
        type="text"
        placeholder="Center Name"
        name="center"
        value={book.center}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={book.address}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Slots"
        name="slots"
        value={book.slots}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Issue date"
        name="issue_date"
        value={book.issue_date}
        onChange={handleChange}
        className="input-field"
      />
      <button onClick={handleClick} className="add-btn">
        Add
      </button>
      {error && <p className="error-msg">Something went wrong!</p>}
      <Link to="/center" className="see-all-books">
        See all centers
      </Link>
    </div>
  );
};

export default AddCenter;
