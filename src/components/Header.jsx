import React from 'react';
import logo from '../assets/catalumari_lateral.png'; 

function Header() {
  return (
    <header>
      <div className="logo-area"> 
        <img src={logo} alt="Logo do cabeçalho" />
      </div>
      <div>
        <nav>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre</a></li>
            
            <li className="has-dropdown">
              <a href="/espetaculos">Espetáculos</a>
              <div className="dropdown">
                <a href="/espetaculos/tatu-do-bem">Tatu-do-Bem</a>
              </div>
            </li>
            
            <li className="has-dropdown">
              <a href="/grupo">Grupo</a>
              <div className="dropdown">
                <a href="/grupo/alice-boa-hora">Alice Bôa Hora</a>
                <a href="/grupo/alvaro-de-farias">Álvaro de Farias</a>
                {/* Adicione os outros membros aqui */}
              </div>
            </li>
            
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;