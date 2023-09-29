import { useState } from 'react';

import { HiSearch } from 'react-icons/hi';

import ProfileAnalysisReport from '../../components/features/ProfileAnalysisReport/ProfileAnalysisReport';
import StabilityAnalysisReport from '../../components/features/Report/StabilityAnalysisReport';
import { useSearchByNameProfileAnalysis } from '../../hooks/query/profileAnalysis';
import { useSearchByNameStabilityAnalysis } from '../../hooks/query/stabilityAnalysis';
import useDebounce from '../../hooks/useDebounce';
import useAuthStore from '../../stores/auth';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';

export default function ReportSection() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [name, setName] = useState('');
  const debouncedName = useDebounce(name);

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

  function handleOpenedProfileAnalysis(openedName) {
    if (openedProfileAnalysis === openedName) {
      setOpenedProfileAnalysis('');
    } else {
      setOpenedProfileAnalysis(openedName);
      setOpenedStabilityAnalysis(''); // Close the other dropdown if it's open
    }
  }

  const { data: stabilityAnalysisData } = useSearchByNameStabilityAnalysis({
    name: debouncedName,
  });
  const { data: profileAnalysisData } = useSearchByNameProfileAnalysis({
    name: debouncedName,
  });

  const user = useAuthStore((state) => state.auth?.user);

  const userStabilityAnalysis = stabilityAnalysisData?.filter(
    (stability) => stability?.user === user?._id
  );
  const userProfileAnalysis = profileAnalysisData?.filter(
    (profile) => profile?.userId === user?._id
  );
  return (
    <TESTEContainer>
      <Container>
        <Title>{translations.Reports}</Title>
        <ReportsArea>
          <ReportsHeader>
            <ReportsTitle>{translations.Report}</ReportsTitle>
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
              {stabilityAnalysisData?.map((report) => {
                return (
                  <StabilityAnalysisReport
                    key={report.name}
                    data={report}
                    openedReport={openedStabilityAnalysis}
                    handleOpened={handleOpenedStabilityAnalysis}
                  />
                );
              })}
              {profileAnalysisData?.map((report) => {
                return (
                  <ProfileAnalysisReport
                    key={report.name}
                    data={report}
                    openedReport={openedProfileAnalysis}
                    handleOpened={handleOpenedProfileAnalysis}
                  />
                );
              })}
            </Reports>
          ) : (
            <Reports>
              {userStabilityAnalysis?.map((report) => {
                return (
                  <StabilityAnalysisReport
                    key={report.name}
                    data={report}
                    openedReport={openedStabilityAnalysis}
                    handleOpened={handleOpenedStabilityAnalysis}
                  />
                );
              })}
              {userProfileAnalysis?.map((report) => {
                return (
                  <ProfileAnalysisReport
                    key={report.name}
                    data={report}
                    openedReport={openedProfileAnalysis}
                    handleOpened={handleOpenedProfileAnalysis}
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
