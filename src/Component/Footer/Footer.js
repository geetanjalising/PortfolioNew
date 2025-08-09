import React, { useEffect, useRef } from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <div className="footer-item">
          <FaHome size={20} style={{ marginRight: "1rem" }} />
          <p>Gurgaon, Haryana, 122022</p>
        </div>
        <div className="footer-item">
          <FaPhone size={20} style={{ marginRight: "1rem" }} />
          <p>+91 6392865744</p>
        </div>
        <div className="footer-item">
          <FaMailBulk size={20} style={{ marginRight: "1rem" }} />
          <p>geetanjalisingh1815@gmail.com</p>
        </div>
      </div>
      <div className="right">
        <div className="footer-item">
          <FaTelegramPlane size={20} style={{ marginRight: "1rem" }} />
          <p>+91 6392865744</p>
        </div>
        <div className="footer-item">
          <FaWhatsapp size={20} style={{ marginRight: "1rem" }} />
          <p>6392865744</p>
        </div>
        <div className="footer-item">
          <FaInstagram size={20} style={{ marginRight: "1rem" }} />
          <p>geetanjali1815</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
