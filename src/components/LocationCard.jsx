import React, { useState } from "react";
import "../styles/LocationCard.css";

function LocationCard({
  name,
  location,
  capacity,
  services,
  phone,
  mainImage,
  images = []
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const limitedImages = images.slice(0, 16);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === limitedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? limitedImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="location-card">
        <div className="location-image">
          {mainImage ? (
            <img
              src={mainImage}
              alt={name}
              className="location-main-image"
              onClick={() => {
                setCurrentIndex(0);
                setIsOpen(true);
              }}
            />
          ) : (
            <div className="location-placeholder">
              Sin imagen
            </div>
          )}
        </div>


        <div className="location-content">
          <h4>{name}</h4>
          {/* <p><strong>Ubicación:</strong> {location}</p>
          <p><strong>Capacidad:</strong> {capacity}</p>
          <p><strong>Servicios:</strong> {services}</p> */}
          <p><strong>Teléfono:</strong> {phone}</p>

          {limitedImages.length > 0 && (
            <button
              className="slider-btn"
              onClick={() => {
                setCurrentIndex(0);
                setIsOpen(true);
              }}
            >
              Ver imágenes
            </button>

          )}
        </div>
      </div>


      {isOpen && (
        <div className="fullscreen-modal">
          <button
            className="close-btn"
            onClick={() => {
              setIsOpen(false);
              setCurrentIndex(0);
            }}
          >
            ✕
          </button>


          <button className="nav left" onClick={prevSlide}>❮</button>

          <img
            src={limitedImages[currentIndex]}
            alt="fullscreen"
            className="fullscreen-image"
          />

          <button className="nav right" onClick={nextSlide}>❯</button>

          <div className="modal-indicator">
            {currentIndex + 1} / {limitedImages.length}
          </div>
        </div>
      )}
    </>
  );
}

export default LocationCard;
