import styled from 'styled-components';

export const Boddy = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #123645;
  width: 100%;
  height: 100%;
  gap: 4rem;
  flex-direction: flex-start;
`;
export const DataEntry = styled.form`
  width: 100%;
  height: 100%;
`;
export const DataInput = styled.div`
  h1 {
    margin-top: 5%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;

    color: #ffffff;
  }
`;

export const Containerleft = styled.div`
  width: 47%;
  height: 95%;
  border-right: 0.1vw dashed white;
  border-color: #ffffff;
  display: flex;
  flex-direction: row;
  background-color: #123645;
  padding: 3vh 1.3vw;
  flex-direction: column;
  gap: 5rem;
  align-self: flex-start;
  max-width: 28vw;
`;
export const DivName = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 1.5rem;
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3vw 0vw;
  padding-left: 0.7vw;
  width: 100%;
  text-align: start;
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

export const ContainerRight = styled.div`
  display: flex;

  background-color: #123645;
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;

  gap: 1rem;
`;

export const Container2 = styled.div`
  width: 95%;
  aspect-ratio: 16 / 9;
  background-color: white;

  @media (max-width: 1200px) {
    height: 33rem;
    width: 54rem;
  }
  @media (max-width: 1030px) {
    height: 31rem;
    width: 50rem;
  }
  @media (max-width: 950px) {
    height: 28rem;
    width: 47rem;
  }
  @media (max-width: 860px) {
    height: 25rem;
    width: 44rem;
  }
  @media (max-width: 730px) {
    height: 23rem;
    width: 42rem;
  }
`;

export const H1 = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: white;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.6rem;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;
export const TittleRow = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: white;
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.6rem;
  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const OutputData = styled.div`
  margin-bottom: 5%;
  padding-right: 3rem;
  padding-left: ${(props) => (props.rightOutputData ? '0rem' : '3rem')};
  flex-direction: row;
  border-right: ${(props) =>
    props.rightOutputData ? 'none' : '1.7px dashed white'};
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  white-space: nowrap;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.9rem;
    color: #ffffff;
  }

  .OutputDataRight {
    background-color: black;
  }
  @media (max-width: 850px) {
    white-space: normal;
  }
`;

export const OutputData2 = styled.div`
  margin-bottom: 5%;
  border-color: #ffffff;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.9rem;
    color: #ffffff;
  }
`;

export const Text2 = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;

  color: #ffffff;
`;

export const Text = styled.a`
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

export const Data = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const InputData = styled.div`
  width: 24%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const Button = styled.button`
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
  font-family: 'Montserrat';
  cursor: pointer;

  @media (max-width: 950px) {
    font-size: 1.4rem;
    padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  }
`;

export const Button2 = styled.button`
  display: inline-block;
  margin-left: 5%;
  padding: 0.5rem, 2rem, 0.5rem, 2rem;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 0.6rem;
  border: solid;
  border-color: white;
  font-family: 'Montserrat';
`;

export const Edit = styled.div`
  margin-top: 4rem;
  padding-left: 0rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5vh;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
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
