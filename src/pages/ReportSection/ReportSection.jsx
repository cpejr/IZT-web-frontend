import { HiSearch } from 'react-icons/hi';

import Report from '../../components/features/Report/Report';
import {
  Container,
  Title,
  ReportsArea,
  ReportsHeader,
  ReportsTitle,
  SearchDiv,
  Search,
} from './Styles';

const data = [
  {
    name: 'Relatório#1',
    analysis: {
      rectification: 'centerless',
      machine: 'robot',
      machineNumber: '724',
      operation: '554',
      department: 'Engenharia',
      accountable: 'Thiago',
    },
    product: {
      product: 'produto1',
      productNumber: '5',
      diameter: '10',
      totalLength: '10',
      electiveLength: '8',
      allowance: '2', // sobremetal
    },
    machineData: {
      RCdiameterMax: '140',
      RCdiameterMin: '140',
      RAdiameter: '100',
      RClength: '50',
      RAlength: '50',
      RCefectiveLength: '10',
      RCrotation: '45',
      RArotation: '7',
      RWinclination: '2',
    },
  },
  {
    name: 'Relatório#2',
    analysis: {
      rectification: 'centerless',
      machine: 'robot',
      machineNumber: '724',
      operation: '554',
      department: 'Engenharia',
      accountable: 'Alexandre',
    },
    product: {
      product: 'produto7',
      productNumber: '5',
      diameter: '10',
      totalLength: '10',
      electiveLength: '8',
      allowance: '2', // sobremetal
    },
    machineData: {
      RCdiameterMax: '140',
      RCdiameterMin: '140',
      RAdiameter: '100',
      RClength: '50',
      RAlength: '50',
      RCefectiveLength: '10',
      RCrotation: '45',
      RArotation: '7',
      RWinclination: '2',
    },
  },
];

export default function ReportSection() {
  return (
    <Container>
      <Title>Relatório</Title>
      <ReportsArea>
        <ReportsHeader>
          <ReportsTitle>Relatório</ReportsTitle>
          <SearchDiv>
            <HiSearch size={25} />
            <Search placeholder="Pesquisar por nome" />
          </SearchDiv>
        </ReportsHeader>
        <Report data={data} />
      </ReportsArea>
    </Container>
  );
}
