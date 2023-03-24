import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
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
  Welcome,
  LogoutBtn,
  MenuProfile,
  Divider,
} from './Styles';
import useAuthStore from '../../../stores/auth';
import { useLogout } from '../../../hooks/query/sessions';
import { ERROR_CODES } from '../../../utils/constants';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bar, setBar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN
  const availableLaguages = ['EN', 'PT', 'DE'];
  const theme = useTheme();
  const { auth } = useAuthStore();
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const onSuccess = () => {
    if (isSmallScreen || location.pathname === '/perfil') navigate('/');
    setBar(false);
  };
  const onError = (error) => {
    switch (error.response.status) {
      case ERROR_CODES.BAD_REQUEST:
        console.log('Não há usuário logado'); // usar o toast
        break;
      default:
        break;
    }
  };
  const { mutate: logout } = useLogout({ onSuccess, onError });

  async function HandleLogout() {
    logout();
  }

  async function OnPressLogin() {
    navigate('/login');
    setBar(false);
  }

  return (
    <Content>
      <InternContainer>
        <Logo />
        <Menu>
          <Nav bar={bar} collapse={collapse}>
            <Link to="/catalogo" onClick={() => setBar(false)}>
              Produtos
            </Link>
            <Link to="/" onClick={() => setBar(false)}>
              Cursos
            </Link>
            <Link to="/" onClick={() => setBar(false)}>
              Software
            </Link>
            <InvertItems>
              {auth ? (
                <Welcome>
                  {isSmallScreen ? (
                    <MenuProfile>
                      <Link to="/perfil" onClick={() => setBar(false)}>
                        Meu Perfil <IoIosArrowDown />
                      </Link>
                      <Divider />
                      <LogoutBtn onClick={HandleLogout}>Deslogar</LogoutBtn>
                    </MenuProfile>
                  ) : (
                    <Link to="/perfil" onClick={() => setBar(false)}>
                      Olá, {auth.user?.name.split(' ')[0]}!
                    </Link>
                  )}
                  {!isSmallScreen && (
                    <LogoutBtn onClick={HandleLogout}>Deslogar</LogoutBtn>
                  )}
                </Welcome>
              ) : (
                <ButtonLogin
                  backgroundColor800={theme.colors.greenishBlue}
                  color800="white"
                  borderColor800={theme.colors.greenishBlue}
                  hoverBackgroundColor800={theme.colors.greenishBlue}
                  hoverColor800="white"
                  hoverBorderColor800={theme.colors.greenishBlue}
                  onClick={OnPressLogin}
                >
                  Entrar
                </ButtonLogin>
              )}

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
