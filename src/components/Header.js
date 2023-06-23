import React from "react";
import restaurent from "../assets/image1.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>London</h3>
          <p>
            Embrace the Essence of the Asian Cusine in the Heart of London, with
            Time-Honored Recipes Given a Modern London Twist!
          </p>
          <Link to="/Booking">
            <button aria-label="On Click">Reserve a table</button>
          </Link>
        </div>
        <div>
          <img src={restaurent} />
        </div>
      </section>
    </header>
  );
};

export default Header;
