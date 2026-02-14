import React from 'react';
import '../styles/PersonCard.css';
import { FaInstagram, FaTiktok } from "react-icons/fa";

const PersonCard = ({ name, description, emoji, image, tiktok, instagram }) => {
  return (
    <div className="card person-card">

      <div className="person-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span>{emoji}</span>
        )}
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <div className="social-links">
        {tiktok && (
          <a
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
            className="social-icon tiktok"
          >
            <FaTiktok size={28} />
          </a>
        )}

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="social-icon instagram"
          >
            <FaInstagram size={28} />
          </a>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
