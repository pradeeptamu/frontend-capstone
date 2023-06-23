import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const display = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  const [bookingDetails, setBookingDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const bookingData = localStorage.getItem("formValues");
    const userData = localStorage.getItem("userInfo");

    setBookingDetails(JSON.parse(bookingData));
    setUserDetails(JSON.parse(userData));
  }, []);

  const cancelReservation = () => {
    localStorage.removeItem("formValues");
    localStorage.removeItem("userInfo");
    navigate("/booking");
  };

  return (
    <header>
      <section style={display}>
        <h1 style={{ textAlign: "center" }}>
          Thank you for your booking request
        </h1>
        <hr />
        {userDetails && (
          <div className="booking-details">
            <p>
              Name:
              {userDetails.firstName} {userDetails.lastName}
            </p>
            <p>
              Email:
              {userDetails.email}
            </p>
            <p>
              Phone:
              {userDetails.phone}
            </p>
            <p>
              Special Request:
              {userDetails.specialRequest}
            </p>
          </div>
        )}

        {bookingDetails && (
          <div className="booking-details">
            <p>Number of guests: {bookingDetails.numberOfDiners} people</p>
            <p>Date: {bookingDetails.date}</p>
            <p>
              Time:
              {bookingDetails.time}
            </p>
            <p>
              Occasion:
              {bookingDetails.occasion}
            </p>
            <p>
              Seating:
              {bookingDetails.seating}
            </p>
          </div>
        )}
        <hr />
        <div className="some-desc">
          <h4>
            We are processing your booking. Please check your email for a
            booking confirmation from the restaurent
          </h4>
          <p>
            (Please note, you should hear back within 5 hours. If you still
            haven't received a confirmation please contact our customer support
            team on 07865214521 )
          </p>
          <p>
            To cancel the booking click <a onClick={cancelReservation}>here</a>
          </p>
          <button>GET DIRECTION TO RESTAURENT</button>
        </div>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
