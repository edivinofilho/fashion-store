import styled from 'styled-components';
import { letterTitle2,letterParagraph } from "../../styles/globalStyle.ts"


export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContent = styled.div`
  width: 568px;
  
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  width: 820px;
  height: 691px;
  top: 124px;
  left: 140px;
  border-radius: 40px;
  margin-right: 2rem;
`;

export const FormContainer = styled.div`
display:flex;
flex-direction: column;
gap:10px;
  padding: 2rem;
`;


export const StyledForm = styled.form`
display:flex;
flex-direction: column;
 width: 568px;
  height: 469px;
 
  gap: 20px;
`;

export const TextRegister = styled.h1`
${letterTitle2}
`




  export const TextWelcome = styled.h5`
 ${letterParagraph}
`

export const ImgVector = styled.img`
width:16px;
height:16px;
display:inline;
`