/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useQueryClient } from '@tanstack/react-query';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Form, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useCalculateProfileAnalysis } from '../../../hooks/query/profileAnalysis';

import './Styles.css';
import {
  buildCalculateProfileAnalysisErrorMessage,
  calculateProfileAnalysisValidationSchema,
} from './utils';

const rectificationProcess = [
  { label: 'Processo Retificação', id: 'rectificationProcess' },
  { label: 'Máquina', id: 'machine' },
  { label: 'N° da máquina', id: 'machineNumber' },
  { label: 'Operação', id: 'operation' },
  { label: 'Departamento', id: 'department' },
  { label: 'Responsável', id: 'responsiblePerson' },
];

const machineData = [
  { label: 'Diametro do RC (máx)', unit: 'mm', id: 'rcMaxDiameter' },
  { label: 'Diametro do RC (min)', unit: 'mm', id: 'rcMinDiameter' },
  { label: 'Diametro do RA', unit: 'mm', id: 'raDiameter' },
  { label: 'Comprimento do RC', unit: 'mm', id: 'rcLength' },
  { label: 'Comprimento do RA', unit: 'mm', id: 'raLength' },
  { label: 'Comprimento efetivo RC', unit: 'mm', id: 'rcEffectiveLength' },
  { label: 'Rotação do RC', unit: 'mm', id: 'rcRotation' },
  { label: 'Rotação do RA', unit: 'mm', id: 'raRotation' },
  { label: 'Inclinação do RW', unit: '°', id: 'rwInclination' },
];

const productData = [
  { label: 'Produto', unit: '', id: 'product' },
  { label: 'Nº do produto', unit: '', id: 'productNumber' },
  { label: 'Diametro', unit: 'mm', id: 'diameter' },
  { label: 'Comprimento total', unit: 'mm', id: 'totalLength' },
  { label: 'Comprimento eletivo', unit: 'mm', id: 'electiveLength' },
  // { label: 'Sobremetal', unit: 'mm', id: '' },
];

const parametersRA = [
  { label: 'Altura entre centros hw', id: 'hwCenterHeight' },
  { label: 'Inclinação do RA', id: 'raInclination' },
  { label: 'Inclinação do dressador RA', id: 'raDresserInclination' },
  { label: 'Altura do dressador', id: 'dresserHeight' },
  { label: 'Posição do dressador', id: 'dresserPosition' },
];

function AccordionDemo() {
  const [isLoading, setIsLoading] = useState(false);

  // Linkagem

  const { mutate: calculateProfileAnalysis } = useCalculateProfileAnalysis({
    onSuccess: () => {
      toast.success('Dados calculados com sucesso!');
    },
    onError: (err) => {
      const errorMessage = buildCalculateProfileAnalysisErrorMessage(err);

      toast.error(errorMessage);
      setIsLoading(false);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(calculateProfileAnalysisValidationSchema),
  });
  const onSubmit = (data) => {
    calculateProfileAnalysis(data);
    setIsLoading(true);
    console.log('oiiiii');
  };

  const errorMessage = errors?.name?.message;

  // Dados
  const [inputData, setInputData] = useState({
    rectificationProcess: {},
    machineData: {},
    productData: {},
    parametersRA: {},
  });

  const handleInputChange = (section, key, value) => {
    setInputData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [key]: value,
      },
    }));
  };

  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="none"
      collapsible
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger>Dados de análise</AccordionTrigger>
          <AccordionContent>
            {rectificationProcess.map((data, index) => (
              <div className="AccordionLine" key={index}>
                <br /> {data.label}:
                <br />
                <input
                  name={data.id}
                  id={data.id}
                  register={register}
                  errors={errorMessage}
                  className="AccordionInput"
                  value={inputData.rectificationProcess[data.label] || ''}
                  onChange={(e) =>
                    handleInputChange(
                      'rectificationProcess',
                      data.label,
                      e.target.value
                    )
                  }
                />
              </div>
            ))}
            {/* <div className="Center">
              <button className="Button2" type="button">
                Salvar
              </button>
            </div> */}
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger>Dados da máquina</AccordionTrigger>
          <AccordionContent>
            {machineData.map((data, index) => (
              <div className="AccordionLine" key={index}>
                <br /> {data.label}:
                <br />
                <input
                  name={data.id}
                  id={data.id}
                  register={register}
                  errors={errorMessage}
                  className="AccordionMiniInput"
                  value={inputData.machineData[data.label] || ''}
                  onChange={(e) =>
                    handleInputChange('machineData', data.label, e.target.value)
                  }
                />
                <p> {data.unit} </p>
              </div>
            ))}

            {/* <div className="Center">
              <button className="Button2" type="button">
                Salvar
              </button>
            </div> */}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>Dados do produto</AccordionTrigger>
          <AccordionContent>
            {productData.map((data, index) => (
              <div className="AccordionLine" key={index}>
                <br /> {data.label}:
                <br />
                <input
                  name={data.id}
                  id={data.id}
                  register={register}
                  errors={errorMessage}
                  className="AccordionMiniInput"
                  value={inputData.productData[data.label] || ''}
                  onChange={(e) =>
                    handleInputChange('productData', data.label, e.target.value)
                  }
                />
                <p> {data.unit} </p>
              </div>
            ))}
            {/* <div className="Center">
              <button className="Button2" type="button">
                Salvar
              </button>
            </div> */}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-4">
          <AccordionTrigger>RA parâmetro de perfil</AccordionTrigger>
          <AccordionContent>
            {parametersRA.map((data, index) => (
              <div className="AccordionLine" key={index}>
                <br /> {data.label}:
                <br />
                <input
                  name={data.id}
                  id={data.id}
                  register={register}
                  errors={errorMessage}
                  className="AccordionMiniInput"
                  value={inputData.parametersRA[data.label] || ''}
                  onChange={(e) =>
                    handleInputChange(
                      'parametersRA',
                      data.label,
                      e.target.value
                    )
                  }
                />
                <p> mm </p>
              </div>
            ))}
            <div className="Center">
              {/* <button className="Button2" type="button">
                Salvar
              </button> */}
            </div>
          </AccordionContent>
        </Accordion.Item>
        <div className="Center">
          <button
            className="ButtonCalculate"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? <p>Carregando</p> : <p>Calcular</p>}
          </button>
        </div>
      </form>
    </Accordion.Root>
  );
}

const AccordionTrigger = React.forwardRef(function AccordionTrigger(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames('AccordionTrigger', className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

const AccordionContent = React.forwardRef(function AccordionContent(
  { children, className, ...props },
  forwardedRef
) {
  return (
    <Accordion.Content
      className={classNames('AccordionContent', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  );
});
AccordionTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
AccordionTrigger.defaultProps = {
  className: '',
};
AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
AccordionContent.defaultProps = {
  className: '',
};
export default AccordionDemo;
