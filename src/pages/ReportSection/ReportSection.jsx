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

// const profileReport = [
//   {
//     name: 'Relatório#1',
//     analysis: {
//       rectification: 'centerless',
//       machine: 'robot',
//       machineNumber: '724',
//       operation: '554',
//       department: 'Engenharia',
//       accountable: 'Thiago',
//     },
//     product: {
//       product: 'produto1',
//       productNumber: '5',
//       diameter: '10',
//       totalLength: '10',
//       electiveLength: '8',
//       allowance: '2', // sobremetal
//     },
//     machineData: {
//       RCdiameterMax: '140',
//       RCdiameterMin: '140',
//       RAdiameter: '100',
//       RClength: '50',
//       RAlength: '50',
//       RCefectiveLength: '10',
//       RCrotation: '45',
//       RArotation: '7',
//       RWinclination: '2',
//     },
//   },
// ];

export default function ReportSection() {
  const [name, setName] = useState('');

  const [openedStabilityAnalysis, setOpenedStabilityAnalysis] = useState('');
  // const [openedProfileAnalysis, setOpenedProfileAnalysis] = useState('');

  function handleOpenedStabilityAnalysis(openedName) {
    if (openedStabilityAnalysis === openedName) {
      setOpenedStabilityAnalysis('');
    } else {
      setOpenedStabilityAnalysis(openedName);
      // setOpenedProfileAnalysis(''); // Close the other dropdown if it's open
    }
  }

  // function handleOpenedProfileAnalysis(openedName) {
  //   if (openedProfileAnalysis === openedName) {
  //     setOpenedProfileAnalysis('');
  //   } else {
  //     setOpenedProfileAnalysis(openedName);
  //     setOpenedStabilityAnalysis(''); // Close the other dropdown if it's open
  //   }
  // }

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
                    key={report.name}
                    data={report}
                    openedReport={openedStabilityAnalysis}
                    handleOpened={handleOpenedStabilityAnalysis}
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
            </Reports>
          )}
        </ReportsArea>
      </Container>
    </TESTEContainer>
  );
}
