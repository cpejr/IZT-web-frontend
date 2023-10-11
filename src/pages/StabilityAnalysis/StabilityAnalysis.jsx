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
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import {
  buildCalculateStabilityAnalysisErrorMessage,
  calculateStabilityAnalysisValidationSchema,
} from './utils';
import {
  buildCalculateStabilityAnalysisErrorMessageDE,
  calculateStabilityAnalysisValidationSchemaDE,
} from './utilsDE';
import {
  buildCalculateStabilityAnalysisErrorMessageEN,
  calculateStabilityAnalysisValidationSchemaEN,
} from './utilsEN';
import {
  saveStabilityAnalysisValidationSchema,
  buildSaveStabilityAnalysisErrorMessage,
} from './utilsSave';
import {
  saveStabilityAnalysisValidationSchemaDE,
  buildSaveStabilityAnalysisErrorMessageDE,
} from './utilsSaveDE';
import {
  saveStabilityAnalysisValidationSchemaEN,
  buildSaveStabilityAnalysisErrorMessageEN,
} from './utilsSaveEN';

export default function StabilityAnalysis() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  let validationSchema;

  if (globalLanguage === 'DE') {
    validationSchema = calculateStabilityAnalysisValidationSchemaDE;
  } else if (globalLanguage === 'PT') {
    validationSchema = calculateStabilityAnalysisValidationSchema;
  } else {
    validationSchema = calculateStabilityAnalysisValidationSchemaEN;
  }

  let saveValidationSchema;

  if (globalLanguage === 'DE') {
    saveValidationSchema = saveStabilityAnalysisValidationSchemaDE;
  } else if (globalLanguage === 'PT') {
    saveValidationSchema = saveStabilityAnalysisValidationSchema;
  } else {
    saveValidationSchema = saveStabilityAnalysisValidationSchemaEN;
  }

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

      if (globalLanguage === 'DE') {
        toast.success(translations.reportSuccess);
      } else if (globalLanguage === 'EN') {
        toast.success(translations.reportSuccess);
      } else {
        toast.success(translations.reportSuccess);
      }
    },
    onError: (err) => {
      if (globalLanguage === 'DE') {
        const errorMessage = buildSaveStabilityAnalysisErrorMessageDE(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'PT') {
        const errorMessage = buildSaveStabilityAnalysisErrorMessage(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildSaveStabilityAnalysisErrorMessageEN(err);
        toast.error(errorMessage);
      }
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

        if (globalLanguage === 'DE') {
          toast.success(translations.successCalculate);
        } else if (globalLanguage === 'EN') {
          toast.success(translations.successCalculate);
        } else {
          toast.success(translations.successCalculate);
        }
      },
      onError: (err) => {
        if (globalLanguage === 'DE') {
          const errorMessage =
            buildCalculateStabilityAnalysisErrorMessageDE(err);
          toast.error(errorMessage);
        } else if (globalLanguage === 'PT') {
          const errorMessage = buildCalculateStabilityAnalysisErrorMessage(err);
          toast.error(errorMessage);
        } else {
          const errorMessage =
            buildCalculateStabilityAnalysisErrorMessageEN(err);
          toast.error(errorMessage);
        }
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
    resolver: zodResolver(validationSchema),
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
    resolver: zodResolver(saveValidationSchema),
  });

  const onSubmit2 = (data) => {
    const combinedData = {
      ...formDataStorage,
      ...data,
      user: user?._id,
    };
    createStabilityAnalysis(combinedData);
    setFormDataStorage({});
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>{translations.dataEntry}</Title>
        <DataEntry onSubmit={calculate(onSubmit)}>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse === 'analysis'}
              onClick={() => handleCollapse('analysis')}
            >
              <DataTitle>{translations.analysisData}</DataTitle>
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
              <DataTitle>{translations.machineData}</DataTitle>
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
              <DataTitle>{translations.productData}</DataTitle>
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
                <p>{translations.loading}</p>
              </>
            ) : (
              <p>{translations.calculate}</p>
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
                placeholder={translations.reportName}
                error={error?.name?.message}
                {...register2('name')}
              />
            </DivName>
            <Button2 type="submit">{translations.saveReport}</Button2>
          </TitleRow>
          <ErrorMessage>{error?.name?.message}</ErrorMessage>
          <Diagram>
            <DiagramTitle>{translations.stabilityChart}</DiagramTitle>
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
            <DiagramTitle>{translations.heightStabilityChart}</DiagramTitle>
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
