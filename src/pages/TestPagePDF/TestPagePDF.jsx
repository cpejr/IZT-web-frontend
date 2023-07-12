import React from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import TestPDF from '../../components/features/PDF/TestPDF';
import { Button, Container } from './Styles';

export default function TestPagePDF() {
  const user = {
    nome: 'Amanda Fernandes Alves',
    idade: 20,
    profissao: 'Dev Líder',
  };

  return (
    <Container>
      <PDFDownloadLink document={<TestPDF user={user} />} filename="PDF">
        {({ loading }) =>
          loading ? (
            <Button>Loading Document...</Button>
          ) : (
            <Button>Download</Button>
          )
        }
      </PDFDownloadLink>
    </Container>
  );
}
