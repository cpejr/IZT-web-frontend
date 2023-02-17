import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/all';
import {
  Content,
  Logo,
  Menu,
  Image,
  Nav,
  Select,
  Selected,
  LanguageSelector,
  Bar,
  ButtonEntrar,
  InternContainer,
  InvertItems,
} from './Styles';
import { Colors } from '../../../variables';

function Header() {
  const [bar, setBar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN
  const availableLaguages = ['EN', 'PT', 'DE'];

  return (
    <Content>
      <InternContainer>
        <Logo id="home">
          <Image src="../../../../public/LogoIZT.svg" alt="Logo" />
          <h1>iZT Core</h1>
        </Logo>
        <Menu>
          <Nav bar={bar} collapse={collapse}>
            <a href="#produto">Produtos</a>
            <a href="#servicos">Cursos</a>
            <a href="#software">Software</a>
            <InvertItems>
              <ButtonEntrar
                href="#login"
                backgroundColor800={Colors.greenishBlue}
                color800="white"
                borderColor800={Colors.greenishBlue}
                hoverBackgroundColor800={Colors.greenishBlue}
                hoverColor800="white"
                hoverBorderColor800={Colors.greenishBlue}
              >
                Entrar
              </ButtonEntrar>
              <Select bar={bar}>
                <Selected onClick={() => setCollapse(!collapse)}>
                  <p>{language}</p>
                  <IoIosArrowDown />
                </Selected>
                <LanguageSelector collapse={collapse}>
                  {availableLaguages.map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setCollapse(!collapse);
                      }}
                      collapse={collapse}
                    >
                      {lang}
                    </button>
                  ))}
                </LanguageSelector>
              </Select>
            </InvertItems>
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
