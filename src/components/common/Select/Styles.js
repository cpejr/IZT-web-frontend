import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 16px;
  font-weight: 600;
  position: relative;
  flex-grow: 1;
  height: 100%;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  padding: 10px;
  max-height: 40px;
  background-color: white;
  max-width: ${(props) => props.maxWidth};
  svg {
    font-weight: 600;
  }
  p {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.blue};
    text-decoration-thickness: 2px;
    white-space: nowrap;
    max-width: 200px;
    max-height: 40px;
    overflow: hidden;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Options = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  max-height: ${(props) => (props.show ? '250px' : '0')};
  overflow-y: ${(props) => (props.show ? 'auto' : 'hidden')};
  background-color: white;
  width: 100%;
  height: auto;
`;

export const Option = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
  p {
    font-size: 0.9em;
    font-weight: 700;
    text-decoration: ${(props) => (props.isSelected ? 'underline' : 'none')};
    text-decoration-color: ${(props) => props.theme.colors.blue};
    text-decoration-thickness: 2px;
  }
`;
