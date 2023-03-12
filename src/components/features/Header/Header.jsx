import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { Logo } from '../../common';
import {
  Content,
  Menu,
  Nav,
  Select,
  Selected,
  LanguageSelector,
  Bar,
  ButtonLogin,
  InternContainer,
  InvertItems,
} from './Styles';

function Header() {
  const navigate = useNavigate();
  const [bar, setBar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN
  const availableLaguages = ['EN', 'PT', 'DE'];
  const theme = useTheme();

  return (
    <Content>
      <InternContainer>
        <Logo />
        <Menu>
          <Nav bar={bar} collapse={collapse}>
            <Link to="/">Produtos</Link>
            <Link to="/">Cursos</Link>
            <Link to="/">Software</Link>
            <InvertItems>
              <ButtonLogin
                backgroundColor800={theme.colors.greenishBlue}
                color800="white"
                borderColor800={theme.colors.greenishBlue}
                hoverBackgroundColor800={theme.colors.greenishBlue}
                hoverColor800="white"
                hoverBorderColor800={theme.colors.greenishBlue}
                onClick={() => navigate('/')}
              >
                Entrar
              </ButtonLogin>

              <Select bar={bar}>
                <Selected onClick={() => setCollapse(!collapse)}>
                  <p>{language}</p>
                  <IoIosArrowDown />
                </Selected>
                <LanguageSelector collapse={+collapse}>
                  {availableLaguages.map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setCollapse(!collapse);
                      }}
                      collapse={+collapse}
                    >
                      {lang}
                    </button>
                  ))}
                </LanguageSelector>
              </Select>
            </InvertItems>
          </Nav>

          <Bar bar={bar} onClick={() => setBar(!bar)}>
            <span />
          </Bar>
        </Menu>
      </InternContainer>
    </Content>
  );
}

export default Header;
