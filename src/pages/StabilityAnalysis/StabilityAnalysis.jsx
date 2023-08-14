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
  Button2,
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

export default function StabilityAnalysis() {
  const [processStabilityDiagramData, setProcessStabilityDiagramData] =
    useState([]);
  const [partHeightStabilityDiagramData, setPartHeightStabilityDiagramData] =
    useState([]);
  const [collapse, setCollapse] = useState('');

  // Open/Close dropdown
  const handleCollapse = (sectionName) => {
    if (collapse === sectionName) setCollapse('');
    else setCollapse(sectionName);
  };

  // Backend calls
  const { mutate: calculateStabilityAnalysis, isLoading } =
    useCalculateStabilityAnalysis({
      onSuccess: (result) => {
        const newProcessStabilityGraphData = [
          {
            x: result.processStabilityDiagram.x,
            y: result.processStabilityDiagram.y,
            z: result.processStabilityDiagram.z,
            type: 'contour',
            size: 2,
            marker: { color: 'red' },
          },
        ];
        setProcessStabilityDiagramData(newProcessStabilityGraphData);

        const newPartHeightStabilityDiagramData = [
          {
            x: result.partHeightStabilityDiagram.x,
            y: result.partHeightStabilityDiagram.y,
            z: result.partHeightStabilityDiagram.z,
            type: 'contour',
            size: 2,
            marker: { color: 'red' },
          },
        ];
        setPartHeightStabilityDiagramData(newPartHeightStabilityDiagramData);

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
          <Button disabled={isLoading} type="submit">
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
          <Button2>Salvar relatório</Button2>
        </TitleRow>
        <Diagram>
          <DiagramTitle>Diagrama - Estabilidade de processo</DiagramTitle>
          <Canvas>
            <ContourMap
              data={processStabilityDiagramData}
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
              data={partHeightStabilityDiagramData}
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
