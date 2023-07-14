import React from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import TestPDF from '../../components/features/PDF/TestPDF';
import { Button, Container } from './Styles';

export default function TestPagePDF() {
  const data = {
    title: 'Relatório #1',
    diametroRC: 30,
    diametroRA: 30,
    comprimentoRC: 20,
    comprimentoRA: 20,
    rotacaoRC: 50,
    rotacaoRA: 50,
    inclinacaoRW: 90,
    comprimentoEfetivo: 20,
    processoRetificacao: 50,
    maquina: 'maquita',
    operacao: 'hoje',
    departamento: 'Sirius',
    responsavel: 'Amanda',
    produto: 'furadeira',
    nproduto: 2,
    diametro: 2,
    comprimentoTotal: 20,
    comprimentoEletivo: 5,
    sobremetal: 'metal',
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
