/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import StabilityGraph from '../Graphic/StabilityGraph';
import ModalDeleteStabilityAnalysis from '../ModalDeleteStabilityAnalysis/ModalDeleteStabilityAnalysis';
import StabilityPDF from '../PDF/StabilityAnalysisPDF';
import {
  DataColumn,
  Columns,
  GraphsDiv,
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
import { TranslateText } from './translations';

export default function StabilityAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const [isOpened, setIsOpened] = useState(openedReport === data);

  useEffect(() => {
    setIsOpened(openedReport === data);
  }, [openedReport, data]);
  const [stabilityId, setStabilityId] = useState('');
  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  const [modalDeleteStabilityAnalysis, setModalDeleteStabilityAnalysis] =
    useState(false);
  const openModalDeleteStabilityAnalysis = (_id) => {
    setStabilityId(_id);
    setModalDeleteStabilityAnalysis(true);
  };
  const closeModalDeleteStabilityAnalysis = () => {
    setModalDeleteStabilityAnalysis(false);
  };

  const saveFile = () => {
    pdf(<StabilityPDF data={data} />)
      .toBlob()
      .then((blob) => saveAs(blob, `${data?.name}.pdf`));
  };

  return (
    <div>
      <ReportName isOpened={isOpened} onClick={() => handleOpened(data)}>
        {data.name}
        <DownOutlined />
      </ReportName>
      <Container isOpened={isOpened}>
        <Columns>
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
          <DashedBar />
          <DataColumn>
            <Title>{translations.machineData}</Title>
            <DataContainer>
              <DataRow>
                <Label>{translations.rcMaxDiameter} (max):</Label>
                <Data>{data?.rcMaxDiameter} mm</Data>
              </DataRow>
              <DataRow>
                <Label>{translations.rcMaxDiameter} (min):</Label>
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
            </DataContainer>
          </DataColumn>
        </Columns>
        <GraphsDiv>
          <div>
            <Title>{translations.stabilityChart}</Title>
            <StabilityGraph data={data?.processStabilityDiagram} />
          </div>
          <div>
            <Title>{translations.heightStabilityChart}</Title>
            <StabilityGraph data={data?.partHeightStabilityDiagram} />
          </div>
        </GraphsDiv>
        <ButtonRow>
          <button type="button" onClick={saveFile}>
            {translations.download}
          </button>
          <button
            type="button"
            onClick={() => openModalDeleteStabilityAnalysis(data?._id)}
          >
            {translations.destroy}
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
            _id={stabilityId}
            close={closeModalDeleteStabilityAnalysis}
            globalLanguage={globalLanguage}
          />
        </ModalStyle>
      </Container>
    </div>
  );
}

StabilityAnalysisReport.propTypes = {
  data: PropTypes.object.isRequired,
  openedReport: PropTypes.string.isRequired,
  handleOpened: PropTypes.func.isRequired,
};
