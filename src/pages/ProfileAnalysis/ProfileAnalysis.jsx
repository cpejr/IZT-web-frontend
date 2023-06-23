import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {HiOutlinePencil} from 'react-icons/hi';

import {
  Container,
  Column,
  Center,
  Text,
  Hw,
  Hd,
  Analysis,
  Container2,
  OutputData,
  Adr,
  InclDresser,
  RullerDegree,
  Nr1,
  Nr2,
  Vp,
  Vfa,
  Edit,
  Text2,
  Qp,
  Tc,
  U,
  Qw,
  Hef,
  Y,
  InputData,
  Yra,
  Yrc,
  Data,
  Containerleft,
  ContainerRight,
  Button,
  H1,
  Boddy
} from './Styles';
import AccordionDemo from './Arcoordeon';
export default function ProfileAnalysis() {
  return (
   <Boddy>
    <Container>
      <Containerleft>
        <Center>
         <H1>Entrada de Dados</H1 >
           <Data>
              <AccordionDemo/>
                </Data>
                <Data>
              <Button> Calcular </Button>
               </Data>  
         </Center>
      </Containerleft>
        <Analysis>
        <H1>Analise #1 <HiOutlinePencil size={20} color="white"/> <Button>Salvar relatório</Button></H1> 
        <Edit>
          <Text>Vão de retificação centerless de passagem </Text>
        <Container2></Container2>
          <Text>Dados de saída</Text>
        </Edit>
        <ContainerRight>
      <Column>
        <OutputData>
          <Hw>
           <Text2> Altura entre centros (hw): ___ mm</Text2>
          </Hw>
          <Hd>
          <Text2>Altura do dessador (hd): ___ mm</Text2>
          </Hd>
          <Adr>
             <Text2>Inclinação do RA (adr): ___ °</Text2>
          </Adr>
          <InclDresser>
          <Text2>Inclinação do dressador: ___ °</Text2>
            </InclDresser>
          <RullerDegree>
          <Text2>Ângulo da régua (β): ___ °</Text2>
          </RullerDegree>
          <Nr1>
          <Text2>Rotação do rebolo de arraste (nr): ___ rpm</Text2>
          </Nr1>
          <Nr2>
          <Text2>Rotação do rebolo de arraste (nr): ___ rps</Text2>
          </Nr2>
          <Vp>
          <Text2>Velocidade periférica da peça (vp): ___ m/s</Text2>
          </Vp>
          <Vfa>
          <Text2>Velocidade de passagem da peça (vfa): ___ m/min</Text2>
          </Vfa>
        </OutputData>
        <OutputData>
        <Qp>
           <Text2> Quantidade de peça (Qp): ___ </Text2>
          </Qp>
        <Tc>
           <Text2> Tempo de ciclo (tc): ___ min/pc</Text2>
          </Tc>
        <U>
           <Text2> Nr. revoluções da peça (U): ___ </Text2>
          </U>
        <Qw>
           <Text2> Taxa de remoção (Qw’): ___ mm3/mm.s</Text2>
          </Qw>
        <Hef>
           <Text2> Espessura de corte (hef): ___ mm</Text2>
          </Hef>
        <Y>
           <Text2> Ângulo de tangêcia (γ): ___ °</Text2>
          </Y>
        <Yra>
           <Text2> Ângulo de tangência RA (γra): ___ °</Text2>
          </Yra>
        <Yrc>
           <Text2> Ângulo de tangência RC (γrc) ___ °</Text2>
          </Yrc>
        </OutputData>
        </Column>
        </ContainerRight>
        </Analysis>
    </Container>
 </Boddy> 
  
  );
}
