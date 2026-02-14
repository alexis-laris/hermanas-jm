import React, { memo } from 'react';
import '../styles/YouTubeCard.css';
import { FaInstagram, FaTiktok } from "react-icons/fa";

const YOUTUBE_CHANNEL = "HermanasJM";
const YOUTUBE_URL = `https://www.youtube.com/@${YOUTUBE_CHANNEL}`;

const YouTubeCard = () => {
  return (
    <div className="card youtube-card">
      <h3>Nuestro Canal</h3>

      <div className="person-card">
        <div className="person-image">
          <img
            src="/images/persons/main.jpg"
            alt="Hermanas JM"
            loading="lazy"
          />
        </div>
      </div>

      <p>
        Videos: Martes, Viernes, Sábado y Domingo
      </p>

      <p>
        7:00 PM
      </p>


      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        ¡Suscríbete! 🔔
      </a>

      <div className="social-links">
        <a
          href="https://www.tiktok.com/@odalysanddafnne?lang=es"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
          className="social-icon tiktok"
        >
          <FaTiktok size={28} />
        </a>

        <a
          href="https://www.instagram.com/odalysanddafnne/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="social-icon instagram"
        >
          <FaInstagram size={28} />
        </a>
      </div>
    </div>
  );
};

export default memo(YouTubeCard);
