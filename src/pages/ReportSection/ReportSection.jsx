import { useState } from 'react';

import { HiSearch } from 'react-icons/hi';

import StabilityAnalysisReport from '../../components/features/Report/StabilityAnalysisReport';
import { useGetStabilityAnalysis } from '../../hooks/query/stabilityAnalysis';
import useAuthStore from '../../stores/auth';
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
    setOpened(openedName === opened ? '' : openedName);
  }
  const user = useAuthStore((state) => state.auth?.user);
  const { data } = useGetStabilityAnalysis({});

  const userStabilityAnalysis = data?.filter(
    (stability) => stability?.user === user?._id
  );

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
          {user?.isAdmin ? (
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
          ) : (
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
          )}
        </ReportsArea>
      </Container>
    </TESTEContainer>
  );
}
