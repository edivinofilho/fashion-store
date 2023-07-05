// import { api } from "../../services/api";

// import { useForm } from "react-hook-form";
// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";

// import { Input } from "../../components/Input/index.tsx"
// import { Header } from "../../components/adminComponents/Header"
// import { FooterDefault } from "../../components/Footer"

// import img from "../../assets/imgCover.svg"

// import { StyledFormLogin, SectionLogin } from "./style"

// import { InputStyled } from "../../styles/Input"
// import { ButtonStyled } from "../../styles/Button";

// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';



export const LoginPage = () => {
//   const { register, handleSubmit } = useForm()
//   const navigation = useNavigate()

//   const login = async (formData) => {
//     try {
//       const { data } = await api.post("login", formData)

//       localStorage.setItem("@AcessToken", JSON.stringify(data.accessToken))
//       localStorage.setItem("@User", JSON.stringify(data.user))
//       navigation("/admin_dashboard")
//     } catch (error) {

//       if (error.response.data == "Cannot find user") {

//         toast.error('Usuário não encontrado!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         })
//       } else if (error.response.data == "Incorrect password") {

//         toast.error('Senha incorreta!', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         })
//       }
//     }
//   }

  return (
    <>
      {/* <ToastContainer />

      <SectionLogin>
        <img src={img} alt="" />
        <StyledFormLogin onSubmit={handleSubmit(login)}>
          <h1>ENTRAR</h1>
          <InputStyled {...register("email")} placeholder="E-MAIl" type="email" />
          <InputStyled {...register("password")} placeholder="SENHA" type="password" />
          <div className="container">
            <ButtonStyled styleTypeButton="black" type="submit">ACESSAR</ButtonStyled>
            <ButtonStyled styleTypeButton="white">CADASTRE-SE</ButtonStyled>
          </div>
        </StyledFormLogin>
      </SectionLogin>
      <FooterDefault /> */}

      
    </>
  )
}