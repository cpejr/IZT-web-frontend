import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const AddButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: baseline;
  align-items: center;

  width: 180px;
  height: 30px;
  background-color: transparent;
  border: none;

  color: ${({ color }) => color};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  svg {
    padding-right: 5px;
  }
`;
