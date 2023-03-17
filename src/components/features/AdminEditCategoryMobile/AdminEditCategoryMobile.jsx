import React from 'react';
import { FiSave } from 'react-icons/fi';
import {
  Container,
  Title,
  Subtitle,
  SmallInput,
  SaveButton,
  CancelButton,
} from './Styles';

export default function AdminEditCategoryMobile() {
  return (
    <Container>
      <Title>Editar Categoria</Title>

      <Subtitle>Nome da categoria:</Subtitle>
      <SmallInput type="SearchProduct" placeholder="Tipo 1" />

      <SaveButton>
        <FiSave size={20} />
        <p>Criar categoria</p>
      </SaveButton>

      <CancelButton>
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
