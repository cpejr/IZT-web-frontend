import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { TbPencil } from 'react-icons/tb';
import { toast } from 'react-toastify';

import AccordionDemo from '../../components/features/Acordeon/Acordeon';
import Graphic from '../../components/features/Graphic/Graphic';
import { useCreateProfileAnalysis } from '../../hooks/query/profileAnalysis';
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
} from './Styles';
import { TranslateText } from './translations';
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

  const [graphData, setGraphData] = useState({ x: [], y: [] });
  const [formDataStorage, setFormDataStorage] = useState({});
  const queryClient = useQueryClient();

  const handleCalculate = (data) => {
    const xData = data.x;
    const yData = data.y;

    setGraphData({ x: xData, y: yData });
  };

  // backend calls
  const { mutate: createProfileAnalysis } = useCreateProfileAnalysis({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile-analysis', 'searchByName'],
      });

      toast.success('Relatório criado com sucesso!');
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

  // Não sei o que fazer
  const handleformDataStorage = (data) => {
    setFormDataStorage(data);
  };
  useEffect(() => {}, [formDataStorage]);
  const user = useAuthStore((state) => state.auth?.user);

  let resolver1;
  if (globalLanguage === 'DE') {
    zodResolver(saveProfileAnalysisValidationSchemaDE);
  } else if (globalLanguage === 'EN') {
    zodResolver(saveProfileAnalysisValidationSchemaEN);
  } else {
    zodResolver(saveProfileAnalysisValidationSchema);
  }
  const {
    handleSubmit: save,
    register,
    formState: { errors: error },
  } = useForm({
    defaultValues: formDataStorage,
    resolver: resolver1,
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
            <H1>{translations.DataEntry}</H1>
            <Data>
              <AccordionDemo
                onCalculate={handleCalculate}
                dataInput={handleformDataStorage}
              />
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
                  placeholder={translations.ReportName}
                  error={error?.name?.message}
                  {...register('name')}
                />
              </DivName>
              <Button>{translations.SaveReport}</Button>
            </H1>
            <ErrorMessage>{error?.name?.message}</ErrorMessage>
          </DataEntry>
          <Edit>
            <Text>{translations.GrindingClearance} </Text>
            <Container2>
              <Graphic data={graphData} />
            </Container2>
            <Text>{translations.OutputData}</Text>
          </Edit>
          <ContainerRight>
            <Column>
              <OutputData>
                <Text2> {translations.HeightBetweenCenters} (hw): ___ mm</Text2>
                <Text2>{translations.DresserHeight} (hd): ___ mm</Text2>
                <Text2>{translations.RAInclination} (adr): ___ °</Text2>
                <Text2>{translations.DresserInclination}: ___ °</Text2>
                <Text2>{translations.RulerAngle} (β): ___ °</Text2>
                <Text2>{translations.GrindingRotation} (nr): ___ rpm</Text2>
                <Text2>{translations.GrindingRotation} (nr): ___ rps</Text2>
                <Text2>{translations.PeripheralSpeed} (vp): ___ m/s</Text2>
                <Text2>{translations.FeedSpeed} (vfa): ___ m/min</Text2>
              </OutputData>
              <OutputData rightOutputData>
                <Text2> {translations.PieceQuantity} (Qp): ___ </Text2>
                <Text2> {translations.CycleTime} (tc): ___ min/pc</Text2>
                <Text2> {translations.RevolutionsNumbers} (U): ___ </Text2>
                <Text2> {translations.RemovalRate} (Qw’): ___ mm3/mm.s</Text2>
                <Text2> {translations.CuttingThickness} (hef): ___ mm</Text2>
                <Text2> {translations.TangentAngle} (γ): ___ °</Text2>
                <Text2> {translations.TangentAngle} RA (γra): ___ °</Text2>
                <Text2> {translations.TangentAngle} RC (γrc) ___ °</Text2>
              </OutputData>
            </Column>
          </ContainerRight>
        </Analysis>
      </Container>
    </Boddy>
  );
}
