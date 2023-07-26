import { useState } from 'react';

import { HiSearch } from 'react-icons/hi';

import ProfileAnalysisReport from '../../components/features/ProfileAnalysisReport/ProfileAnalysisReport';
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
  const [openedStabilityAnalysis, setOpenedStabilityAnalysis] = useState('');
  const [openedProfileAnalysis, setOpenedProfileAnalysis] = useState('');

  function handleOpenedStabilityAnalysis(openedName) {
    if (openedStabilityAnalysis === openedName) {
      setOpenedStabilityAnalysis('');
    } else {
      setOpenedStabilityAnalysis(openedName);
      setOpenedProfileAnalysis(''); // Close the other dropdown if it's open
    }
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
