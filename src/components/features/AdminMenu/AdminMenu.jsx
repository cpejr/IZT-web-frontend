import React, { useState, useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  Container,
  MenuItens,
  TitleDiv,
  Section,
  SectionMobile,
  Title,
  Text,
  BlackLine,
  BlackLineMobile,
  StyledLink,
  Button,
  ModalStyle,
  MenuMobile,
  MobileMenuButton,
} from './Styles';

import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';
import ModalCreateCategory from '../ModalCreateCategory/ModalCreateCategory';

export default function AdminMenu() {
  const modalButton = {
    closeIcon: <CloseOutlined style={{ color: 'white' }} />,
  };

  const [modalAddProduct, setModalAddProduct] = useState(false);
  const [modalCreateCategory, setModalCreateCategory] = useState(false);

  const openModalAddProduct = (e) => {
    e.preventDefault();
    setModalAddProduct(true);
  };

  const closeModalAddProduct = (e) => {
    e.preventDefault();
    setModalAddProduct(false);
  };

  const openModalCreateCategory = (e) => {
    e.preventDefault();
    setModalCreateCategory(true);
  };

  const closeModalCreateCategory = (e) => {
    e.preventDefault();
    setModalCreateCategory(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const breakpoint = 700;

  return (
    <Container>
      <MenuItens opened={openMenuMobile}>
        <MenuMobile id="collapse" opened={openMenuMobile}>
          <TitleDiv>
            <Section>
              <Title>Menu do Administrador</Title>
              <BlackLine />
            </Section>
          </TitleDiv>
          <SectionMobile>
            <Section>
              <Title>Produtos</Title>

              {windowWidth <= breakpoint ? (
                <StyledLink to="/administrador/adicionar-produto">
                  Adicionar produtos
                </StyledLink>
              ) : (
                <Button onClick={openModalAddProduct}>
                  Adicionar produtos
                </Button>
              )}

              <StyledLink to="/administrador/listar-produtos">
                Listar produtos
              </StyledLink>
            </Section>

            <Section>
              <Title>Categorias</Title>

              {windowWidth <= breakpoint ? (
                <StyledLink to="/administrador/criar-categoria">
                  Adicionar categoria
                </StyledLink>
              ) : (
                <Button onClick={openModalCreateCategory}>
                  Adicionar categoria
                </Button>
              )}

              <StyledLink to="/administrador/listar-categorias">
                Listar categorias
              </StyledLink>
              <BlackLine />
            </Section>
          </SectionMobile>

          <BlackLineMobile />

          <Section>
            <Title>Definições de acesso</Title>
            <Text>Liberação do curso</Text>
            <Text>Liberação do software</Text>
          </Section>
        </MenuMobile>
        <MobileMenuButton
          opened={openMenuMobile}
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        >
          <MdKeyboardArrowDown size={25} />
        </MobileMenuButton>
      </MenuItens>

      <ModalStyle
        open={modalAddProduct}
        onCancel={closeModalAddProduct}
        width={1100}
        padding={null}
        footer={null}
        closeIcon={modalButton.closeIcon}
        bodyStyle={{
          margin: '0px',
          padding: '0px',
          color: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalAddProduct />
      </ModalStyle>

      <ModalStyle
        open={modalCreateCategory}
        onCancel={closeModalCreateCategory}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalButton.closeIcon}
        bodyStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          background: '#123645',
          color: 'white',
          padding: 0,
          borderRadius: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalCreateCategory />
      </ModalStyle>
    </Container>
  );
}
