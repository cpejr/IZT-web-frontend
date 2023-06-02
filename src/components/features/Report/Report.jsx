import { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
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
} from './Styles';

export default function Report({ data }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const analysisDataList = Object.entries(data.analysis);
  const productDataList = data.product;
  const machineDataList = data.machineData;

  // if (!isFocused) {
  //   return null; // Retorna null se blur for true e o componente não estiver focado
  // }
  return (
    <div>
      <ReportName onClick={handleFocus} onBlur={handleBlur}>
        {data.name}
        <DownOutlined />
      </ReportName>
      <Container focused={isFocused}>
        <Columns>
          <DataColumn>
            <Title>Dados da análise</Title>
            <DataContainer>
              {analysisDataList.map((analysisData) => {
                return (
                  <DataRow key={analysisData[0]}>
                    <Label>{analysisData[0]}:</Label>
                    <Data>{analysisData[1]}</Data>
                  </DataRow>
                );
              })}
            </DataContainer>
          </DataColumn>
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
            </DataContainer>
          </DataColumn>
        </Columns>
        <ButtonRow>
          <button type="button">Baixar diagrama</button>
          <button type="button">Baixar relatório</button>
          <button type="button">Excluir</button>
        </ButtonRow>
      </Container>
    </div>
  );
}

Report.propTypes = {
  data: PropTypes.object.isRequired,
};
