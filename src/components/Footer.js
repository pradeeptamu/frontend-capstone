import React from "react";
import footer_logo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="footer-logo">
          <img src={footer_logo} />
        </div>
        <div className="footer-navigation">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-navigation">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-navigation">
          <h3>Connect</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
