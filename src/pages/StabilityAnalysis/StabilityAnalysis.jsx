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
  ContourMap,
} from './Styles';

// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import { useCalculateStabilityAnalysis } from '../../hooks/query/stabilityAnalysis';
// import {
//   buildCalculateStabilityAnalysisErrorMessage,
//   calculateStabilityAnalysisValidationSchema,
// } from './utils';

const data = [
  {
    z: [
      [10, 10.625, 12.5, 15.625, 20],
      [5.625, 6.25, 8.125, 11.25, 15.625],
      [2.5, 3.125, 5.0, 8.125, 12.5],
      [0.625, 1.25, 3.125, 6.25, 10.625],
      [0, 0.625, 2.5, 5.625, 10],
    ],
    type: 'contour',
    size: 2,
    marker: { color: 'red' },
  },
];

export default function StabilityAnalysis() {
  const [plotData, setPlotData] = useState([]);
  const [collapse, setCollapse] = useState('');

  const handleCollapse = (sectionName) => {
    if (collapse === sectionName) setCollapse('');
    else setCollapse(sectionName);
  };

  const handlePlot = () => {
    setPlotData(data);
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>Entrada de Dados</Title>
        <DataEntry>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'analysis'}
              onClick={() => handleCollapse('analysis')}
            >
              <DataTitle>Dados da Análise</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <AnalysisData collapse={collapse === 'analysis'} />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'machine'}
              onClick={() => handleCollapse('machine')}
            >
              <DataTitle>Dados da Maquina</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <MachineData collapse={collapse === 'machine'} />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'product'}
              onClick={() => handleCollapse('product')}
            >
              <DataTitle>Dados do Produto</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <ProductData collapse={collapse === 'product'} />
          </Collapsable>
        </DataEntry>
        <Button onClick={handlePlot}>Calcular</Button>
      </DataEntryDiv>
      <Analysis>
        <TitleRow>
          <Title>Análise #1</Title>
          <TbPencil size={20} style={{ color: 'white' }} />
          <Button>Salvar relatório</Button>
        </TitleRow>
        <Diagram>
          <DiagramTitle>Diagrama - Estabilidade de processo</DiagramTitle>
          <Canvas>
            <ContourMap
              data={plotData}
              layout={{ autosize: true }}
              config={{ responsive: true }}
              useResizeHandler
            />
          </Canvas>
        </Diagram>
        <Diagram>
          <DiagramTitle>Diagrama - Estabilidade de altura da peça</DiagramTitle>
          <Canvas>
            <ContourMap
              data={plotData}
              layout={{ autosize: true }}
              config={{ responsive: true }}
              useResizeHandler
            />
          </Canvas>
        </Diagram>
      </Analysis>
    </Container>
  );
}
