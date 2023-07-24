import { useEffect, useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  DataColumn,
  Columns,
  Container,
  ButtonRow,
  DataRow,
  Row,
  Label,
  Title,
  Data,
  DataContainer,
  ReportName,
  DashedBar,
  DataContainer2,
} from './Styles';

export default function StabilityAnalysisReport({
  data,
  openedReport,
  handleOpened,
}) {
  const [isOpened, setIsOpened] = useState(openedReport === data.name);

  const analysisDataList = data.analysis;
  const productDataList = data.product;
  const machineDataList = data.machineData;

  useEffect(() => {
    setIsOpened(openedReport === data.name);
  }, [openedReport, data.name]);

  return (
    <div>
      <ReportName isOpened={isOpened} onClick={() => handleOpened(data.name)}>
        {data.name}
        <DownOutlined />
      </ReportName>
      <Container isOpened={isOpened}>
        <Columns>
          <Row>
            <DataColumn>
              <Title>Dados da análise</Title>
              <DataContainer>
                <DataRow>
                  <Label>Processo retificação:</Label>
                  <Data>{analysisDataList.rectification}</Data>
                </DataRow>
                <DataRow>
                  <Label>Máquina:</Label>
                  <Data>{analysisDataList.machine}</Data>
                </DataRow>
                <DataRow>
                  <Label>N° da máquina:</Label>
                  <Data>{analysisDataList.machineNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>Operação:</Label>
                  <Data>{analysisDataList.operation}</Data>
                </DataRow>
                <DataRow>
                  <Label>Departamento:</Label>
                  <Data>{analysisDataList.department}</Data>
                </DataRow>
                <DataRow>
                  <Label>Responsável:</Label>
                  <Data>{analysisDataList.accountable}</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
            <DashedBar />
            <DataColumn>
              <Title>Dados do produto</Title>
              <DataContainer>
                <DataRow>
                  <Label>Produto:</Label>
                  <Data>{productDataList.product}</Data>
                </DataRow>
                <DataRow>
                  <Label>N do produto:</Label>
                  <Data>{productDataList.productNumber}</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro:</Label>
                  <Data>{productDataList.diameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Compriment total:</Label>
                  <Data>{productDataList.totalLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimeto eletivo:</Label>
                  <Data>{productDataList.electiveLength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Sobremetal:</Label>
                  <Data>{productDataList.allowance} mm</Data>
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
                  <Data>{machineDataList.RCdiameterMax} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro do RC (min):</Label>
                  <Data>{machineDataList.RCdiameterMin} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Diâmetro do RA:</Label>
                  <Data>{machineDataList.RAdiameter} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento RC:</Label>
                  <Data>{machineDataList.RClength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento RA:</Label>
                  <Data>{machineDataList.RAlength} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Comprimento efetivo RC:</Label>
                  <Data>{machineDataList.RCefectiveLength} mm</Data>
                </DataRow>
              </DataContainer>
            </DataColumn>
            <DataColumn>
              <DataContainer2>
                <DataRow>
                  <Label>Rotação do RC:</Label>
                  <Data>{machineDataList.RCrotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Rotação do RA:</Label>
                  <Data>{machineDataList.RArotation} mm</Data>
                </DataRow>
                <DataRow>
                  <Label>Inclinação RW:</Label>
                  <Data>{machineDataList.RWinclination}</Data>
                </DataRow>
              </DataContainer2>
            </DataColumn>
          </Row>
        </Columns>
        <ButtonRow>
          <button type="button">Baixar relatório</button>
          <button type="button">Excluir</button>
        </ButtonRow>
      </Container>
    </div>
  );
}

StabilityAnalysisReport.propTypes = {
  data: PropTypes.object.isRequired,
  openedReport: PropTypes.string.isRequired,
  handleOpened: PropTypes.func.isRequired,
};
