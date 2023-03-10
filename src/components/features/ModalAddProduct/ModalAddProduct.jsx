import React from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { FiSave } from 'react-icons/fi';
import {
  Container,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  CategorySubsection,
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
              <HiPlusSm size={25} />
              Nova imagem
            </AddButton>
          </Subsection>

          <Subsection>
            <Text>Documentos</Text>
            <AddButton>
              <HiPlusSm size={25} />
              Novo documento
            </AddButton>
          </Subsection>

          <CategorySubsection>
            <Text>Categorias</Text>
            <p>SETLIST</p>
          </CategorySubsection>

          <ModalButton>
            <FiSave size={20} />
            <p>Criar produto</p>
          </ModalButton>
        </RightSection>
      </ModalContent>
    </Container>
  );
}
