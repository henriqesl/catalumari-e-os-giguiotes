import React, { useEffect } from 'react';

function Particles() {
  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    const createParticles = () => {
      
        particlesContainer.innerHTML = '';
      const numberOfParticles = window.innerWidth < 768 ? 30 : 60;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDelay = Math.random() * 15 + 's';
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = duration + 's';
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    window.addEventListener('resize', createParticles);

    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []); 

  return <div className="particles"></div>;
}

export default Particles;