import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gifts Card</li>
              <li>Term of uses</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privecy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">&copy;1997-2024 Netflix Inc</div>
      </div>
    </div>
  );
};

export default Footer;
