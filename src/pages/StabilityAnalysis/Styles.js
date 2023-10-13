import Plot from 'react-plotly.js';
import styled from 'styled-components';

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
  border-right: 0.1vw dashed white;
  width: 100%;
  max-width: 28vw;
  align-items: center;
  padding: 3vh 1.3vw;
  gap: 1.5vh;
  max-height: 87vh;
  min-width: 29.5rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: white;
  text-align: center;
  font-size: 2.2rem;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;

export const InputName = styled.input`
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: white;
  background-color: transparent;
  font-size: 2.2rem;
  border: 0 solid;
  width: 30rem;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;

export const DataEntry = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;
export const DataEntry2 = styled.form`
  width: 100%;
  height: 100%;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;

export const Collapsable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8vh;
`;

export const CollapsableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.5rem;
  :hover {
    cursor: pointer;
  }
  svg {
    color: white;
    font-weight: 700;
    transform: ${(props) =>
      props.collapse ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 200ms ease-in-out 200ms;
    height: 2.5vh;
    width: 2.5vh;
  }
`;

export const DataTitle = styled.div`
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: start;
  padding: 1.38vw;
  gap: 2.3vh;
  max-height: 83vh;
  overflow-y: scroll;
  margin-bottom: 2.9rem;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray.darkGray};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: 5%;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 0.6rem;
  border: 1px solid;
  border-color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  cursor: pointer;

  //width: 8.4rem;
  width: fit-content;
  margin-left: 17rem;

  @media (max-width: 1600px) {
    font-size: 1.7rem;
    padding: 0.4rem 1.5rem 0.4rem 1.5rem;
    margin-left: 10rem;
  }

  @media (max-width: 950px) {
    font-size: 1.4rem;
    margin-left: 7rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Button2 = styled.button`
  display: inline-block;
  margin-left: 5%;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 0.6rem;
  border: 1px solid;
  border-color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};

  //width: 15rem;
  width: fit-content;

  cursor: pointer;

  @media (max-width: 950px) {
    font-size: 1.4rem;
    padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  width: 100%;
  height: 100rem;
  text-align: start;
  align-items: center;
  gap: 1.4vw;
`;

export const DivName = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-content: center;
`;

export const Diagram = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1.4vw;
  padding-right: 1.4vw;
  gap: 2.5vh;
`;
export const DiagramTitle = styled.div`
  display: flex;
  width: 100%;
  text-align: start;
  align-items: center;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-size: 2rem;
  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export const Canvas = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: white;
`;

export const ContourMap = styled(Plot)`
  width: 100%;
  height: 100%;
`;
