// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   padding: 50px 0px;
//   gap: 50px;

//   width: 100%;
//   height: auto;

//   background-color: ${(props) => props.theme.colors.darkBlue};

//   @media (max-width: 700px) {
//     height: 850px;
//     padding: 50px 0px;
//     gap: 0px;
//   }
// `;

// export const Title = styled.text`
//   font-family: ${(props) => props.theme.fonts.montserrat};
//   font-style: normal;
//   font-weight: 700;
//   font-size: 30px;
//   line-height: 37px;
//   color: white;

//   @media (max-width: 700px) {
//     font-size: 24px;
//   }
// `;

// export const Information = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;

//   width: 80%;
//   height: 326px;

//   @media (max-width: 700px) {
//     flex-direction: column;
//     height: 590px;
//   }
// `;

// export const Form = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 80%;
//   align-items: center;
//   justify-content: center;
// `;
// export const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;

//   width: 48%;
//   height: 326px;

//   @media (max-width: 700px) {
//     width: 100%;
//   }
// `;

// export const Subsection = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 0px;
//   gap: 20px;
//   width: 100%;
//   height: 74px;

//   @media (max-width: 700px) {
//     width: 46.5%;
//   }
// `;

// export const SendButton = styled.button`
//   align-self: center;
//   color: white;
//   background-color: ${(props) => props.theme.colors.greenishBlue};
//   font-size: 20px;
//   font-family: ${(props) => props.theme.fonts.montserrat};
//   font-weight: 700;
//   height: 50px;
//   margin-top: 40px;
//   width: 35%;
//   border: none;
//   border-radius: 4px;
//   @media (max-width: 700px) {
//     width: 60%;
//     margin-top: 60px;
//   }
//   cursor: pointer;
//   transition-duration: 0.3s;
//   :hover {
//     background-color: rgba(35, 164, 166, 0.5);
//   }
// `;

import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;

  width: 100%;
  height: auto;

  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: 700px) {
    padding: 50px 0px;
    gap: 0px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  height: 20%;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 39px;
    height: 39px;
    padding-top: 15px;
  }
  @media (max-width: 370px) {
    font-size: 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 70%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 20px;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 20px;
  width: 100%;
  height: 74px;

  @media (max-width: 700px) {
    width: 46.5%;
  }
`;

export const BotaoEnviar = styled.button`
  align-self: center;
  color: white;
  background-color: #23a4a6;

  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  width: 500px;
  height: 57px;
  margin-top: 40px;
  line-height: 29px;

  border: none;
  border-radius: 4px;

  @media (max-width: 700px) {
    width: 50%;
    font-size: 18px;
    height: 44px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
    height: 30px;
  }
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`; */
