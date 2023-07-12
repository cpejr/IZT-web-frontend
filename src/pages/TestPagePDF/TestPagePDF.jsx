import React from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import TestPDF from '../../components/features/PDF/TestPDF';
import { Button, Container } from './Styles';

export default function TestPagePDF() {
  const data = {
    title: 'Relatório #1',
    diametroRC: 30,
    comprimentoRC: 20,
    inclinacaoRW: 90,
  };

  return (
    <Container>
      <PDFDownloadLink document={<TestPDF data={data} />} filename="PDF">
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
