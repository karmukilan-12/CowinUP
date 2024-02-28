import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SlotReg.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from 'emailjs-com';

const generateBookingId = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8;
  let bookingId = '';
  for (let i = 0; i < length; i++) {
    bookingId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return bookingId;
};

const SlotReg = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const generatedBookingId = generateBookingId();
    setBookingId(generatedBookingId);

    const templateParams = {
      fullName,
      to_email: email, 
      phoneNumber,
      bookingId: generatedBookingId 
    };

    emailjs.send('service_2vew3pp', 'template_uv9kuj3', templateParams, 'wVxsaoy6floevbvOs')
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Email sent successfully');
      setIsFormSubmitted(true);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('An error occurred while sending email');
    });

    setFullName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <>
    <Navbar />
    <div className="vaccination-container">
      <br />
      <h1 className='fancy'>COVID Vaccination Slot Booking</h1>
      {isFormSubmitted ? (
        <div className="confirmation-message">
          <p>Your vaccination slot has been confirmed!</p>
          <p>Details have been sent to your email.</p>
          <p>Booking ID: {bookingId}</p>
          <Link to="/" className="Btn">
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="text">Go to Home</div>
          </Link>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <button className="cssbuttons-io-button"> Book Now
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </form>
      )}
    </div>
    <Footer />
  </>  
  );
}

export default SlotReg;
