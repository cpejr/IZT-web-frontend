import { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { useLogout } from '../../../hooks/query/sessions';
import useAuthStore from '../../../stores/auth';
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
  MyProfile,
} from './Styles';

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const { auth } = useAuthStore();

  const [bar, setBar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapseLogout, setCollapseLogout] = useState(false);
  const [language, setLanguage] = useState('EN'); // default language is EN
  const availableLaguages = ['EN', 'PT', 'DE'];

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      setBar(false);
      setCollapseLogout(false);
      if (isSmallScreen || location.pathname === '/perfil') navigate('/');
    },
    onError: () => {
      const errorMessage =
        'Ocorreu um erro ao realizar o logout. Tente novamente mais tarde';

      // Do something to the errorMessage
      alert(errorMessage);
    },
  });

  const handleProfileBtn = () => {
    setBar(false);
    setCollapseLogout(false);
    navigate('/perfil');
  };

  const welcomeSection = () => {
    if (isSmallScreen)
      return (
        <MenuProfile collapse={collapseLogout} bar={bar}>
          <MyProfile>
            <button type="button" onClick={handleProfileBtn}>
              Meu Perfil
            </button>{' '}
            <IoIosArrowDown
              color="white"
              onClick={() => setCollapseLogout(!collapseLogout)}
            />
          </MyProfile>
          <Divider collapse={collapseLogout && bar} />
          <LogoutBtn onClick={logout} collapse={collapseLogout && bar}>
            Deslogar
          </LogoutBtn>
        </MenuProfile>
      );

    const firstName = auth?.user?.name?.split(' ')?.[0];
    const nameLengthLimit = 10;

    const isLessThanEqualLimit = firstName.length <= nameLengthLimit;
    return (
      <>
        <Link to="/perfil" onClick={() => setBar(false)}>
          {isLessThanEqualLimit ? `Olá, ${firstName}!` : 'Meu Perfil'}
        </Link>
        <LogoutBtn onClick={logout} collapse={collapseLogout}>
          Deslogar
        </LogoutBtn>
      </>
    );
  };

  return (
    <Content>
      <InternContainer>
        <Logo />
        <Menu>
          <Nav bar={bar} collapse={collapse}>
            <Link
              to="/catalogo"
              onClick={() => {
                setBar(false);
                setCollapseLogout(false);
              }}
            >
              Produtos
            </Link>
            <Link
              to="/"
              onClick={() => {
                setBar(false);
                setCollapseLogout(false);
              }}
            >
              Cursos
            </Link>
            <Link
              to="/"
              onClick={() => {
                setBar(false);
                setCollapseLogout(false);
              }}
            >
              Software
            </Link>
            <InvertItems>
              {auth ? (
                <Welcome>{welcomeSection()}</Welcome>
              ) : (
                <ButtonLogin
                  backgroundColor800={theme.colors.greenishBlue}
                  color800="white"
                  borderColor800={theme.colors.greenishBlue}
                  hoverBackgroundColor800={theme.colors.greenishBlue}
                  hoverColor800="white"
                  hoverBorderColor800={theme.colors.greenishBlue}
                  collapse={bar}
                  onClick={() => {
                    setBar(false);
                    setCollapseLogout(false);
                    navigate('/login');
                  }}
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
                      style={{ display: collapse ? 'flex' : 'none' }}
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
