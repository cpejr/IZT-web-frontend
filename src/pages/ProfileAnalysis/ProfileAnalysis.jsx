import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import {
  Container,
  DataInput,
  Datas,
  DataAnalysis,
  MachineData,
  ProductData,
  RA,
  Text,
} from './Styles';

export default function ProfileAnalysis() {
  return (
    <Container>
      <DataInput>
        <h1>Entrada de dados</h1>
        <Datas>
          <DataAnalysis>
            <Text>Dados da analise</Text>
            <MdOutlineKeyboardArrowDown size={30} color="white" />
          </DataAnalysis>
          <MachineData>
            <Text>Dados da maquina</Text>
            <MdOutlineKeyboardArrowDown size={30} color="white" />
          </MachineData>
          <ProductData>
            <Text>Dados do Produto</Text>
            <MdOutlineKeyboardArrowDown size={30} color="white" />
          </ProductData>
          <RA>
            <Text>RA Parametros de Perfil </Text>
            <MdOutlineKeyboardArrowDown size={30} color="white" />
          </RA>
        </Datas>
      </DataInput>
    </Container>
  );
}
