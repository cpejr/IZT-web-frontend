import { useEffect, useState } from 'react';

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
  ParametersRA,
} from '../../components/features';
// import AccordionDemo from '../../components/features/Acordeon/Acordeon';
import Graphic from '../../components/features/Graphic/Graphic';
import {
  useCreateProfileAnalysis,
  useCalculateProfileAnalysis,
} from '../../hooks/query/profileAnalysis';
import useAuthStore from '../../stores/auth';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { DivName, ErrorMessage, InputName } from '../StabilityAnalysis/Styles';
import {
  Container,
  Column,
  Center,
  Text,
  Analysis,
  Container2,
  OutputData,
  Edit,
  Text2,
  Data,
  Containerleft,
  ContainerRight,
  Button,
  H1,
  Boddy,
  DataEntry,
  Collapsable,
  CollapsableHeader,
  DataTitle,
} from './Styles';
import { TranslateText } from './translations';
import {
  buildCalculateProfileAnalysisErrorMessage,
  calculateProfileAnalysisValidationSchema,
} from './utils';
import {
  buildCalculateProfileAnalysisErrorMessageDE,
  calculateProfileAnalysisValidationSchemaDE,
} from './utilsDE';
import {
  buildCalculateProfileAnalysisErrorMessageEN,
  calculateProfileAnalysisValidationSchemaEN,
} from './utilsEN';
import {
  buildCalculateStabilityAnalysisErrorMessage,
  saveProfileAnalysisValidationSchema,
} from './utilsSave';
import {
  buildCalculateStabilityAnalysisErrorMessageDE,
  saveProfileAnalysisValidationSchemaDE,
} from './utilsSaveDE';
import {
  buildCalculateStabilityAnalysisErrorMessageEN,
  saveProfileAnalysisValidationSchemaEN,
} from './utilsSaveEN';

