import React, { useState } from 'react';
import { Content, Logo, Menu, Image, Nav, Language, Bar } from './Styles';
import Button from '../../../styles/Button';

function Header() {
  const [bar, setBar] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN

  return (
    <Content bar={bar}>
      <Logo id="home">
        <Image src="../../../../public/LogoIZT.svg" alt="Logo" />
        <h1>iZT Core</h1>
      </Logo>
      <Menu>
        <Nav bar={bar}>
          <a href="#produto">Produtos</a>
          <a href="#servicos">Cursos</a>
          <a href="#software">Software</a>
          <Button href="#login" fontSize="20px">
            Entrar
          </Button>
          <Language
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="DE">DE</option>
            <option value="EN">EN</option>
            <option value="PT">PT</option>
          </Language>
        </Nav>
        <div className="shadow" />
        <Bar bar={bar} onClick={() => setBar(!bar)}>
          <span className="active" />
        </Bar>
      </Menu>
    </Content>
  );
}

export default Header;
