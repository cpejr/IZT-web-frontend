import React, { useState } from 'react';
import { Modal } from 'antd';
import {
  Container,
  MenuItens,
  Section,
  Title,
  Text,
  BlackLine,
  StyledLink,
  Button,
} from './Styles';

import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';

export default function AdminMenu() {
  const [modalAddProduct, setModalAddProduct] = useState(false);

  const openModalAddProduct = (e) => {
    e.preventDefault();
    setModalAddProduct(true);
  };

  const closeModalAddProduct = (e) => {
    e.preventDefault();
    setModalAddProduct(false);
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
          <Button>Adicionar categoria</Button>
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

      <Modal
        open={modalAddProduct}
        onCancel={closeModalAddProduct}
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
      </Modal>
    </Container>
  );
}
