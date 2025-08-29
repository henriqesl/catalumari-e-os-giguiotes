import React from 'react';

function Footer() {
  return (
    <footer id="contato">
      <p>&copy; 2025 Catalumari e os Giguiotes. Todos os direitos reservados.</p>
      <div className="contato"> 
        <p>Email: <a href="mailto:contato@catalumari.com">contato@catalumari.com</a></p>
        <p>
          Instagram: 
          <a 
            href="https://www.instagram.com/catalumarieosgiguiotes/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            @catalumarieosgiguiotes
          </a>
        </p>
        <p>Telefone: (81) 9 9999-9999</p>
      </div>
    </footer>
  );
}

export default Footer;