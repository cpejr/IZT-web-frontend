import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
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
  { label: 'Sobremetal', unit: 'mm', id: 'allowance' },
];

const parametersRA = [
  { label: 'Altura entre centros hw', id: 'hwCenterHeight' },
  { label: 'Inclinação do RA', id: 'raInclination' },
  { label: 'Inclinação do dressador RA', id: 'raDresserInclination' },
  { label: 'Altura do dressador', id: 'dresserHeight' },
  { label: 'Posição do dressador', id: 'dresserPosition' },
];

// eslint-disable-next-line react/prop-types
export default function AccordionDemo({ onCalculate }) {
  const [inputData, setInputData] = useState({});

  // Backend calls
  const { mutate: calculateProfileAnalysis, isLoading } =
    useCalculateProfileAnalysis({
      onSuccess: (result) => {
        const xData = result.retificationCenterlessDiagram.x;
        const yData = result.retificationCenterlessDiagram.y;

        onCalculate({ x: xData, y: yData });

        toast.success('Dados calculados com sucesso!');
      },
      onError: (err) => {
        const errorMessage = buildCalculateProfileAnalysisErrorMessage(err);

        toast.error(errorMessage);
      },
    });

  // Form handlers
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useForm({
    resolver: zodResolver(calculateProfileAnalysisValidationSchema),
  });
  const onSubmit = (data) => {
    calculateProfileAnalysis(data);
    setInputData(data);
  };

  const covertStringToNumber = (fieldId, inputValue) => {
    const convertedNumber = parseFloat(inputValue);
    if (!Number.isNaN(convertedNumber)) {
      setValue(fieldId, convertedNumber);
      trigger(fieldId);
    } else {
      setValue(fieldId, '');
      trigger(fieldId);
    }
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
            {rectificationProcess.map((data) => (
              <div key={data.id}>
                <div className="AccordionLine">
                  <br /> {data.label}:
                  <br />
                  {data.id === 'machineNumber' ? (
                    <input
                      id={data.id}
                      name={data.id}
                      value={watch(data.id) || ''}
                      onChange={(e) =>
                        covertStringToNumber(data.id, e.target.value)
                      }
                      step="any"
                      type="number"
                      className={`AccordionMiniInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  ) : (
                    <input
                      id={data.id}
                      name={data.id}
                      {...register(data.id)}
                      className={`AccordionInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  )}
                </div>
                {errors[data.id]?.message && (
                  <p className="ErrorMessage">{errors[data.id]?.message}</p>
                )}
              </div>
            ))}
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger>Dados da máquina</AccordionTrigger>
          <AccordionContent>
            {machineData.map((data) => (
              <div key={data.id}>
                <div className="AccordionLine">
                  <br /> {data.label}:
                  <br />
                  <input
                    id={data.id}
                    name={data.id}
                    value={watch(data.id) || ''}
                    onChange={(e) =>
                      covertStringToNumber(data.id, e.target.value)
                    }
                    step="any"
                    type="number"
                    className={`AccordionMiniInput ${
                      errors[data.id] ? 'error' : ''
                    }`}
                  />
                  <p> {data.unit} </p>
                </div>
                {errors[data.id]?.message && (
                  <p className="ErrorMessage">{errors[data.id]?.message}</p>
                )}{' '}
              </div>
            ))}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>Dados do produto</AccordionTrigger>
          <AccordionContent>
            {productData.map((data) => (
              <div key={data.id}>
                <div className="AccordionLine">
                  <br /> {data.label}:
                  <br />
                  {data.id !== 'product' ? (
                    <input
                      id={data.id}
                      name={data.id}
                      value={watch(data.id) || ''}
                      onChange={(e) =>
                        covertStringToNumber(data.id, e.target.value)
                      }
                      step="any"
                      type="number"
                      className={`AccordionMiniInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  ) : (
                    <input
                      id={data.id}
                      name={data.id}
                      {...register(data.id)}
                      className={`AccordionInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  )}
                  <p> {data.unit} </p>
                </div>
                {errors[data.id]?.message && (
                  <p className="ErrorMessage">{errors[data.id]?.message}</p>
                )}{' '}
              </div>
            ))}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem" value="item-4">
          <AccordionTrigger>RA parâmetro de perfil</AccordionTrigger>
          <AccordionContent>
            {parametersRA.map((data) => (
              <div key={data.id}>
                <div className="AccordionLine">
                  <br /> {data.label}:
                  <br />
                  {data.id !== 'dresserPosition' ? (
                    <input
                      id={data.id}
                      name={data.id}
                      value={watch(data.id) || ''}
                      onChange={(e) =>
                        covertStringToNumber(data.id, e.target.value)
                      }
                      step="any"
                      type="number"
                      className={`AccordionMiniInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  ) : (
                    <input
                      id={data.id}
                      name={data.id}
                      {...register(data.id)}
                      className={`AccordionInput ${
                        errors[data.id] ? 'error' : ''
                      }`}
                    />
                  )}
                </div>
                {errors[data.id]?.message && (
                  <p className="ErrorMessage">{errors[data.id]?.message}</p>
                )}{' '}
              </div>
            ))}
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
