import React, { useState } from 'react';
import {
  Container,
  MenuItens,
  Section,
  Title,
  Text,
  BlackLine,
  StyledLink,
  Button,
  ModalStyle,
} from './Styles';

import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';
import ModalCreateCategory from '../ModalCreateCategory/ModalCreateCategory';

export default function AdminMenu() {
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

  return (
    <Container>
      <MenuItens>
        <Section>
          <Title>Menu do Administrador</Title>
          <BlackLine />
        </Section>

        <Section>
          <Title>Produtos</Title>
          <Button onClick={openModalAddProduct}>Adicionar produtos</Button>
          <StyledLink to="/administrador/editar-produtos">
            Listar produtos
          </StyledLink>
        </Section>

        <Section>
          <Title>Categorias</Title>
          <Button onClick={openModalCreateCategory}>Adicionar categoria</Button>
          <StyledLink to="/administrador/editar-categorias">
            Listar categorias
          </StyledLink>
          <BlackLine />
        </Section>

        <Section>
          <Title>Definições de acesso</Title>
          <Text>Liberação do curso</Text>
          <Text>Liberação do software</Text>
        </Section>
      </MenuItens>

      <ModalStyle
        open={modalAddProduct}
        onCancel={closeModalAddProduct}
        width={1100}
        padding={null}
        footer={null}
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
        width={1100}
        padding={0}
        footer={null}
        bodyStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          background: '#123645',
          padding: 0,
          width: '500px',
          height: '250px',
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