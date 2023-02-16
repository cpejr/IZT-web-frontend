import React, { useState } from 'react';
import styled from 'styled-components';
import { Content, Logo, Image, Nav, Language, Bar, Login } from './Styles';

function Header() {
  const [bar, setBar] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Content bar={bar}>
      <Logo id="home">
        <Image src="../../../../public/LogoIZT.svg" alt="Logo" />
        <h1>iZT Core</h1>
      </Logo>
      <Nav bar={bar}>
        <a href="#produto">Produtos</a>
        <a href="#servicos">Cursos</a>
        <a href="#software">Software</a>
        <Login href="#entar">Entrar</Login>
      </Nav>
      <Language>
        <a href="#lg" onClick={() => handleLanguageChange('PT')}>
          PT
        </a>
        <a href="#lg" onClick={() => handleLanguageChange('EN')}>
          EN
        </a>
        <a href="#lg" onClick={() => handleLanguageChange('ES')}>
          ES
        </a>
        <span>{language}</span>
      </Language>
      <div className="shadow" />
      <Bar bar={bar} onClick={() => setBar(!bar)}>
        <span className="active" />
      </Bar>
    </Content>
  );
}

export default Header;
