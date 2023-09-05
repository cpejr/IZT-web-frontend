/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

import Graphic from '../Graphic/Graphic';
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
} from './Styles';

export default function ProfileAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
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
              <Title>Dados da análise</Title>
              <DataContainer>
                <DataRow>
                  <Label>Processo retificação:</Label>
                  <Data>{data?.rectificationProcess}</Data>
                </DataRow>
                <DataRow>
                  <Label>Máquina:</Label>
                  <Data>{data?.machine}</Data>
                </DataRow>
                <DataRow>
                  <Label>N° da máquina:</Label>
                  <Data>{data?.machineNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>Operação:</Label>
                  <Data>{data?.operation}</Data>
                </DataRow>
                <DataRow>
                  <Label>Departamento:</Label>
                  <Data>{data?.department}</Data>
                </DataRow>
                <DataRow>
                  <Label>Responsável:</Label>
                  <Data>{data?.responsiblePerson}</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
            <DashedBar />
            <DataColumn>
              <Title>Dados do produto</Title>
              <DataContainer>
                <DataRow>
                  <Label>Produto:</Label>
                  <Data>{data?.product}</Data>
                </DataRow>
                <DataRow>
                  <Label>N do produto:</Label>
                  <Data>{data?.productNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro:</Label>
                  <Data>{data?.diameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Compriment total:</Label>
                  <Data>{data?.totalLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimeto eletivo:</Label>
                  <Data>{data?.electiveLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Sobremetal:</Label>
                  <Data>{data?.allowance} mm</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
          </Row>
          <DashedBar />
          <Row>
            <DataColumn>
              <Title>Dados da máquina</Title>
              <DataContainer>
                <DataRow>
                  <Label>Diâmetro do RC (min):</Label>
                  <Data>{data?.rcMaxDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro do RC (min):</Label>
                  <Data>{data?.rcMinDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro do RA:</Label>
                  <Data>{data?.raDiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento RC:</Label>
                  <Data>{data?.rcLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento RA:</Label>
                  <Data>{data?.raLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento efetivo RC:</Label>
                  <Data>{data?.rcEffectiveLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Rotação do RC:</Label>
                  <Data>{data?.rcRotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Rotação do RA:</Label>
                  <Data>{data?.raRotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Inclinação RW:</Label>
                  <Data>{data?.rwInclination}</Data>
                </DataRow>
                <DashedBar />
              </DataContainer>
            </DataColumn>
            <DashedBar />
            <DataColumn>
              <Title>RA parâmetro de perfil</Title>
              <DataContainer>
                <DataRow>
                  <Label>Altura entre centros hw: (min):</Label>
                  <Data>{data?.hwCenterHeight} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Inclinação do RA: (min):</Label>
                  <Data>{data?.raInclination} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Altura do dressador:</Label>
                  <Data>{data?.dresserHeight} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Sobremetal:</Label>
                  <Data>{data?.allowance} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Posição do dressador:</Label>
                  <Data>{data?.dresserPosition} mm</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
          </Row>
        </Columns>
        <Graphic data={data} />
        <ButtonRow>
          <button type="button" onClick={saveFile}>
            Baixar Relatório
          </button>
          <button
            type="button"
            onClick={() => openModalDeleteProfileAnalysis(data?._id)}
          >
            Excluir
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
