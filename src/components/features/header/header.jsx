import React, { useState } from 'react';
import {
  Content,
  Logo,
  Menu,
  Image,
  Nav,
  Language,
  Bar,
  ButtonEntrar,
  InternContainer,
} from './Styles';

function Header() {
  const [bar, setBar] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN

  return (
    <Content bar={bar}>
      <InternContainer>
        <Logo id="home">
          <Image src="../../../../public/LogoIZT.svg" alt="Logo" />
          <h1>iZT Core</h1>
        </Logo>
        <Menu>
          <Nav bar={bar}>
            <a href="#produto">Produtos</a>
            <a href="#servicos">Cursos</a>
            <a href="#software">Software</a>
            <ButtonEntrar href="#login">Entrar</ButtonEntrar>
            <Language
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="DE">DE</option>
              <option value="EN">EN</option>
              <option value="PT">PT</option>
            </Language>
          </Nav>
          <Bar bar={bar} onClick={() => setBar(!bar)}>
            <span className="active" />
          </Bar>
        </Menu>
      </InternContainer>
    </Content>
  );
}

export default Header;
