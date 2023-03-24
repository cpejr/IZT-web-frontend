import React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { FiSave } from 'react-icons/fi';
import {
  Container,
  Title,
  Subtitle,
  SmallInput,
  BigInput,
  MiniText,
  AddButton,
  AddButtonText,
  CategorySection,
  SaveButton,
  CancelButton,
} from './Styles';

export default function AdminEditProductMobile() {
  return (
    <Container>
      <Title>Editar produto</Title>

      <Subtitle>Nome do produto:</Subtitle>
      <SmallInput />

      <Subtitle>Descrição:</Subtitle>
      <BigInput />

      <Subtitle>Vantagens:</Subtitle>
      <BigInput />

      <div>
        <Subtitle>Imagens:</Subtitle>
        <MiniText>Anexe as imagens do produto</MiniText>
      </div>

      <AddButton>
        <HiPlusSm size={25} />
        <AddButtonText>Nova Imagem</AddButtonText>
      </AddButton>

      <Title>Documentos</Title>
      <AddButton>
        <HiPlusSm size={25} />
        <AddButtonText>Novo Documento</AddButtonText>
      </AddButton>

      <CategorySection>
        <Title>Categoria</Title>
        <p>Select category</p>
      </CategorySection>

      <SaveButton>
        <FiSave size={20} />
        <p>Salvar produto</p>
      </SaveButton>

      <CancelButton to="/administrador">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
