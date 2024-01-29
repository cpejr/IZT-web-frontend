import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: auto;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ErrorMessageArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 80px;
`;

export const ErrorMessage = styled.text`
  color: rgb(32, 54, 153);
  font-size: 15px;
  font-weight: 500;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
`;
