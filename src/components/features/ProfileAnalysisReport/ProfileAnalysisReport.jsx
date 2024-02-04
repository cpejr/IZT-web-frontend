/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import ProfileAnalysisGraph from '../Graphic/ProfileAnalysisGraph';
import ModalDeleteProfileAnalysis from '../ModalDeleteProfileAnalysis/ModalDeleteProfileAnalysis';
import ProfilePDF from '../PDF/ProfileAnalysisPDF';
import {
  DataColumn,
  Columns,
  Container,
  ButtonRow,
  Row,
  DataRow,
  Label,
  Title,
  Icon,
  Data,
  DataContainer,
  ReportName,
  DashedBar,
  ModalStyle,
  RowDiagram,
  Diagram,
} from './Styles';
import { TranslateText } from './translations';

export default function ProfileAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isOpened, setIsOpened] = useState(openedReport === data._id);

  useEffect(() => {
    setIsOpened(openedReport === data._id);
  }, [openedReport, data._id]);
  const [profileId, setProfileId] = useState('');
  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  const [modalDeleteProfileAnalysis, setModalDeleteProfileAnalysis] =
    useState(false);
  const openModalDeleteProfileAnalysis = (_id) => {
    setProfileId(_id);
    setModalDeleteProfileAnalysis(true);
  };
  const closeModalDeleteProfileAnalysis = () => {
    setModalDeleteProfileAnalysis(false);
  };

  const saveFile = () => {
    pdf(<ProfilePDF data={data} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${data?.name}.pdf`));
  };
  return (
    <div>
      <ReportName isOpened={isOpened} onClick={() => handleOpened(data._id)}>
        {data?.name}
        <Icon>
          <DownOutlined />
        </Icon>
      </ReportName>
      <Container isOpened={isOpened}>
        <Columns>
          <Row>
            <DataColumn>
              <Title>{translations.analysisData}</Title>
              <DataContainer>
                <DataRow>
                  <Label>{translations.rectificationProcess}:</Label>
                  <Data>{data?.rectificationProcess}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.machine}:</Label>
                  <Data>{data?.machine}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.machineNumber}:</Label>
                  <Data>{data?.machineNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.operation}:</Label>
                  <Data>{data?.operation}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.department}:</Label>
                  <Data>{data?.department}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.responsiblePerson}:</Label>
                  <Data>{data?.responsiblePerson}</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
            <DashedBar />
            <DataColumn>
              <Title>{translations.productData}</Title>
              <DataContainer>
                <DataRow>
                  <Label>{translations.product}:</Label>
                  <Data>{data?.product}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.productNumber}:</Label>
                  <Data>{data?.productNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.diameter}:</Label>
                  <Data>{data?.diameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.totalLength}:</Label>
                  <Data>{data?.totalLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.electiveLength}:</Label>
                  <Data>{data?.electiveLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.allowance}:</Label>
                  <Data>{data?.allowance} mm</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
          </Row>
          <DashedBar />
          <Row>
            <DataColumn>
              <Title>{translations.machineData}</Title>
              <DataContainer>
                <DataRow>
                  <Label>{translations.rcMaxDiameter} (min):</Label>
                  <Data>{data?.rcMaxDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.rcMinDiameter} (min):</Label>
                  <Data>{data?.rcMinDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.raDiameter}:</Label>
                  <Data>{data?.raDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.rcLength}:</Label>
                  <Data>{data?.rcLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.raLength}:</Label>
                  <Data>{data?.raLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.rcEffectiveLength}:</Label>
                  <Data>{data?.rcEffectiveLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.rcRotation}:</Label>
                  <Data>{data?.rcRotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.raRotation}:</Label>
                  <Data>{data?.raRotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.rwInclination}:</Label>
                  <Data>{data?.rwInclination}</Data>
                </DataRow>
                <DashedBar />
              </DataContainer>
            </DataColumn>
            <DashedBar />
            <DataColumn>
              <Title>{translations.rAprofileparameter}</Title>
              <DataContainer>
                <DataRow>
                  <Label>{translations.rwInclination}: (min):</Label>
                  <Data>{data?.hwCenterHeight} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.raInclination}: (min):</Label>
                  <Data>{data?.raInclination} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.dresserHeight}:</Label>
                  <Data>{data?.dresserHeight} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.allowance}:</Label>
                  <Data>{data?.allowance} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>{translations.dresserPosition}:</Label>
                  <Data>{data?.dresserPosition} mm</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
          </Row>
        </Columns>
        <RowDiagram>
          <Diagram>
            <Title>{translations.tfCenterlessGrindingGap}</Title>
            <ProfileAnalysisGraph
              data={data?.profileAnalysisDiagram?.retificationCenterlessDiagram}
              globalLanguage={globalLanguage}
            />
          </Diagram>
          <DashedBar />
          <DataColumn>
            <Title>{translations.outputData}</Title>
            <DataContainer>
              <DataRow>
                <Label>{translations.radragRotationnr}: (nr)</Label>
                <Data>{data?.radragRotationnr} rps</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.peripheralSpeed} (vp):</Label>
                <Data>{data?.peripheralSpeed} m/s</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.passingSpeed} (vfa):</Label>
                <Data>{data?.passingSpeed} m/min</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.partQuantity} (Qp):</Label>
                <Data>{data?.partQuantity} </Data>
              </DataRow>
              <DataRow>
                <Label>{translations.cycleTime} (tc):</Label>
                <Data>{data?.cycleTime} min/pc</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.revolution}:</Label>
                <Data>{data?.revolution} min/pc</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.removeRate}:</Label>
                <Data>{data?.removeRate} mm3/mm.s</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.cutThickness}:</Label>
                <Data>{data?.cutThickness} mm</Data>
              </DataRow>
            </DataContainer>
          </DataColumn>
        </RowDiagram>

        <ButtonRow>
          <button type="button" onClick={saveFile}>
            {translations.download}
          </button>
          <button
            type="button"
            onClick={() => openModalDeleteProfileAnalysis(data?._id)}
          >
            {translations.destroy}
          </button>
        </ButtonRow>
        <ModalStyle
          open={modalDeleteProfileAnalysis}
          onCancel={closeModalDeleteProfileAnalysis}
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
          <ModalDeleteProfileAnalysis
            _id={profileId}
            close={closeModalDeleteProfileAnalysis}
            globalLanguage={globalLanguage}
          />
        </ModalStyle>
      </Container>
    </div>
  );
}

ProfileAnalysisReport.propTypes = {
  data: PropTypes.object.isRequired,
  openedReport: PropTypes.string.isRequired,
  handleOpened: PropTypes.func.isRequired,
};