export default function ProfileAnalysis() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  let validationSchema;

  if (globalLanguage === 'DE') {
    validationSchema = calculateProfileAnalysisValidationSchemaDE;
  } else if (globalLanguage === 'PT') {
    validationSchema = calculateProfileAnalysisValidationSchema;
  } else {
    validationSchema = calculateProfileAnalysisValidationSchemaEN;
  }

  let saveValidationSchema;

  if (globalLanguage === 'DE') {
    saveValidationSchema = saveProfileAnalysisValidationSchemaDE;
  } else if (globalLanguage === 'PT') {
    saveValidationSchema = saveProfileAnalysisValidationSchema;
  } else {
    saveValidationSchema = saveProfileAnalysisValidationSchemaEN;
  }

  const [graphData, setGraphData] = useState({ x: [], y: [] });
  const [formDataStorage, setFormDataStorage] = useState({});
  const queryClient = useQueryClient();
  const [collapse, setCollapse] = useState('');

  // Open/Close dropdown
  const handleCollapse = (sectionName) => {
    if (collapse === sectionName) setCollapse('');
    else setCollapse(sectionName);
  };

  /* const handleCalculate = (data) => {
    const xData = data.x;
    const yData = data.y;

    setGraphData({ x: xData, y: yData });
  }; */

  // backend calls
  const { mutate: calculateProfileAnalysis, isLoading } =
    useCalculateProfileAnalysis({
      onSuccess: (result) => {
        const newGraphData = [
          {
            x: result.retificationCenterlessDiagram.x,
            y: result.retificationCenterlessDiagram.y,
          },
        ];
        // const xData = result.retificationCenterlessDiagram.x;
        // const yData = result.retificationCenterlessDiagram.y;
        // onCalculate({ x: xData, y: yData });
        // dataInput(formDataStorage);

        setGraphData(newGraphData);

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
          const errorMessage = buildCalculateProfileAnalysisErrorMessageDE(err);
          toast.error(errorMessage);
        } else if (globalLanguage === 'PT') {
          const errorMessage = buildCalculateProfileAnalysisErrorMessage(err);
          toast.error(errorMessage);
        } else {
          const errorMessage = buildCalculateProfileAnalysisErrorMessageEN(err);
          toast.error(errorMessage);
        }
      },
    });

  const { mutate: createProfileAnalysis } = useCreateProfileAnalysis({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile-analysis', 'searchByName'],
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
        const errorMessageDE =
          buildCalculateStabilityAnalysisErrorMessageDE(err);

        toast.error(errorMessageDE);
      } else if (globalLanguage === 'EN') {
        const errorMessageEN =
          buildCalculateStabilityAnalysisErrorMessageEN(err);

        toast.error(errorMessageEN);
      } else {
        const errorMessage = buildCalculateStabilityAnalysisErrorMessage(err);

        toast.error(errorMessage);
      }
    },
  });
  // Form handlers
  const {
    handleSubmit: calculate,
    register,
    formState: { errors },
    // setValue,
    // trigger,
    // watch,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data) => {
    setFormDataStorage(data);
    calculateProfileAnalysis(data);
  };

  /* const covertStringToNumber = (fieldId, inputValue) => {
    const convertedNumber = parseFloat(inputValue);
    if (!Number.isNaN(convertedNumber)) {
      setValue(fieldId, convertedNumber);
      trigger(fieldId);
    } else {
      setValue(fieldId, '');
      trigger(fieldId);
    }
  };
   const handleformDataStorage = (data) => {
    setFormDataStorage(data);
 };
 */
  useEffect(() => {}, [formDataStorage]);
  const user = useAuthStore((state) => state.auth?.user);

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
    createProfileAnalysis(combinedData);
    setFormDataStorage({});
  };

  return (
    <Boddy>
      <Container>
        <Containerleft>
          <Center>
            <H1>{translations.dataEntry}</H1>
            <Data>
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
                <Collapsable>
                  <CollapsableHeader
                    collapse={collapse === 'parametersRA'}
                    onClick={() => handleCollapse('parametersRA')}
                  >
                    <DataTitle>{translations.parametersRA}</DataTitle>
                    <AiOutlineDown />
                  </CollapsableHeader>
                  <ParametersRA
                    collapse={collapse === 'parametersRA'}
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
              {/* <AccordionDemo
                onCalculate={handleCalculate}
                dataInput={handleformDataStorage}
              />  */}
            </Data>
          </Center>
        </Containerleft>
        <Analysis>
          <DataEntry onSubmit={save(onSubmit2)}>
            <H1>
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
              <Button>{translations.saveReport}</Button>
            </H1>
            <ErrorMessage>{error?.name?.message}</ErrorMessage>
          </DataEntry>
          <Edit>
            <Text>{translations.grindingClearance} </Text>
            <Container2>
              <Graphic data={graphData} />
            </Container2>
            <Text>{translations.outputData}</Text>
          </Edit>
          <ContainerRight>
            <Column>
              <OutputData>
                <Text2> {translations.heightBetweenCenters} (hw): ___ mm</Text2>
                <Text2>{translations.dresserHeight} (hd): ___ mm</Text2>
                <Text2>{translations.raInclination} (adr): ___ °</Text2>
                <Text2>{translations.dresserInclination}: ___ °</Text2>
                <Text2>{translations.rulerAngle} (β): ___ °</Text2>
                <Text2>{translations.grindingRotation} (nr): ___ rpm</Text2>
                <Text2>{translations.grindingRotation} (nr): ___ rps</Text2>
                <Text2>{translations.peripheralSpeed} (vp): ___ m/s</Text2>
                <Text2>{translations.feedSpeed} (vfa): ___ m/min</Text2>
              </OutputData>
              <OutputData rightOutputData>
                <Text2> {translations.pieceQuantity} (Qp): ___ </Text2>
                <Text2> {translations.cycleTime} (tc): ___ min/pc</Text2>
                <Text2> {translations.revolutionsNumbers} (U): ___ </Text2>
                <Text2> {translations.removalRate} (Qw’): ___ mm3/mm.s</Text2>
                <Text2> {translations.cuttingThickness} (hef): ___ mm</Text2>
                <Text2> {translations.tangentAngle} (γ): ___ °</Text2>
                <Text2> {translations.tangentAngle} RA (γra): ___ °</Text2>
                <Text2> {translations.tangentAngle} RC (γrc) ___ °</Text2>
              </OutputData>
            </Column>
          </ContainerRight>
        </Analysis>
      </Container>
    </Boddy>
  );
}
