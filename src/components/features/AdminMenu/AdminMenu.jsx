import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useWindowSize from '../../../hooks/useWindowSize';
import ModalCreateCategory from '../ModalCreateCategory/ModalCreateCategory';
import ModalCreateProduct from '../ModalCreateProduct/ModalCreateProduct';
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

export default function AdminMenu() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [modalAddProduct, setModalAddProduct] = useState(false);
  const [modalCreateCategory, setModalCreateCategory] = useState(false);

  const openModalAddProduct = () => setModalAddProduct(true);
  const closeModalAddProduct = () => setModalAddProduct(false);

  const openModalCreateCategory = () => setModalCreateCategory(true);
  const closeModalCreateCategory = () => setModalCreateCategory(false);

  const mobileBreakpoint = 700;
  const { width: windowWidth } = useWindowSize();

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
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

              {windowWidth <= mobileBreakpoint ? (
                <StyledLink to="/administrador/loja/criar-produto">
                  Adicionar produtos
                </StyledLink>
              ) : (
                <Button onClick={openModalAddProduct}>
                  Adicionar produtos
                </Button>
              )}

              <StyledLink to="/administrador/loja">Listar produtos</StyledLink>
            </Section>

            <Section>
              <Title>Categorias</Title>

              {windowWidth <= mobileBreakpoint ? (
                <StyledLink to="/administrador/loja/criar-categoria">
                  Adicionar categoria
                </StyledLink>
              ) : (
                <Button onClick={openModalCreateCategory}>
                  Adicionar categoria
                </Button>
              )}

              <StyledLink to="/administrador/loja/listar-categorias">
                Listar categorias
              </StyledLink>
              <BlackLine />
            </Section>
          </SectionMobile>

          <BlackLineMobile />

          <Section>
            <Title>Definições de acesso</Title>
            <StyledLink to="/administrador/loja/liberacao-cursos">
              Liberação do curso
            </StyledLink>
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
        closeIcon={modalCloseButton}
        bodyStyle={{
          margin: '0px',
          padding: '0px',
          color: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalCreateProduct />
      </ModalStyle>

      <ModalStyle
        open={modalCreateCategory}
        onCancel={closeModalCreateCategory}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
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
        <ModalCreateCategory close={closeModalCreateCategory} />
      </ModalStyle>
    </Container>
  );
}
