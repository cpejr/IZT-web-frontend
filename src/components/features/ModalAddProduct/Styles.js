import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 1100px;
  height: 800px;
  left: 158px;
  top: 166px;

  background: #123645;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  .svg {
    color: white;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 150px;

  position: absolute;
  width: 950px;
  height: 702px;
  left: 75px;
  top: 46px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 400px;
  height: 702px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  width: 400px;
  height: 702px;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: white;
`;

export const MiniText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 250px;

  color: white;
`;

export const InputModalName = styled.input`
  padding: 8px 11px;
  width: 400px;
  top: 34px;

  background: #ffffff;
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export const InputModal = styled.input`
  display: flex;
  padding: 8px 11px;
  width: 400px;
  height: 250px;

  background: #ffffff;
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  color: #000000;
`;

export const ModalButton = styled.button`
  align-self: flex-end;
  cursor: pointer;

  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;

  width: 180px;
  height: 45px;
  left: 813px;
  top: 703px;
  padding: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: white;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
