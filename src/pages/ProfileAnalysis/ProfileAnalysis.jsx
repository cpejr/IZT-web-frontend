import { useState } from 'react';

import { TbPencil } from 'react-icons/tb';

import AccordionDemo from '../../components/features/Acordeon/Acordeon';
import Graphic from '../../components/features/Graphic/Graphic';
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
} from './Styles';

export default function ProfileAnalysis() {
  const [graphData, setGraphData] = useState({ x: [], y: [] });
  const [inputData, setInputData] = useState({});

  const handleCalculate = (data) => {
    const xData = data.x;
    const yData = data.y;

    setGraphData({ x: xData, y: yData });
    setInputData(data);
  };

  const handleInputData = (data) => {
    setInputData(data);
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
                dataInput={handleInputData}
              />
            </Data>
          </Center>
        </Containerleft>
        <Analysis>
          <H1>
            <DivName>
              <TbPencil size={25} style={{ color: 'white' }} />
              <InputName
                id="name"
                name="name"
                type="text"
                placeholder="Insira o nome do relatório"
                // error={errors?.name?.message}
                // {...register('name')}
              />
            </DivName>
            <Button>Salvar relatório</Button>
          </H1>
          <ErrorMessage>{/* {errors?.name?.message} */}</ErrorMessage>
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
                <Text2>
                  Altura entre centros (hw):{' '}
                  {inputData?.hwCenterHeight || '___'} mm
                </Text2>
                <Text2>
                  Altura do dessador (hd): {inputData?.dresserHeight || '___'}
                  mm
                </Text2>

                <Text2>
                  Inclinação do RA (adr): {inputData?.raInclination || '---'} °
                </Text2>

                <Text2>
                  Inclinação do dressador:{' '}
                  {inputData?.raDresserInclination || '___'} °
                </Text2>

                <Text2>
                  Ângulo da régua (β): {inputData?.angleRuler || '___'} °
                </Text2>

                <Text2>Rotação do rebolo de arraste (nr): ___ rpm</Text2>

                <Text2>Rotação do rebolo de arraste (nr): ___ rps</Text2>

                <Text2>Velocidade periférica da peça (vp): ___ m/s</Text2>
              </OutputData>
              <OutputData rightOutputData>
                <Text2>Velocidade de passagem da peça (vfa): ___ m/min</Text2>

                <Text2> Quantidade de peça (Qp): ___ </Text2>

                <Text2> Tempo de ciclo (tc): ___ min/pc</Text2>

                <Text2> Nr. revoluções da peça (U): ___ </Text2>

                <Text2> Taxa de remoção (Qw’): ___ mm3/mm.s</Text2>

                <Text2> Espessura de corte (hef): ___ mm</Text2>

                <Text2> Ângulo de tangêcia (γ): ___ °</Text2>
              </OutputData>
            </Column>
          </ContainerRight>
        </Analysis>
      </Container>
    </Boddy>
  );
}
