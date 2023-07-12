import React from 'react';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Styles.css';

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
          Processos Retificação:___
          <br /> Máquina:___
          <br />
          N° da máquina:___
          <br />
          Operação:___
          <br />
          Departamento:___
          <br />
          Responsável:___
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
          Diametro do RC (máx):___ mm
          <br /> Diametro do RC (min): ___ mm
          <br />
          Diametro do RA: ___mm
          <br />
          Comprimento do RC:___ mm
          <br />
          Comprimento do RA:___ mm
          <br />
          Comprimento efetivo RC: ___mm
          <br />
          Rotação do RC: ___mm
          <br />
          Rotação do RA: ___mm
          <br />
          Rotação do RW: ___°
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
          Diametro :___ mm
          <br />
          Comprimento total:___ mm
          <br />
          Comprimento eletivo:___ mm
          <br />
          Sobremetal:___ mm
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
          Altura entre centros hw:___ mm
          <br /> Indicação do RA:___ mm
          <br />
          Indicação do Dressador RA:___ mm
          <br />
          Altura do Dressador:___ mm
          <br />
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
