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

export default function AdminAddProductMobile() {
  return (
    <Container>
      <Title>Adicionar produto</Title>

      <Subtitle>Nome do produto:</Subtitle>
      <SmallInput type="SearchProduct" placeholder="Pesquisar categoria" />

      <Subtitle>Descrição:</Subtitle>
      <BigInput type="SearchProduct" placeholder="Pesquisar categoria" />

      <Subtitle>Vantagens:</Subtitle>
      <BigInput type="SearchProduct" placeholder="Pesquisar categoria" />

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
        <p>Criar produto</p>
      </SaveButton>

      <CancelButton>
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
