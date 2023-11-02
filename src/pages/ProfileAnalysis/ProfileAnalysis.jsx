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
import Graphic from '../../components/features/Graphic/Graphic';
import {
  useCreateProfileAnalysis,
  useCalculateProfileAnalysis,
} from '../../hooks/query/profileAnalysis';
import useAuthStore from '../../stores/auth';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { DivName, ErrorMessage, InputName } from '../StabilityAnalysis/Styles';
import ProfileMaths from './ProfileMaths';
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

  const [retificationCenterlessDiagram, setRetificationCenterlessDiagram] =
    useState([]);
  const [formDataStorage, setFormDataStorage] = useState({});
  const [InputDataStorage, setInputDataStorage] = useState({});
  const queryClient = useQueryClient();
  const [collapse, setCollapse] = useState('');

  // Open/Close dropdown
  const handleCollapse = (sectionName) => {
    if (collapse === sectionName) setCollapse('');
    else setCollapse(sectionName);
  };

  // backend calls
  const { mutate: calculateProfileAnalysis, isLoading } =
    useCalculateProfileAnalysis({
      onSuccess: (result) => {
        setRetificationCenterlessDiagram([
          result.retificationCenterlessDiagram.x,
          result.retificationCenterlessDiagram.y,
        ]);

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
  let resolver1;
  if (globalLanguage === 'DE') {
    resolver1 = zodResolver(saveProfileAnalysisValidationSchemaDE);
  } else if (globalLanguage === 'EN') {
    resolver1 = zodResolver(saveProfileAnalysisValidationSchemaEN);
  } else {
    // eslint-disable-next-line no-unused-vars
    resolver1 = zodResolver(saveProfileAnalysisValidationSchema);
  }

  // Form handlers
  const {
    handleSubmit: calculate,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setFormDataStorage(data);
    setInputDataStorage(data);
    calculateProfileAnalysis(data);
  };

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
  const Maths = ProfileMaths(InputDataStorage);

  const onSubmit2 = (data) => {
    const combinedData = {
      ...formDataStorage,
      ...data,
      ...Maths,
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
                    isProfileAnalysis
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
              <Graphic data={retificationCenterlessDiagram} />
            </Container2>
            <Text>{translations.outputData}</Text>
          </Edit>
          <ContainerRight>
            <Column>
              <OutputData>
                <Text2>
                  {' '}
                  {translations.heightBetweenCenters} (hw):{' '}
                  {InputDataStorage?.heightCenters || '___'} mm
                </Text2>
                <Text2>
                  {translations.dresserHeight} (hd):{' '}
                  {InputDataStorage?.dresserHeight || '___'} mm
                </Text2>
                <Text2>
                  {translations.raInclination} (adr):{' '}
                  {InputDataStorage?.raInclination || '___'} °
                </Text2>
                <Text2>
                  {translations.dresserInclination}:{' '}
                  {InputDataStorage?.raDresserInclination || '___'} °
                </Text2>
                <Text2>
                  {translations.rulerAngle} (β):{' '}
                  {InputDataStorage?.angleRuler || '___'} °
                </Text2>
                <Text2>
                  {translations.grindingRotation} (nr):{' '}
                  {InputDataStorage?.raRotationnr || '___'} rpm
                </Text2>
                <Text2>
                  {translations.grindingRotation} (nr):{' '}
                  {Maths?.raRotationnr || '___'} rps
                </Text2>
                <Text2>
                  {translations.peripheralSpeed} (vp):{' '}
                  {Maths?.peripheralSpeed || '___'} m/s
                </Text2>
                <Text2>
                  {translations.feedSpeed} (vfa): {Maths?.passingSpeed || '___'}{' '}
                  m/min
                </Text2>
              </OutputData>
              <OutputData rightOutputData>
                <Text2>
                  {' '}
                  {translations.pieceQuantity} (Qp):{' '}
                  {Maths?.partQuantity || '___'}{' '}
                </Text2>
                <Text2>
                  {' '}
                  {translations.cycleTime} (tc): {Maths?.cycleTime || '___'}{' '}
                  min/pc
                </Text2>
                <Text2>
                  {' '}
                  {translations.revolutionsNumbers} (U):{' '}
                  {Maths?.revolution || '___'}{' '}
                </Text2>
                {InputDataStorage?.rectificationProcess ===
                'Centerless de Passagem' ? (
                  <>
                    <Text2>
                      {translations.removalRate} (Qw’): {Maths?.remove || '___'}{' '}
                      mm3/mm.s
                    </Text2>
                    <Text2>
                      {' '}
                      {translations.cuttingThickness} (hef):{' '}
                      {Maths?.cutThickness || '___'} mm
                    </Text2>
                  </>
                ) : null}

                <Text2>
                  {' '}
                  {translations.tangentAngle} (γ):{' '}
                  {InputDataStorage?.angleTangency || '___'} °
                </Text2>
              </OutputData>
            </Column>
          </ContainerRight>
        </Analysis>
      </Container>
    </Boddy>
  );
}
