import { useState, useEffect } from "react";
import React from "react";
import "../Components/Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://pngimg.com/uploads/netflix/netflix_PNG23.png"
        alt="netflix-logo"
        className="nav-logo"
      />
      <img
        src=" https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="account-logo"
        className="account-logo"
      />
    </div>
  );
}

export default Navbar;
