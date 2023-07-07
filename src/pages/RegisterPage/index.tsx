import { HeaderDefault } from "../../components/Header/index.tsx"
import { RegisterForm } from "../../components/RegisterForm"
import { FooterDefault } from "../../components/Footer"
import imgCover from '../../assets/Rectangle 2.png'
import vector from '../../assets/Vector.png'
import { Link } from 'react-router-dom'

import { RegisterContainer, ImageCover, FormContainer, TextRegister, TextWelcome, ImgVector, RegisterContent } from './style';

export const RegisterPage = () => {
  return (

    <>
      <HeaderDefault onlyBrand={true} />
      <RegisterContainer>
        <ImageCover src={imgCover} alt="Imagem de capa" />
        <FormContainer>
          <RegisterContent>
            <ImgVector src={vector} alt="Imagem de vector" />
            <Link className='back' to="/"><TextWelcome>Voltar</TextWelcome></Link>
          </RegisterContent>
          <TextRegister>CADASTRAR-SE</TextRegister>
          <TextWelcome>Seja bem-vindo administrador!</TextWelcome>
          <RegisterForm />
        </FormContainer>
      </RegisterContainer>
      <FooterDefault />
    </>
  );
};
