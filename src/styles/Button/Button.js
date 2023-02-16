import styled from 'styled-components';
import { Fonts, Colors } from '../../variables';

const Button = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop ?? '7px'};
  padding-left: ${(props) => props.paddingLeft ?? '30px'};
  padding-right: ${(props) => props.paddingRight ?? '30px'};
  padding-bottom: ${(props) => props.paddingBottom ?? '7px'};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  /*cor e estilo do botão*/
  color: ${(props) => props.color ?? Colors.blue};
  background-color: ${(props) => props.backgroundColor ?? 'white'};
  border-width: ${(props) => props.borderWidth ?? '1.5px'};
  border-color: ${(props) => props.borderColor ?? Colors.blue};
  border-style: solid;
  border-radius: ${(props) => props.borderRadius ?? '4px'};
  box-shadow: ${(props) => props.boxShadow ?? 'none'};
  cursor: pointer;
  /*características do texto*/
  font-family: ${Fonts.montserrat};
  font-size: ${(props) => props.fontSize};
  text-decoration: ${(props) => props.textDecoration ?? 'none'};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  :hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? Colors.blue};
    border-color: ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor ?? 'white'};
  }

  @media (max-width: 990px) {
    font-size: ${(props) => props.fontSize990 ?? '18px'};
    padding-top: ${(props) => props.paddingTop990 ?? '5px'};
    padding-left: ${(props) => props.paddingLeft990 ?? '20px'};
    padding-right: ${(props) => props.paddingRight990 ?? '20px'};
    padding-bottom: ${(props) => props.paddingBottom990 ?? '5px'};
  }
`;

export default Button;
