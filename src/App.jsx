import React, { useEffect } from 'react';
import DomeGallery from './DomeGallery';
import './styles.css'; 

export default function App() {

  // Script para ocultar/mostrar el header según el scroll de secciones
  useEffect(() => {
    let lastScroll = 0;
    const header = document.querySelector("header");
    if (!header) return;

    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        header.classList.remove("header-hidden");
        return;
      }

      if (currentScroll > lastScroll) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const misFotos = [
    { src: '/img/1.png', alt: 'Callcita' },
    { src: '/img/2.png', alt: 'Caballiting' },
    { src: '/img/3.png', alt: 'Paisaje' },
    { src: '/img/4.png', alt: 'Samuraa' },
    { src: '/img/4B692DF2-15E2-4816-92CC-7243C14369C6.png', alt: 'Cocodrilodante' },
    { src: '/img/5.png', alt: 'Peinadoo' },
    { src: '/img/5F219727-7254-4251-A071-78A8D4E850BA.png', alt: 'Muah' },
    { src: '/img/6.png', alt: 'Calveada' },
    { src: '/img/6A149521-AECF-4E6C-947F-E49DE09CB86D.png', alt: 'Primera partida de fornite' },
    { src: '/img/7.jpeg', alt: 'La foto que me encanta' },
    { src: '/img/8.png', alt: 'Discooo' },
    { src: '/img/9.png', alt: 'Aeroviaaa' },
    { src: '/img/10.png', alt: 'Samura asesina' },
    { src: '/img/11.png', alt: 'Primera vez jugando maincra' },
    { src: '/img/13.png', alt: 'Tiesos' },
    { src: '/img/16.png', alt: 'Fachitass' },
    { src: '/img/15.png', alt: 'Chiken?' },
    { src: '/img/20.png', alt: 'New YOOOOOOOORK' },
    { src: '/img/98EB34E4-A60B-44BD-A0D1-58C2F4ECEB37.png', alt: 'Patooos' },
    { src: '/img/40592F10-EEB9-443B-BCA5-984C37D136EE.png', alt: 'Monitos?' },
  ];

  return (
    <>
      <header>
        <nav>
          <div className="logo">💕 Samura y Karsl</div>
          <ul className="nav-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#fotos">Fotos</a></li>
            <li><a href="#propuesta">Propuesta</a></li>
          </ul>
        </nav>
      </header>

      {/* SECCIÓN 1: INICIO */}
      <section id="hero">
        <h1 className="hidden">Nuestra historia comienza aquí</h1>
        <p className="hidden">Gracias por estar a mi lado</p>
        <a href="#fotos" className="cta-button">Explorar</a>
      </section>

      {/* SECCIÓN 2: FOTOS */}
      <section id="fotos">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <DomeGallery grayscale={false} images={misFotos} />
        </div>
      </section>

      {/* SECCIÓN 3: PROPUESTA */}
      <section id="propuesta">
        <div className="propuesta-contenido hidden">
          <h2>Te amoooooooooo muchisissimo y lo hice con mucho cariño y quiero saber si</h2>
          <p>¿Puedo ser tu novio?</p>
        </div>
      </section>
    </>
  ); 
}
