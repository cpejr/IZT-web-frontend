import { useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import { useLogout } from '../../../hooks/query/sessions';
import useAuthStore from '../../../stores/auth';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
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
  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();

  // State variables
  const [bar, setBar] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [collapseLogout, setCollapseLogout] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const user = useAuthStore((state) => state.auth?.user);
  const availableLaguages = ['EN', 'PT', 'DE'];

  const closeHeader = () => {
    setBar(false);
    setCollapseLogout(false);
  };

  // Backend call
  const { mutate: logout } = useLogout({
    onSuccess: () => {
      closeHeader();
      toast.success('Usuário deslogado com sucesso!');
      navigate('/');
    },
    onError: () => {
      const errorMessage =
        'Ocorreu um erro ao realizar o logout. Tente novamente mais tarde';

      toast.error(errorMessage);
    },
  });

  // Component
  const welcomeSectionComponent = (() => {
    if (isSmallScreen)
      return (
        <MenuProfile collapse={collapseLogout} bar={bar}>
          <MyProfile>
            <button
              type="button"
              onClick={() => {
                closeHeader();
                navigate(user?.isAdmin ? '/administrador' : '/perfil');
              }}
            >
              Meu Perfil
            </button>
            <IoIosArrowDown
              color="white"
              onClick={() => setCollapseLogout((prev) => !prev)}
            />
          </MyProfile>
          <Divider collapse={collapseLogout && bar} />
          <LogoutBtn onClick={logout} collapse={collapseLogout && bar}>
            Deslogar
          </LogoutBtn>
        </MenuProfile>
      );

    const firstName = user?.name?.split(' ')?.[0];
    const nameLengthLimit = 10;

    const isLessThanEqualLimit = firstName?.length <= nameLengthLimit;
    return (
      <>
        <Link
          to={user?.isAdmin ? '/administrador' : '/perfil'}
          onClick={() => setBar(false)}
        >
          {isLessThanEqualLimit ? `Olá, ${firstName}!` : 'Meu Perfil'}
        </Link>
        <LogoutBtn onClick={logout} collapse={collapseLogout}>
          Deslogar
        </LogoutBtn>
      </>
    );
  })();

  return (
    <Content>
      <InternContainer>
        <Logo />
        <Menu>
          <Nav bar={bar} collapse={collapse}>
            <Link to="/catalogo" onClick={closeHeader}>
              Produtos
            </Link>
            <Link to="/curso" onClick={closeHeader}>
              Cursos
            </Link>
            <Link to="/software" onClick={closeHeader}>
              Software
            </Link>
            <InvertItems>
              {user ? (
                <Welcome>{welcomeSectionComponent}</Welcome>
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
                    closeHeader();
                    navigate('/login');
                  }}
                >
                  Entrar
                </ButtonLogin>
              )}
              <Select bar={bar}>
                <Selected onClick={() => setCollapse((prev) => !prev)}>
                  <p>{globalLanguage}</p>
                  <IoIosArrowDown />
                </Selected>
                <LanguageSelector collapse={+collapse}>
                  {availableLaguages.map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => {
                        setGlobalLanguage(lang);
                        setCollapse((prev) => !prev);
                      }}
                      style={{ display: collapse ? 'flex' : 'none' }}
                    >
                      <p>{lang}</p>
                    </button>
                  ))}
                </LanguageSelector>
              </Select>
            </InvertItems>
          </Nav>

          <Bar bar={bar} onClick={() => setBar((prev) => !prev)}>
            <span />
          </Bar>
        </Menu>
      </InternContainer>
    </Content>
  );
}
