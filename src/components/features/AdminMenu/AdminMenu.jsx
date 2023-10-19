import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import { useGlobalLanguage } from '../../../stores/globalLanguage';

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
import { TranslateText } from './translations';

export default function AdminMenu() {

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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
              <Title>{translations.menuAdmin}</Title>
              <BlackLine />
            </Section>
          </TitleDiv>
          <SectionMobile>
            <Section>
              <Title>{translations.products}</Title>

              {isSmallScreen ? (
                <StyledLink to="/administrador/criar-produto">
                  {translations.addProducts}
                </StyledLink>
              ) : (
                <Button onClick={openModalCreateProduct}>
                  {translations.addProducts}
                </Button>
              )}

              <StyledLink to="/administrador/listar-produtos">
              {translations.listProducts}
              </StyledLink>
            </Section>

            <Section>
              <Title>{translations.categories}</Title>

              {isSmallScreen ? (
                <StyledLink to="/administrador/criar-categoria">
                  {translations.addCategory}
                </StyledLink>
              ) : (
                <Button onClick={openModalCreateCategory}>
                  {translations.addCategory}
                </Button>
              )}

              <StyledLink to="/administrador/listar-categorias">
              {translations.listCategories}
              </StyledLink>
              <BlackLine />
            </Section>
          </SectionMobile>

          <BlackLineMobile />

          <Section>
            <Title>{translations.accessDefinitions}</Title>
            <StyledLink to="/administrador/liberacao-cursos">
            {translations.provideCourseAccess}
            </StyledLink>
            <StyledLink to="/administrador/liberacao-software">
            {translations.provideSoftwareAccess}
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
