import React from 'react';

function Espetaculos() {
  const espetaculoAtual = {
    titulo: "Tatu-do-Bem",
    sinopse: "Um espetáculo infantil que celebra a natureza e a amizade através de uma narrativa lúdica e envolvente, onde personagens mágicos conduzem o público em uma jornada de descobertas e aprendizados.",
    anoEstreia: 2023,
    imagem: "/images/tatu-do-bem-poster.jpg"
  };

  return (
    <div className="espetaculos">
      <div className="container">
        {/* Header */}
        <section className="page-header">
          <h1 className="fade-in">Espetáculos</h1>
        </section>

        {/* Showcase de Espetáculos */}
        <section className="espetaculo-showcase">
          <div className="showcase-grid">

            {/* Card 1: Tatu-do-Bem */}
            <div className="poster-container fade-in-delay-1">
              <div className="poster-placeholder">
                <div className="poster-content">
                  <img src="" alt="Tatu-do-bem_poster" />
                </div>
              </div>
            </div>

            {/* Card 2: Em Produção/Em Cartaz */}
            <div className="poster-container fade-in-delay-2">
              <div className="poster-placeholder in-production">
                <div className="poster-content">
                  <div className="poster-visual">🎟️</div>
                  <h2>A Lenda do Girassol</h2>
                  <span className="status">Em Cartaz</span>
                  <span className="ano">2024</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Sinopse */}
          <div className="sinopse-container fade-in-delay-3">
            <p className="sinopse-texto">
              {espetaculoAtual.sinopse}
            </p>
          </div>
        </section>
      </div>

      {/* Seção "Em processo" */}
      <section className="em-processo fade-in-delay-4">
        <div className="container">
          <div className="processo-content">
            <div className="processo-visual">
              <div className="processo-icon">✨</div>
            </div>
            <h3>Em processo de criação</h3>
            <p>Novos espetáculos estão sendo desenvolvidos em nosso laboratório criativo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Espetaculos;