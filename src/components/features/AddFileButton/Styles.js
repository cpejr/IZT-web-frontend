import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const AddButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: baseline;
  align-items: center;

  width: 18rem;
  height: 3rem;
  background-color: transparent;
  border: none;

  color: ${({ color }) => color};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;

  svg {
    padding-right: 0.5rem;
  }
`;
