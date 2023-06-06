import styled from 'styled-components';

// apagar depois
export const TESTEContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
// apagar depois
export const TESTEMenu = styled.div`
  width: 20rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const DataEntryDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 0.1rem dashed white;
  width: 100%;
  max-width: 40rem;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: white;
  text-align: center;
`;

export const DataEntry = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Collapsable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CollapsableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    color: white;
    font-weight: 700;
    transform: ${(props) =>
      props.collapse ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.5s ease-in-out 0s;
  }
`;

export const DataTitle = styled.div`
  font-size: 2rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
`;

export const CollapsableData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: hidden;
  max-height: ${(props) => (props.collapse ? 'auto' : '0rem')};
  transition: all 0.5s ease-in-out 0.5s;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  white-space: nowrap;
`;

export const SelectInput = styled.select`
  height: 2rem;
  background-color: transparent;
  margin-left: 1rem;
  border: none;
  border-bottom: 0.1rem solid white;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  width: 100%;
  font-size: 1.5rem;
  option {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  word-wrap: none;
  margin-left: 1rem;
  border-bottom: 0.1rem solid white;
  font-size: 1.5rem;
  width: 100%;
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 85rem;
  text-align: start;
  padding: 2rem;
  gap: 1.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem 0.5rem 2rem;
  width: auto;
  height: auto;

  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 1.6rem;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 5px;
  margin: 1rem;
`;

export const TitleRow = styled.div`
  display: flex;
  width: 100%;
  text-align: start;
  align-items: center;
  gap: 2rem;
`;
export const Diagram = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2rem;
  gap: 2rem;
`;
export const DiagramTitle = styled.div`
  display: flex;
  width: 100%;
  text-align: start;
  align-items: center;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-size: 1.6rem;
`;

export const Canvas = styled.div`
  /* max-width: 64rem;
  max-height: 36rem; */
  width: 64rem;
  height: 36rem;
  background-color: white;
`;
