import React from 'react';
import mainLogo from '../assets/logo_catalumari_web.png';

function Home() {
  
  return (
    <section id="inicio">
      <div className="container">
        <img src={mainLogo} alt="Logo Catalumari e os Giguiotes" />
      </div>
    </section>
  );
}

export default Home;