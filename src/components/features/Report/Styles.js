import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100rem;
  margin-top: 2rem;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  max-width: 100rem;
  margin-bottom: 2rem;
  max-height: ${(props) => (props.focused ? 'auto' : '0rem')};
  overflow-y: hidden;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  max-height: 20rem;
  max-width: 25rem;
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  max-width: 25rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4rem;
  width: 100%;
  height: 100%;
  button {
    background-color: transparent;
    padding: 0.5rem 1rem;
    color: white;
    font-family: ${(prop) => prop.theme.fonts.montserrat};
    font-size: 1.4rem;
    font-weight: 500;
    border: 0.1rem solid white;
    border-radius: 0.5rem;
  }
`;

export const Label = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
`;
export const Data = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
  border-bottom: 0.1rem solid white;
`;

export const Title = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
`;
export const ReportName = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 106rem;
  display: flex;
  justify-content: space-between;
`;
