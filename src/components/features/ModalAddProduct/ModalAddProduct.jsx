import React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import {
  Container,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  Text,
  MiniText,
  AddButton,
  InputModal,
  InputModalName,
  ModalButton,
} from './Styles';

export default function ModalAddProduct() {
  return (
    <Container>
      <ModalContent>
        <LeftSection>
          <Subsection>
            <Text>Nome do produto:</Text>
            <InputModalName />
          </Subsection>

          <Subsection>
            <Text>Descrição:</Text>
            <InputModal />
          </Subsection>

          <Subsection>
            <Text>Vantagens:</Text>
            <InputModal />
          </Subsection>
        </LeftSection>

        <RightSection>
          <Subsection>
            <Text>Imagens:</Text>
            <MiniText>Anexe as imagens do produto</MiniText>
            <AddButton>
              <HiPlusSm size={20} />
              Nova imagem
            </AddButton>
          </Subsection>

          <Subsection>
            <MiniText>Associar categoria</MiniText>
          </Subsection>

          <Subsection>
            <Text>Documentos</Text>
          </Subsection>
          <ModalButton>Criar produto</ModalButton>
        </RightSection>
      </ModalContent>
    </Container>
  );
}