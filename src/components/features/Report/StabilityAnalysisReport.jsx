import { useEffect, useState } from 'react';

import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  DataColumn,
  Columns,
  Container,
  ButtonRow,
  DataRow,
  Label,
  Title,
  Data,
  DataContainer,
  ReportName,
  DashedBar,
  ModalStyle,
} from './Styles';

import ModalDeleteStabilityAnalysis from '../ModalDeleteStabilityAnalysis/ModalDeleteStabilityAnalysis';
import { useGetStabilityAnalysis } from '../../../hooks/query/stabilityAnalysis';
import useAuthStore from '../../../stores/auth';

export default function StabilityAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
  const user = useAuthStore((state) => state.auth?.user);
  const [isOpened, setIsOpened] = useState(openedReport === data.name);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  const [modalDeleteStabilityAnalysis, setModalDeleteStabilityAnalysis] =
    useState(false);
  const openModalDeleteStabilityAnalysis = () => {
    setModalDeleteStabilityAnalysis(true);
  };
  const closeModalDeleteStabilityAnalysis = () => {
    setModalDeleteStabilityAnalysis(false);
  };

  useEffect(() => {
    setIsOpened(openedReport === data.name);
  }, [openedReport, data.name]);

  const { data: stabilityAnalysis } = useGetStabilityAnalysis({});
  const userStabilityAnalysis = stabilityAnalysis?.filter(
    (stability) => stability?.user === user?._id
  );
  // if (user?.isAdmin) {
  //   return (
  //     <div>
  //       {stabilityAnalysis?.map((stability) => (
  //         <>
  //           <ReportName
  //             isOpened={isOpened}
  //             onClick={() => handleOpened(data?.name)}
  //           >
  //             {stability?.name}
  //             <DownOutlined />
  //           </ReportName>
  //           <Container isOpened={isOpened}>
  //             <Columns>
  //               <DataColumn>
  //                 <Title>Dados da análise</Title>
  //                 <DataContainer>
  //                   <DataRow>
  //                     <Label>Processo retificação:</Label>
  //                     <Data>{stability?.rectificationProcess}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Máquina:</Label>
  //                     <Data>{stability?.machine}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>N° da máquina:</Label>
  //                     <Data>{stability?.machineNumber}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Operação:</Label>
  //                     <Data>{stability?.operation}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Departamento:</Label>
  //                     <Data>{stability?.department}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Responsável:</Label>
  //                     <Data>{stability?.responsiblePerson}</Data>
  //                   </DataRow>
  //                 </DataContainer>
  //               </DataColumn>
  //               <DashedBar />
  //               <DataColumn>
  //                 <Title>Dados do produto</Title>
  //                 <DataContainer>
  //                   <DataRow>
  //                     <Label>Produto:</Label>
  //                     <Data>{stability?.product}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>N do produto:</Label>
  //                     <Data>{stability?.productNumber}</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Diâmetro:</Label>
  //                     <Data>{stability?.diameter} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Compriment total:</Label>
  //                     <Data>{stability?.totalLength} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Comprimeto eletivo:</Label>
  //                     <Data>{stability?.electiveLength} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Sobremetal:</Label>
  //                     <Data>{stability?.allowance} mm</Data>
  //                   </DataRow>
  //                 </DataContainer>
  //               </DataColumn>
  //               <DashedBar />
  //               <DataColumn>
  //                 <Title>Dados da máquina</Title>
  //                 <DataContainer>
  //                   <DataRow>
  //                     <Label>Diâmetro do RC (min):</Label>
  //                     <Data>{stability?.rcMaxDiameter} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Diâmetro do RC (min):</Label>
  //                     <Data>{stability?.rcMinDiameter} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Diâmetro do RA:</Label>
  //                     <Data>{stability?.raDiameter} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Comprimento RC:</Label>
  //                     <Data>{stability?.rcLength} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Comprimento RA:</Label>
  //                     <Data>{stability?.raLength} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Comprimento efetivo RC:</Label>
  //                     <Data>{stability?.rcEffectiveLength} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Rotação do RC:</Label>
  //                     <Data>{stability?.rcRotation} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Rotação do RA:</Label>
  //                     <Data>{stability?.raRotation} mm</Data>
  //                   </DataRow>
  //                   <DataRow>
  //                     <Label>Inclinação RW:</Label>
  //                     <Data>{stability?.rwInclination}</Data>
  //                   </DataRow>
  //                 </DataContainer>
  //               </DataColumn>
  //             </Columns>
  //             <ButtonRow>
  //               <button type="button">Baixar relatório</button>
  //               <button
  //                 type="button"
  //                 onClick={() => openModalDeleteStabilityAnalysis()}
  //               >
  //                 Excluir
  //               </button>
  //             </ButtonRow>
  //             <ModalStyle
  //               open={modalDeleteStabilityAnalysis}
  //               onCancel={closeModalDeleteStabilityAnalysis}
  //               footer={null}
  //               width={500}
  //               closeIcon={modalCloseButton}
  //               destroyOnClose
  //               centered
  //               bodyStyle={{
  //                 background: '#123645',
  //                 color: 'white',
  //               }}
  //             >
  //               <ModalDeleteStabilityAnalysis
  //                 close={closeModalDeleteStabilityAnalysis}
  //               />
  //             </ModalStyle>
  //           </Container>
  //         </>
  //       ))}
  //     </div>
  //   );
  // } else {
  return (
    <div>
      {userStabilityAnalysis?.map((stability) => (
        <>
          <ReportName
            isOpened={isOpened}
            onClick={() => handleOpened(data?.name)}
          >
            {stability?.name}
            <DownOutlined />
          </ReportName>
          <Container isOpened={isOpened}>
            <Columns>
              <DataColumn>
                <Title>Dados da análise</Title>
                <DataContainer>
                  <DataRow>
                    <Label>Processo retificação:</Label>
                    <Data>{stability?.rectificationProcess}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Máquina:</Label>
                    <Data>{stability?.machine}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>N° da máquina:</Label>
                    <Data>{stability?.machineNumber}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Operação:</Label>
                    <Data>{stability?.operation}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Departamento:</Label>
                    <Data>{stability?.department}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Responsável:</Label>
                    <Data>{stability?.responsiblePerson}</Data>
                  </DataRow>
                </DataContainer>
              </DataColumn>
              <DashedBar />
              <DataColumn>
                <Title>Dados do produto</Title>
                <DataContainer>
                  <DataRow>
                    <Label>Produto:</Label>
                    <Data>{stability?.product}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>N do produto:</Label>
                    <Data>{stability?.productNumber}</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Diâmetro:</Label>
                    <Data>{stability?.diameter} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Compriment total:</Label>
                    <Data>{stability?.totalLength} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Comprimeto eletivo:</Label>
                    <Data>{stability?.electiveLength} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Sobremetal:</Label>
                    <Data>{stability?.allowance} mm</Data>
                  </DataRow>
                </DataContainer>
              </DataColumn>
              <DashedBar />
              <DataColumn>
                <Title>Dados da máquina</Title>
                <DataContainer>
                  <DataRow>
                    <Label>Diâmetro do RC (min):</Label>
                    <Data>{stability?.rcMaxDiameter} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Diâmetro do RC (min):</Label>
                    <Data>{stability?.rcMinDiameter} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Diâmetro do RA:</Label>
                    <Data>{stability?.raDiameter} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Comprimento RC:</Label>
                    <Data>{stability?.rcLength} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Comprimento RA:</Label>
                    <Data>{stability?.raLength} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Comprimento efetivo RC:</Label>
                    <Data>{stability?.rcEffectiveLength} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Rotação do RC:</Label>
                    <Data>{stability?.rcRotation} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Rotação do RA:</Label>
                    <Data>{stability?.raRotation} mm</Data>
                  </DataRow>
                  <DataRow>
                    <Label>Inclinação RW:</Label>
                    <Data>{stability?.rwInclination}</Data>
                  </DataRow>
                </DataContainer>
              </DataColumn>
            </Columns>
            <ButtonRow>
              <button type="button">Baixar relatório</button>
              <button
                type="button"
                onClick={() => openModalDeleteStabilityAnalysis()}
              >
                Excluir
              </button>
            </ButtonRow>
            <ModalStyle
              open={modalDeleteStabilityAnalysis}
              onCancel={closeModalDeleteStabilityAnalysis}
              footer={null}
              width={500}
              closeIcon={modalCloseButton}
              destroyOnClose
              centered
              bodyStyle={{
                background: '#123645',
                color: 'white',
              }}
            >
              <ModalDeleteStabilityAnalysis
                close={closeModalDeleteStabilityAnalysis}
              />
            </ModalStyle>
          </Container>
        </>
      ))}
    </div>
  );
}
// }

StabilityAnalysisReport.propTypes = {
  data: PropTypes.object.isRequired,
  openedReport: PropTypes.string.isRequired,
  handleOpened: PropTypes.func.isRequired,
};
