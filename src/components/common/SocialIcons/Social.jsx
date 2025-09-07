import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Social.css";

export default function SocialIcons() {
  return (
    <div className="nav-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/share/g/1CdqH4cikU/" target="_blank" rel="noopener noreferrer" className="button">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/+201279547848" target="_blank" rel="noopener noreferrer" className="button">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/amany_ghallab/" target="_blank" rel="noopener noreferrer" className="button">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@amanyghallab655?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="button">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}
