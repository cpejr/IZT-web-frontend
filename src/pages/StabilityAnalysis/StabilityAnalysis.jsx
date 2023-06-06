import { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';
import { TbPencil } from 'react-icons/tb';

import {
  AnalysisData,
  MachineData,
  ProductData,
} from '../../components/features';
import {
  Container,
  DataEntryDiv,
  Title,
  DataEntry,
  Collapsable,
  CollapsableHeader,
  DataTitle,
  Analysis,
  Button,
  TitleRow,
  Diagram,
  DiagramTitle,
  Canvas,
} from './Styles';

export default function StabilityAnalysis() {
  const [collapse, setCollapse] = useState({
    analysis: false,
    machine: false,
    product: false,
  });

  const openCollapse = (collapseName) => {
    setCollapse({
      analysis: false,
      machine: false,
      product: false,
    });
    setCollapse((prevState) => ({
      ...prevState,
      [collapseName]: true,
    }));
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>Entrada de Dados</Title>
        <DataEntry>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse.analysis}
              onClick={() => openCollapse('analysis')}
            >
              <DataTitle>Dados da Análise</DataTitle>
              <AiOutlineDown size={18} />
            </CollapsableHeader>
            <AnalysisData collapse={collapse} />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse.machine}
              onClick={() => openCollapse('machine')}
            >
              <DataTitle>Dados da Maquina</DataTitle>
              <AiOutlineDown size={18} />
            </CollapsableHeader>
            <MachineData collapse={collapse} />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse.product}
              onClick={() => openCollapse('product')}
            >
              <DataTitle>Dados do Produto</DataTitle>
              <AiOutlineDown size={18} />
            </CollapsableHeader>
            <ProductData collapse={collapse} />
          </Collapsable>
        </DataEntry>
        <Button>Calcular</Button>
      </DataEntryDiv>
      <Analysis>
        <TitleRow>
          <Title>Análise #1</Title>
          <TbPencil size={25} style={{ color: 'white' }} />
          <Button>Salvar relatório</Button>
        </TitleRow>
        <Diagram>
          <DiagramTitle>Diagrama - Estabilidade de processo</DiagramTitle>
          <Canvas />
        </Diagram>
        <Diagram>
          <DiagramTitle>Diagrama - Estabilidade de altura da peça</DiagramTitle>
          <Canvas />
        </Diagram>
      </Analysis>
    </Container>
  );
}
