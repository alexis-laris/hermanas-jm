import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Header from './components/Header';
import PersonCard from './components/PersonCard.jsx';
import YouTubeCard from './components/YouTubeCard';
import LocationCard from './components/LocationCard';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer';
import FloatingStars from './components/FloatingStars.jsx';
import './styles/App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: 'Odalys JM',
      image: '/images/persons/odalys.jpg',
      description: '¡Hola! Soy la hermana mayor y me encanta crear contenido divertido para todos ustedes. Me apasiona cantar, bailar y hacer reír a la gente.',
      tiktok: 'https://www.tiktok.com/@odalys_jm?lang=es',
      instagram: 'https://www.instagram.com/odalysjm/?hl=es'
    },
    {
      name: 'Dafnne JM',
      image: '/images/persons/dafnne.jpg',
      description: '¡Hola amigos! Soy la hermana menor y me encanta jugar, explorar y aprender cosas nuevas. Juntas creamos el mejor contenido.',
      tiktok: 'https://www.tiktok.com/@dafnnejm?lang=es',
      instagram: 'https://www.instagram.com/dafnnejm/?hl=es'
    }
  ];


  const locations = [
    {
      name: 'Sucursal Diego Diaz',
      location: '',
      capacity: '',
      services: '',
      phone: '+52 81 8096 7066',
      mainImage: '/images/sucursal-diego-diaz/diego-diaz-1.jpg',
      images: [
        '/images/sucursal-diego-diaz/diego-diaz-1.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-2.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-3.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-4.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-5.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-6.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-7.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-8.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-9.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-10.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-11.jpg',
        '/images/sucursal-diego-diaz/diego-diaz-12.jpg',
      ]
    },
    {
      name: 'Sucursal Chapultepec',
      location: '',
      capacity: '',
      services: '',
      phone: '8123961921 o 8116700162',
      mainImage: '/images/sucursal-chapultepec/chapultepec-1.jpg',
      images: [
        '/images/sucursal-chapultepec/chapultepec-1.jpg',
        '/images/sucursal-chapultepec/chapultepec-2.jpg',
        '/images/sucursal-chapultepec/chapultepec-3.jpg',
        '/images/sucursal-chapultepec/chapultepec-4.jpg',
        '/images/sucursal-chapultepec/chapultepec-5.jpg',
        '/images/sucursal-chapultepec/chapultepec-6.jpg',
        '/images/sucursal-chapultepec/chapultepec-7.jpg',
        '/images/sucursal-chapultepec/chapultepec-8.jpg',
        '/images/sucursal-chapultepec/chapultepec-9.jpg',
        '/images/sucursal-chapultepec/chapultepec-10.jpg',
        '/images/sucursal-chapultepec/chapultepec-11.jpg',
        '/images/sucursal-chapultepec/chapultepec-12.jpg',
        '/images/sucursal-chapultepec/chapultepec-13.jpg',
        '/images/sucursal-chapultepec/chapultepec-14.jpg',
        '/images/sucursal-chapultepec/chapultepec-15.jpg',
        '/images/sucursal-chapultepec/chapultepec-16.jpg',
      ]
    },
    {
      name: 'Sucursal Escobedo',
      location: '📍Las Plazas Outlet en Escobedo - Acceso 3',
      capacity: '',
      services: '',
      phone: '+52 81 8096 7066',
      mainImage: '/images/sucursal-escobedo/escobedo-1.jpg',
      images: [
        '/images/sucursal-escobedo/escobedo-1.jpg',
        '/images/sucursal-escobedo/escobedo-2.jpg',
        '/images/sucursal-escobedo/escobedo-3.jpg',
        '/images/sucursal-escobedo/escobedo-4.jpg',
        '/images/sucursal-escobedo/escobedo-5.jpg',
        '/images/sucursal-escobedo/escobedo-6.jpg',
        '/images/sucursal-escobedo/escobedo-7.jpg',
        '/images/sucursal-escobedo/escobedo-8.jpg',
        '/images/sucursal-escobedo/escobedo-9.jpg',
        '/images/sucursal-escobedo/escobedo-10.jpg',
        '/images/sucursal-escobedo/escobedo-11.jpg',
        '/images/sucursal-escobedo/escobedo-12.jpg',
        '/images/sucursal-escobedo/escobedo-13.jpg',
      ]
    },
  ];



  return (
    <div className="App">
      {showWelcome && <WelcomeScreen />}

      <FloatingStars />

      <div className="main-content">
        <Header />


        <h2 className="section-title">💕 Redes Oficiales 💕</h2>
        <div className="team-container">
          <PersonCard {...teamMembers[0]} />
          <YouTubeCard />
          <PersonCard {...teamMembers[1]} />
        </div>


        <h2 className="section-title">📍 Nuestros Salones de Eventos 📍</h2>
        <div className="locations-container">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              {...location}
            />
          ))}
        </div>


        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
