import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
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
import {
  useCalculateStabilityAnalysis,
  useCreateStabilityAnalysis,
} from '../../hooks/query/stabilityAnalysis';
import useAuthStore from '../../stores/auth';
import {
  Container,
  DataEntryDiv,
  Title,
  InputName,
  DataEntry,
  DataEntry2,
  Collapsable,
  CollapsableHeader,
  DataTitle,
  Analysis,
  Button,
  Button2,
  TitleRow,
  DivName,
  Diagram,
  DiagramTitle,
  Canvas,
  ContourMap,
  ErrorMessage,
} from './Styles';
import {
  buildCalculateStabilityAnalysisErrorMessage,
  calculateStabilityAnalysisValidationSchema,
} from './utils';
import { saveStabilityAnalysisValidationSchema } from './utilsSave';

export default function StabilityAnalysis() {
  const queryClient = useQueryClient();
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
  const { mutate: createStabilityAnalysis } = useCreateStabilityAnalysis({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['stability-analysis', 'searchByName'],
      });

      toast.success('Relatório criado com sucesso!');
    },
    onError: (err) => {
      const errorMessage = buildCalculateStabilityAnalysisErrorMessage(err);

      toast.error(errorMessage);
    },
  });

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
  const user = useAuthStore((state) => state.auth?.user);
  const [formDataStorage, setFormDataStorage] = useState({});
  const {
    handleSubmit: calculate,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculateStabilityAnalysisValidationSchema),
  });

  const onSubmit = (data) => {
    setFormDataStorage(data);
    calculateStabilityAnalysis(data);
  };

  const {
    handleSubmit: save,
    register: register2,
    formState: { errors: error },
  } = useForm({
    defaultValues: formDataStorage,
    resolver: zodResolver(saveStabilityAnalysisValidationSchema),
  });

  const onSubmit2 = (data) => {
    const combinedData = {
      ...formDataStorage,
      ...data,
      user: user?._id,
    };
    createStabilityAnalysis(combinedData);
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>Entrada de Dados</Title>
        <DataEntry onSubmit={calculate(onSubmit)}>
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
      <DataEntry2 onSubmit={save(onSubmit2)}>
        <Analysis>
          <TitleRow>
            <DivName>
              <TbPencil size={25} style={{ color: 'white' }} />
              <InputName
                id="name"
                name="name"
                type="text"
                placeholder="Insira o nome do relatório"
                error={error?.name?.message}
                {...register2('name')}
              />
            </DivName>
            <Button2 type="submit">Salvar relatório</Button2>
          </TitleRow>
          <ErrorMessage>{error?.name?.message}</ErrorMessage>
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
            <DiagramTitle>
              Diagrama - Estabilidade de altura da peça
            </DiagramTitle>
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
      </DataEntry2>
    </Container>
  );
}
