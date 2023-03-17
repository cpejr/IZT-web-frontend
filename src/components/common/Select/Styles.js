import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;
  font-weight: 600;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
  padding: 10px;
  max-width: 100px;
  background-color: white;
  svg {
    font-weight: 600;
  }
  p {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.blue};
    text-decoration-thickness: 2px;
  }
`;

export const Options = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1000000;
  height: ${(props) => (props.show ? '100px' : '0px')};
  overflow-y: ${(props) => (props.show ? 'auto' : 'hidden')};
  background-color: white;
  width: 200px;
  height: 100%;
  max-height: 500px;
`;

export const Option = styled.div`
  width: 100%;
  padding: 10px;
`;
