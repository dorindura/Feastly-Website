import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h3 className="footer-header">Feastly</h3>
          <p>
            Welcome to Feastly, where delicious meals from
            your favorite local restaurants are just a click away! Our
            easy-to-use platform connects you with a wide variety of culinary
            delights, from gourmet dishes to comfort food, all delivered right
            to your doorstep. Enjoy fast, reliable service, and discover new
            flavors every day.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="/"></a>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>212-456-7890</li>
            <li>joshua-feastly@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
