import React from 'react';

function Grupo() {
  // Array com os 11 integrantes (dados de exemplo - você pode substituir pelos dados reais)
  const integrantes = [
    {
      id: 1,
      nome: "Alice Bôa Hora",
      funcoes: "Atriz, Diretora, Dramaturga",
      foto: "/images/alice-boa-hora.jpg" // placeholder
    },
    {
      id: 2,
      nome: "Álvaro de Farias",
      funcoes: "Ator, Dramaturgo",
      foto: "/images/alvaro-farias.jpg"
    },
    {
      id: 3,
      nome: "Gio Miranda",
      funcoes: "Ator, Cenógrafa, Iluminista",
      foto: "/images/gio-miranda.jpg"
    },
    {
      id: 4,
      nome: "Guilherme Mergulhão",
      funcoes: "Ator, Figurinista",
      foto: "/images/guilher-mergulhão.jpg"
    },
    {
      id: 5,
      nome: "Isabela Almeida",
      funcoes: "Músico, Sonoplasta",
      foto: "/images/isabela-almeida.jpg"
    },
    {
      id: 6,
      nome: "Letícia Penna",
      funcoes: "Atriz, Maquiadora",
      foto: "/images/leticia-penna.jpg"
    },
    {
      id: 7,
      nome: "Lucas Carvalho",
      funcoes: "Ator, Cenógrafo",
      foto: "/images/Lucas Carvalho.jpg"
    },
    {
      id: 8,
      nome: "Lucas Vinícius",
      funcoes: "Diretor de Arte",
      foto: "/images/lucas-vinicius.jpg"
    },
    {
      id: 9,
      nome: "Mari Azevedo",
      funcoes: "Atriz, Figurinista",
      foto: "/images/mari-azevedo.jpg"
    },
    {
      id: 10,
      nome: "Ruana Toledo",
      funcoes: "Atriz, Assistente de Direção",
      foto: "/images/ruana-toledo.jpg"
    },
    {
      id: 11,
      nome: "Thayna Sena",
      funcoes: "Técnico de Som e Luz",
      foto: "/images/thayna-sena.jpg"
    }
  ];

  // Dividir os integrantes em grupos: 4, 4, 3
  const primeiraLinha = integrantes.slice(0, 4);
  const segundaLinha = integrantes.slice(4, 8);
  const terceiraLinha = integrantes.slice(8, 11);

  const IntegranteCard = ({ integrante }) => (
    <div className="integrante-card">
      <div className="foto-container">
        <div className="foto-placeholder">
          <span className="inicial">{integrante.nome.charAt(0)}</span>
        </div>
      </div>
      <div className="info-integrante">
        <h3 className="nome">{integrante.nome}</h3>
        <p className="funcoes">{integrante.funcoes}</p>
      </div>
    </div>
  );

  return (
    <div className="grupo-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <p className="subtitulo">Conheça os artistas que dão vida ao Catalumari e os Giguiotes</p>
        </div>
      </section>

      {/* Grid de Integrantes */}
      <section className="integrantes-section">
        <div className="container">
          
          {/* Primeira linha - 4 integrantes */}
          <div className="integrantes-linha linha-4">
            {primeiraLinha.map((integrante) => (
              <IntegranteCard key={integrante.id} integrante={integrante} />
            ))}
          </div>

          {/* Segunda linha - 4 integrantes */}
          <div className="integrantes-linha linha-4">
            {segundaLinha.map((integrante) => (
              <IntegranteCard key={integrante.id} integrante={integrante} />
            ))}
          </div>

          {/* Terceira linha - 3 integrantes */}
          <div className="integrantes-linha linha-3">
            {terceiraLinha.map((integrante) => (
              <IntegranteCard key={integrante.id} integrante={integrante} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Grupo;