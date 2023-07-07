import { HeaderDefault } from '../../components/Header/index.tsx';
import { RegisterForm } from "../../components/RegisterForm";
import { FooterDefault } from "../../components/Footer";
import imgCover from '../../assets/Rectangle 2.png';
import vector from '../../assets/Vector.png';

import { RegisterContainer,ImageContainer,FormContainer, TextRegister,TextWelcome,ImgVector, RegisterContent } from './style';


export const RegisterPage = () => {
  return (
    
      <div>
      <HeaderDefault onlyBrand={true} />
      <RegisterContainer>
        
      <ImageContainer>
          <img src={imgCover} alt="Imagem de capa" />
        </ImageContainer>
        <FormContainer>
        <RegisterContent>

        <ImgVector src={vector} alt="Imagem de vector" />
        <TextWelcome>Voltar</TextWelcome>
        </RegisterContent>

        <TextRegister>CADASTRAR-SE</TextRegister>
  <TextWelcome>Seja bem-vindo administrador!</TextWelcome>
        <RegisterForm />
        </FormContainer>

        </RegisterContainer>
        <FooterDefault />

      </div>

   
    
  );
};
