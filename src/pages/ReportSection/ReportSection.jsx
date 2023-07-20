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
import { useGetStabilityAnalysis } from '../../hooks/query/stabilityAnalysis';
import useAuthStore from '../../stores/auth';

export default function ReportSection() {
  async function handleOpened(openedName) {
    setOpened(openedName === opened ? '' : openedName);
  }
  const user = useAuthStore((state) => state.auth?.user);
  const { data: data } = useGetStabilityAnalysis({});
  const userStabilityAnalysis = data?.filter(
    (stability) => stability?.user === user?._id
  );

  const [name, setName] = useState('');
  const [opened, setOpened] = useState('');

  if (user?.isAdmin) {
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
              {data?.map((report) => {
                return (
                  <StabilityAnalysisReport
                    key={report}
                    data={report}
                    openedReport={opened}
                    handleOpened={handleOpened}
                  />
                );
              })}
            </Reports>
          </ReportsArea>
        </Container>
      </TESTEContainer>
    );
  } else {
    return (
      <TESTEContainer>
        <Container>
          <Title>Relatórios</Title>
          <ReportsArea>
            <ReportsHeader>
              <ReportsTitle>Relatório</ReportsTitle>
              <SearchDiv>
                <HiSearch size={25} />
                <SearchDiv
                  onChange={(e) => setName(e.target.value)}
                  placeholder={name || 'Pesquisar por nome'}
                />
              </SearchDiv>
            </ReportsHeader>
            <Reports>
              {userStabilityAnalysis?.map((report) => {
                return (
                  <StabilityAnalysisReport
                    key={report}
                    data={report}
                    openedReport={opened}
                    handleOpened={handleOpened}
                  />
                );
              })}
            </Reports>
          </ReportsArea>
        </Container>
      </TESTEContainer>
    );
  }
}
