import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AiOutlineDown } from 'react-icons/ai';
import { TbPencil } from 'react-icons/tb';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import {
  AnalysisData,
  MachineData,
  ProductData,
} from '../../components/features';
import { useCalculateStabilityAnalysis } from '../../hooks/query/stabilityAnalysis';
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
import {
  buildCalculateStabilityAnalysisErrorMessage,
  calculateStabilityAnalysisValidationSchema,
} from './utils';

const graphData = [
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

  // Open/Close dropdown
  const handleCollapse = (sectionName) => {
    if (collapse === sectionName) setCollapse('');
    else setCollapse(sectionName);
  };

  // Gerenate Graph
  const handlePlot = () => {
    setPlotData(graphData);
  };

  // Backend calls
  const { mutate: calculateStabilityAnalysis, isLoading } =
    useCalculateStabilityAnalysis({
      onSuccess: () => {
        toast.success('Dados calculados com sucesso!');
      },
      onError: (err) => {
        const errorMessage = buildCalculateStabilityAnalysisErrorMessage(err);

        toast.error(errorMessage);
      },
    });

  // Form handlers
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculateStabilityAnalysisValidationSchema),
  });

  const onSubmit = (data) => {
    calculateStabilityAnalysis(data);
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>Entrada de Dados</Title>
        <DataEntry onSubmit={handleSubmit(onSubmit)}>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'analysis'}
              onClick={() => handleCollapse('analysis')}
            >
              <DataTitle>Dados da Análise</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <AnalysisData
              collapse={collapse === 'analysis'}
              register={register}
              errors={errors}
            />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'machine'}
              onClick={() => handleCollapse('machine')}
            >
              <DataTitle>Dados da Maquina</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <MachineData
              collapse={collapse === 'machine'}
              register={register}
              errors={errors}
            />
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'product'}
              onClick={() => handleCollapse('product')}
            >
              <DataTitle>Dados do Produto</DataTitle>
              <AiOutlineDown />
            </CollapsableHeader>
            <ProductData
              collapse={collapse === 'product'}
              register={register}
              errors={errors}
            />
          </Collapsable>
          <Button disabled={isLoading} onSubmit={handlePlot} type="submit">
            {isLoading ? (
              <>
                <TailSpin
                  height="15"
                  width="15"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="5"
                />
                <p>Carregando</p>
              </>
            ) : (
              <p>Calcular</p>
            )}
          </Button>
        </DataEntry>
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
