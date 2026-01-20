import React from 'react';


export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div className="loader-animation">
      <h1 className="text-center font-family-secondary">Your order is processing...</h1>
    </div>
  );
}
