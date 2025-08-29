// src/components/Header.js 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/catalumari_lateral.png';

function Header() {


  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header>
      <div className="logo-area">
        <Link to="/">
          <img src={logo} alt="Logo do cabeçalho" />
        </Link>
      </div>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>

            <li className="has-dropdown">
              <Link to="/espetaculos">Espetáculos</Link>
              <div className="dropdown">
                <Link to="/espetaculos/tatu-do-bem">Tatu-do-Bem</Link>
              </div>
            </li>

            <li className="has-dropdown">
              <Link to="/grupo">Grupo</Link>
              <div className="dropdown">
                <Link to="/grupo/alice-boa-hora">Alice Bôa Hora</Link>
                <Link to="/grupo/alvaro-de-farias">Álvaro de Farias</Link>
              </div>
            </li>

            <li>
              <a href="#contato" onClick={handleScrollToContact}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;