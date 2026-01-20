import React from 'react';


export default function LoginAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div className="login-animation pt-20">
  
      <h2 className="login-animation__title text-center font-family-secondary">Logging in...</h2>
    </div>
  );
}
