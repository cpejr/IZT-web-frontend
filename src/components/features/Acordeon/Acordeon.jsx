import React from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Styles.css';

const machineData = [
  { label: 'Diametro do RC (máx)' },
  { label: 'Diametro do RC (min)' },
  { label: 'Diametro do RA' },
  { label: 'Comprimento do RC' },
  { label: 'Comprimento do RA' },
  { label: 'Comprimento efetivo RC' },
  { label: 'Rotação do RC' },
  { label: 'Rotação do RA' },
  { label: 'Rotação do RW' },
];

const productData = [
  { label: 'Diametro' },
  { label: 'Comprimento total' },
  { label: 'Comprimento eletivo' },
  { label: 'Sobremetal' },
];

const parametersRA = [
  { label: 'Altura entre centros hw' },
  { label: 'Indicação do RA' },
  { label: 'Altura do Dressador' },
  { label: 'Sobremetal' },
];

function AccordionDemo() {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="none"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>Dados de análise</AccordionTrigger>
        <AccordionContent>
          Processos Retificação:
          <div className="AccordionLine">
            <br /> Máquina:
            <br />
            <input className="AccordionInput" />
          </div>
          <div className="AccordionLine">
            <br /> N° da máquina:
            <br />
            <input className="AccordionInput" />
          </div>
          <div className="AccordionLine">
            <br /> Operação:
            <br />
            <input className="AccordionInput" />
          </div>
          <div className="AccordionLine">
            <br /> Departamento:
            <br />
            <input className="AccordionInput" />
          </div>
          <div className="AccordionLine">
            <br /> Responsável
            <br />
            <input className="AccordionInput" />
          </div>
          <div className="Center">
            <button className="Button2" type="button">
              Salvar
            </button>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>Dados da máquina</AccordionTrigger>
        <AccordionContent>
          {machineData.map((data, index) => (
            <div className="AccordionLine" key={index}>
              <br /> {data.label}:
              <br />
              <input className="AccordionMiniInput" />
              <p> mm </p>
            </div>
          ))}

          <div className="Center">
            <button className="Button2" type="button">
              Salvar
            </button>
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>Dados do produto</AccordionTrigger>
        <AccordionContent>
          Produto:___
          <br /> N° do produto:___
          <br />
          {productData.map((data, index) => (
            <div className="AccordionLine" key={index}>
              <br /> {data.label}:
              <br />
              <input className="AccordionMiniInput" />
              <p> mm </p>
            </div>
          ))}
          <div className="Center">
            <button className="Button2" type="button">
              Salvar
            </button>
          </div>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item className="AccordionItem" value="item-4">
        <AccordionTrigger>RA parâmetro de perfil</AccordionTrigger>
        <AccordionContent>
          {parametersRA.map((data, index) => (
            <div className="AccordionLine" key={index}>
              <br /> {data.label}:
              <br />
              <input className="AccordionMiniInput" />
              <p> mm </p>
            </div>
          ))}
          Posição do Dressador:___
          <div className="Center">
            <button className="Button2" type="button">
              Salvar
            </button>
          </div>
        </AccordionContent>
      </Accordion.Item>
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
