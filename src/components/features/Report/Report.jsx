import { useState, useEffect, useRef } from 'react';

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
  const reportRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (reportRef.current && !reportRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    const { parentElement } = reportRef.current;
    parentElement.addEventListener('click', handleClickOutside);

    return () => {
      parentElement.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const analysisDataList = data.analysis;
  const productDataList = data.product;
  const machineDataList = data.machineData;

  return (
    <div ref={reportRef} id={data.name}>
      <ReportName onClick={handleFocus} isFocused={isFocused}>
        {data.name}
        <DownOutlined />
      </ReportName>
      <Container isFocused={isFocused}>
        <Columns>
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
          <view
            style={{
              borderStyle: 'dashed',
              borderWidth: 1,
              borderRadius: 1,
              color: 'white',
            }}
          />
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
          <view
            style={{
              borderStyle: 'dashed',
              borderWidth: 1,
              borderRadius: 1,
              color: 'white',
            }}
          />
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
