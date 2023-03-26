import { FiSave } from 'react-icons/fi';
import { HiPlusSm } from 'react-icons/hi';
import { Navigate } from 'react-router-dom';

import useWindowSize from '../../hooks/useWindowSize';
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

export default function CreateProduct() {
  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  if (windowWidth > mobileBreakpoint)
    return <Navigate to="/administrador/loja" />;
  return (
    <Container>
      <Title>Adicionar produto</Title>

      <Subtitle>Nome do produto:</Subtitle>
      <SmallInput />

      <Subtitle>Descrição:</Subtitle>
      <BigInput />

      <Subtitle>Vantagens:</Subtitle>
      <BigInput />

      <div>
        <Title>Imagens:</Title>
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

      <CancelButton to="/administrador/loja">
        <p>Cancelar</p>
      </CancelButton>
    </Container>
  );
}
