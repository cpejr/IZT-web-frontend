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
import {
  buildCalculateStabilityAnalysisErrorMessage,
  saveProfileAnalysisValidationSchema,
} from './utilsSave';

export default function ProfileAnalysis() {
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
      const errorMessage = buildCalculateStabilityAnalysisErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const handleformDataStorage = (data) => {
    setFormDataStorage(data);
  };
  useEffect(() => {}, [formDataStorage]);
  const user = useAuthStore((state) => state.auth?.user);

  const {
    handleSubmit: save,
    register,
    formState: { errors: error },
  } = useForm({
    defaultValues: formDataStorage,
    resolver: zodResolver(saveProfileAnalysisValidationSchema),
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
            <H1>Entrada de Dados</H1>
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
                  placeholder="Insira o nome do relatório"
                  error={error?.name?.message}
                  {...register('name')}
                />
              </DivName>
              <Button>Salvar relatório</Button>
            </H1>
            <ErrorMessage>{error?.name?.message}</ErrorMessage>
          </DataEntry>
          <Edit>
            <Text>Vão de retificação centerless de passagem </Text>
            <Container2>
              <Graphic data={graphData} />
            </Container2>
            <Text>Dados de saída</Text>
          </Edit>
          <ContainerRight>
            <Column>
              <OutputData>
                <Text2> Altura entre centros (hw): ___ mm</Text2>
                <Text2>Altura do dessador (hd): ___ mm</Text2>
                <Text2>Inclinação do RA (adr): ___ °</Text2>
                <Text2>Inclinação do dressador: ___ °</Text2>
                <Text2>Ângulo da régua (β): ___ °</Text2>
                <Text2>Rotação do rebolo de arraste (nr): ___ rpm</Text2>
                <Text2>Rotação do rebolo de arraste (nr): ___ rps</Text2>
                <Text2>Velocidade periférica da peça (vp): ___ m/s</Text2>
                <Text2>Velocidade de passagem da peça (vfa): ___ m/min</Text2>
              </OutputData>
              <OutputData rightOutputData>
                <Text2> Quantidade de peça (Qp): ___ </Text2>
                <Text2> Tempo de ciclo (tc): ___ min/pc</Text2>
                <Text2> Nr. revoluções da peça (U): ___ </Text2>
                <Text2> Taxa de remoção (Qw’): ___ mm3/mm.s</Text2>
                <Text2> Espessura de corte (hef): ___ mm</Text2>
                <Text2> Ângulo de tangêcia (γ): ___ °</Text2>
                <Text2> Ângulo de tangência RA (γra): ___ °</Text2>
                <Text2> Ângulo de tangência RC (γrc) ___ °</Text2>
              </OutputData>
            </Column>
          </ContainerRight>
        </Analysis>
      </Container>
    </Boddy>
  );
}
