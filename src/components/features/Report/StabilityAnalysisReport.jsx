/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';

import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';

import ModalDeleteStabilityAnalysis from '../ModalDeleteStabilityAnalysis/ModalDeleteStabilityAnalysis';
import StabilityPDF from '../PDF/StabilityAnalysisPDF';
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
  TestDivImages,
} from './Styles';

export default function StabilityAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
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

  const [baseImage, setBaseImage] = useState('');

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      console.log('O link eh', fileReader);

      fileReader.onload = () => {
        resolve(fileReader.readyState);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(baseImage);
  };

  const imageUrl = data?.processImage[0].url;

  // console.log('A URL da imagem eh:', imageUrl);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br />
      <img src={baseImage} height="200px" alt="oizim" />

      <ReportName isOpened={isOpened} onClick={() => handleOpened(data)}>
        {data.name}
        <DownOutlined />
      </ReportName>
      <Container isOpened={isOpened}>
        <Columns>
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
          <DashedBar />
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
            </DataContainer>
          </DataColumn>
        </Columns>
        <TestDivImages>
          {/* Testando visualização das imagens --> Apagar quando estiver funcionando no PDF */}
          <img
            width={500}
            height={300}
            src={data?.processImage[0].url}
            alt="Process Image Graph"
          />
          <img
            width={500}
            height={300}
            src={data?.partHeightImage[0].url}
            alt="Part Height Image graph"
          />
        </TestDivImages>

        <ButtonRow>
          <button type="button" onClick={saveFile}>
            Baixar Relatório
          </button>
          <button
            type="button"
            onClick={() => openModalDeleteStabilityAnalysis(data?._id)}
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
            _id={stabilityId}
            close={closeModalDeleteStabilityAnalysis}
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
