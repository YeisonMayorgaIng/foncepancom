import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const isMobileDevice = () => {
  return (
    (typeof window !== 'undefined' && window.orientation !== undefined) ||
    (typeof navigator !== 'undefined' &&
      navigator.userAgent.indexOf('IEMobile') !== -1)
  );
};

const MakeOwnCake = () => {
  const isMobile = isMobileDevice();
  let whastApp = null;
  if (isMobile) {
    whastApp =
      'https://api.whatsapp.com/send?phone=3166220000&text=Hola%20😀%0AEstoy%20interesado%20en%20pedir%20una%20torta%20con%20diseño%20exclusivo!%20🎂%0AEnvío%20una%20foto%20de%20cómo%20me%20gustaría%20😍';
  } else {
    whastApp =
      'https://web.whatsapp.com/send?phone=3166220000&text=Hola%20😀%0AEstoy%20interesado%20en%20pedir%20una%20torta%20con%20diseño%20exclusivo!%20🎂%0AEnvío%20una%20foto%20de%20cómo%20me%20gustaría%20😍';
  }

  return (
    <div className="container d-flex mt-5 text-center mx-auto">
      <Image
        className="image-section"
        width={500}
        height={500}
        src="/images/categories/personalizedcake.png"
        alt="Make Own Cake"
      />
      <div className="text-section">
        <h1>Un pastel personalizado hace que ese momento sea más especial.</h1>
        <h4>¿Por qué no sorprender a esa persona hoy mismo?</h4>
        <h4>Diseñalo con nosotros.</h4>
        <hr />
        <Link href={whastApp}>
          <a target="_blank" rel="noopener noreferrer">
            <button>Contáctanos</button>
          </a>
        </Link>
      </div>

      <style>{`
        .container {
          height: 100%;
          background: wheat;
          padding: 1rem !important;
          max-width: 100%;
          display:flex;
          justify-content:center;
          margin-bottom:2rem;
        }

        .image-section{
          
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          border-radius:15px;
        }

        .text-section {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          padding: 3.5rem;
        }
        .text-section > h1 {
          color: #229c2b;
          padding: 1rem;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-shadow: 0 0;
          direction: ltr;
          padding: 1rem;
          font-size: 2rem;
        }

        h4 {
          color: black;
          fontweight: 400;
        }

        button {
          display: inline-block;
          fontweight: 600;
          padding: 0.7em;
          background-color: black;
          color: white;
          border-radius: 0.5rem;
          font-size: 1.2rem;
          -moz-letter-spacing: 1px;
          -webkit-letter-spacing: 1px;
          letter-spacing: 1px;
          -ms-letter-spacing: 1px;
          margin-top: 1em;
          text-transform: uppercase;
          width: 15rem;
        }

        @media (max-width: 425px) {
          .text-section {
            padding: 1rem;
          }
          .text-section > h1 {
            font-size: 1.2rem !important;
          }
          .text-section > h4 {
            font-size: 1rem !important;
          }
          button {
            width: 9rem;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .image-section {
            width: 100%;
          }

          .text-section {
            width: 100%;
          }

          .text-section > h1 {
            font-size: 1.5 rem;
          }
          .text-section > h4 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MakeOwnCake;
