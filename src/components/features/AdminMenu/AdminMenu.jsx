import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

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
  const [modalCreateProduct, setModalCreateProduct] = useState(false);
  const [modalCreateCategory, setModalCreateCategory] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const openModalCreateProduct = () => setModalCreateProduct(true);
  const closeModalCreateProduct = () => setModalCreateProduct(false);

  const openModalCreateCategory = () => setModalCreateCategory(true);
  const closeModalCreateCategory = () => setModalCreateCategory(false);

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

              {isSmallScreen ? (
                <StyledLink to="/administrador/criar-produto">
                  Adicionar produtos
                </StyledLink>
              ) : (
                <Button onClick={openModalCreateProduct}>
                  Adicionar produtos
                </Button>
              )}

              <StyledLink to="/administrador/listar-produtos">
                Listar produtos
              </StyledLink>
            </Section>

            <Section>
              <Title>Categorias</Title>

              {isSmallScreen ? (
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
            <StyledLink to="/administrador/liberacao-cursos">
              Liberação do curso
            </StyledLink>
            <StyledLink to="/administrador/liberacao-software">
              Liberação do Software
            </StyledLink>
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
        open={modalCreateProduct}
        onCancel={closeModalCreateProduct}
        width={1100}
        padding={null}
        footer={null}
        closeIcon={modalCloseButton}
        bodyStyle={{
          margin: '0rem',
          padding: '0rem',
          color: 'none',
          background: '#123645',
        }}
        centered
        destroyOnClose
      >
        <ModalCreateProduct close={closeModalCreateProduct} />
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
