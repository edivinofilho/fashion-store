import { HeaderDefault } from '../../components/Header/index.tsx';
import { RegisterForm } from "../../components/RegisterForm";
import { FooterDefault } from "../../components/Footer";
import imgCover from '../../assets/Rectangle 2.png';
import vector from '../../assets/Vector.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RegisterContainer, ImageCover, FormContainer, TextRegister, TextWelcome, ImgVector, RegisterContent } from './style';

export const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = async (event: React.FormEvent) => {
    event.preventDefault();

    if (senha !== confirmacaoSenha) {
      setMensagem('A senha não coincide com a confirmação de senha.');
      return;
    }

    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    if (!senhaRegex.test(senha)) {
      setMensagem(
        'A senha não atende aos requisitos. Ela deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caractere especial, um número e ter no mínimo 8 caracteres.'
      );
      return;
    }

    await cadastrarUsuario(nome, email, senha);

    setMensagem('Cadastro realizado com sucesso.');
  };
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
