import { useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';

import AccordionDemo from '../../components/features/Acordeon/Acordeon';
import Graphic from '../../components/features/Graphic/Graphic';
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

  const handleCalculate = (data) => {
    const xData = data.x;
    const yData = data.y;

    setGraphData({ x: xData, y: yData });
  };

  return (
    <Boddy>
      <Container>
        <Containerleft>
          <Center>
            <H1>Entrada de Dados</H1>
            <Data>
              <AccordionDemo onCalculate={handleCalculate} />
            </Data>
          </Center>
        </Containerleft>
        <Analysis>
          <H1>
            Analise #1 <HiOutlinePencil size={20} color="white" />{' '}
            <Button>Salvar relatório</Button>
          </H1>
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
