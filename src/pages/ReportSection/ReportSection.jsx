import { useState } from 'react';

import { HiSearch } from 'react-icons/hi';

import StabilityAnalysisReport from '../../components/features/Report/StabilityAnalysisReport';
import {
  Container,
  Title,
  ReportsArea,
  ReportsHeader,
  ReportsTitle,
  SearchDiv,
  Search,
  Reports,
  TESTEContainer,
} from './Styles';

export default function ReportSection() {
  const [name, setName] = useState('');
  const [opened, setOpened] = useState('');

  async function handleOpened(openedName) {
    setOpened((prevOpened) => (prevOpened === openedName ? '' : openedName));
  }

  return (
    <TESTEContainer>
      <Container>
        <Title>Relatórios</Title>
        <ReportsArea>
          <ReportsHeader>
            <ReportsTitle>Relatório</ReportsTitle>
            <SearchDiv>
              <HiSearch size={25} />
              <Search
                onChange={(e) => setName(e.target.value)}
                placeholder={name || 'Pesquisar por nome'}
              />
            </SearchDiv>
          </ReportsHeader>
          <Reports>
            <StabilityAnalysisReport
              key={name}
              data={name}
              openedReport={opened}
              handleOpened={handleOpened}
            />
          </Reports>
        </ReportsArea>
      </Container>
    </TESTEContainer>
  );
}
