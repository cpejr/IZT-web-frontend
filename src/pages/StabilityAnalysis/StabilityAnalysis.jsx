import { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';

import {
  Container,
  DataEntryDiv,
  Title,
  DataEntry,
  Collapsable,
  CollapsableHeader,
  DataTitle,
  CollapsableData,
  Line,
  Label,
  SelectInput,
  Input,
} from './Styles';

export default function StabilityAnalysis() {
  const [collapse, setCollapse] = useState({
    analysis: false,
    machine: false,
    product: false,
  });

  const openCollapse = (collapseName) => {
    setCollapse({
      analysis: false,
      machine: false,
      product: false,
    });
    setCollapse((prevState) => ({
      ...prevState,
      [collapseName]: true,
    }));
  };

  return (
    <Container>
      <DataEntryDiv>
        <Title>Entrada de Dados</Title>
        <DataEntry>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse.analysis}
              onClick={() => openCollapse('analysis')}
            >
              <DataTitle>Dados da Análise</DataTitle>
              <AiOutlineDown size={18} />
            </CollapsableHeader>
            <CollapsableData collapse={collapse.analysis}>
              <Line>
                <Label>Processo de retificação: </Label>
                <SelectInput>
                  <option value="">Selecionar</option>
                  <option value="Centerless de Mergulho">
                    Centerless de Mergulho
                  </option>
                  <option value="Centerless de Passagem">
                    Centerless de Passagem
                  </option>
                </SelectInput>
              </Line>
              <Line>
                <Label>Maquina: </Label>
                <Input />
              </Line>
              <Line>
                <Label>N° da Maquina: </Label>
                <Input />
              </Line>
              <Line>
                <Label>Operação: </Label>
                <SelectInput>
                  <option value="">Selecionar</option>
                  <option value="Desbaste">Desbaste</option>
                  <option value="Pré Desbaste">Pré Desbaste</option>
                  <option value="Acabamento">Acabamento</option>
                </SelectInput>
              </Line>
              <Line>
                <Label>Departamento: </Label>
                <Input />
              </Line>
              <Line>
                <Label>Responsável: </Label>
                <Input />
              </Line>
            </CollapsableData>
          </Collapsable>
          <Collapsable>
            <CollapsableHeader
              collapse={collapse.machine}
              onClick={() => openCollapse('machine')}
            >
              <DataTitle>Dados da Maquina</DataTitle>
              <AiOutlineDown size={18} />
            </CollapsableHeader>
            <CollapsableData collapse={collapse.machine}>
              <Line>
                <Label>Diametro do RC(máx): </Label>
                <Input />
                <Label> mm</Label>
              </Line>
              <Line>
                <Label>Diametro do RC(min): </Label>
                <Input />
                <Label>mm</Label>
              </Line>
              <Line>
                <Label>Diametro do RA: </Label>
                <Input />
                <Label>mm</Label>
              </Line>
              <Line>
                <Label>Comprimento RC </Label>
                <Input />
                <Label> mm</Label>
              </Line>
              <Line>
                <Label>Comprimento RA: </Label>
                <Input />
                <Label>mm</Label>
              </Line>
              <Line>
                <Label>Comprimento efetivo RC: </Label>
                <Input />
                <Label>mm</Label>
              </Line>
              <Line>
                <Label>Rotação do RC </Label>
                <Input />
                <Label> mm</Label>
              </Line>
              <Line>
                <Label>Rotação do RA: </Label>
                <Input />
                <Label>mm</Label>
              </Line>
              <Line>
                <Label>Inclinação RW: </Label>
                <Input />
                <Label>°</Label>
              </Line>
            </CollapsableData>
          </Collapsable>
        </DataEntry>
      </DataEntryDiv>
    </Container>
  );
}
