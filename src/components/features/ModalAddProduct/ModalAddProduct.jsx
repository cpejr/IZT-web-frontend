import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useCreateCategory } from '../../../hooks/query/categories';
import { HiPlusSm } from 'react-icons/hi';
import { FiSave } from 'react-icons/fi';
// import { z } from 'zod';

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

// const validationSchema = z.object({
//   name: z
//     .string()
//     .min(1, 'Favor digitar o nome do produto')
//     .max(20, 'Product name must be a maximum of 20 characters'),
//   category: z.string({ required_error: 'Product category ID is required' }), // Here we need to pass the category id only
//   description: z
//     .string()
//     .min(1, 'Favor inserir uma descrição')
//     .max(150, 'Product description must be a maximum of 150 characters'),
//   advantages: z
//     .string()
//     .min(1, 'Favor inserir as vantagens')
//     .max(150, 'Product advantages must be a maximum of 150 characters'),

//   pictures: z
//     .array({
//       required_error: 'Product pictures are required',
//     })
//     .nonempty('Product pictures array cannot be empty'),
//   documents: z.array(documentSchema).default([]),
// });

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
