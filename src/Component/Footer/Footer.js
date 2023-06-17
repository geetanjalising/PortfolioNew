import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
        <h1>Find me on:</h1>
      <div className="footer-container">
    
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ marginRight: "1rem" }} />
            <div>
              <p>Gorakhpur, Uttar Pradesh</p>
              <p>273014</p>
            </div>
          </div>
          <div className="phone">
            <h4>
             <FaPhone size={20} style={{ marginRight: "1rem" }} />
         
            </h4>   <p>+91 6392865744</p>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ marginRight: "1rem" }} />
             </h4> <p>geetanjalisingh1815@gmail.com</p>
            
          </div>
        </div>
        <div className="right">
        <div className="telegram">
            <h4>
              <FaTelegramPlane size={20} style={{ marginRight: "1rem" }} />
               </h4>  <p>+91 6392865744</p>
         
          </div>
        <div className="whatsapp">
            <h4>
              <FaWhatsapp size={20} style={{ marginRight: "1rem" }} />
            </h4>  <p>6392865744</p>
            
          </div>
          <div className="instagram">
            <h4>
              <FaInstagram size={20} style={{ marginRight: "1rem" }} />
            </h4><p>geetanjali1815</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
