import styled from 'styled-components';
import { letterTitle2, letterParagraph, imgCover } from "../../styles/globalStyle.ts"


export const RegisterContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const RegisterContent = styled.div`
  max-width: 568px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  .back {
  text-decoration:none;
  color:black;
 }
`;

export const ImageCover = styled.img`
  ${imgCover}
`;

export const FormContainer = styled.div`
display:flex;
flex-direction: column;
width: 100%;
max-width:600px; 
height: auto;
gap:10px;
padding: 2rem;

@media(max-width: 1386px){
  width: 100%;
  align-items: center;
}
`;

export const StyledForm = styled.form`
display:flex;
flex-direction: column;
width: 100%;
height: auto;
max-width: 568px;
min-height: 469px; 
gap: 20px;

button{
  width: 209px;
  height: 60px;
  align-self: flex-end;
}
`;

export const TextRegister = styled.h1`
${letterTitle2}
align-self: flex-start;
`

export const TextWelcome = styled.h5`
${letterParagraph};
align-self: flex-start;
`

export const ImgVector = styled.img`
width:16px;
height:16px;
display:inline;
`
