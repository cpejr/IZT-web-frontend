import React, { useState } from 'react';

import { GrFormClose } from 'react-icons/gr';
import {
  Container,
  CloseButton,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  Text,
  MiniText,
  InputModal,
  InputModalName,
  ModalButton,
} from './Styles';

export default function ModalAddProduct({ isOppen }) {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  if (isOppen) {
    return (
      <Container>
        <CloseButton onClick={() => setOpenModalAddProduct(0)}>
          <GrFormClose size={50} />
        </CloseButton>
        <ModalAddProduct isOppen={openModalAddProduct} />
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
  return null;
}
