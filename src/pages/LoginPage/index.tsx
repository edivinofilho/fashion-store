import { useForm } from "react-hook-form"
import { useContext, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/Input"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { FooterDefault } from "../../components/Footer"
import { ButtonStyled } from "../../styles/Button.ts"
import img from "../../assets/imgCover.svg"
import { StyledFormLogin, LoginPageTitle, StyleSection } from "./style"
import { TLoginFormValues, loginFormSchema } from "./LoginSchema"
import { IFormData, UserContext } from "../../providers/UserContext/UserContext.tsx"
/* import { useNavigate } from "react-router-dom" */

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({ resolver: zodResolver(loginFormSchema) })
  const { login, navigation, AutoLogin } = useContext(UserContext)
  /* const nav = useNavigate() */

  const registerPage = () => {

    navigation("/register")
  }

/*   useEffect(() => {
    const storage = localStorage.getItem("@User")
    if (storage != null) {
      const STORAGE = JSON.parse(storage)
      const data: IFormData = {
        email: STORAGE.email,
        password: STORAGE.confirmPassword
      }
      AutoLogin(data)
      nav("/admin_welcome")
    } else {
      nav("/admin_welcome")
    }
  }, [])
 */
  return (
    <>
      <HeaderDefault onlyBrand={true} />
      <main>
        <StyleSection>
          <img src={img} alt="" />
          <StyledFormLogin onSubmit={handleSubmit(login)}>
            <LoginPageTitle>ENTRAR</LoginPageTitle>
            <Input error={errors.email} {...register("email")} placeholder="E-MAIl" type="email" />
            <Input error={errors.password} {...register("password")} placeholder="SENHA" type="password" />
            <div className="container">
              <ButtonStyled styleTypeButton="black">ACESSAR</ButtonStyled>
              <ButtonStyled styleTypeButton="white" onClick={() => registerPage()} type="button">CADASTRE-SE</ButtonStyled>
            </div>
          </StyledFormLogin>
        </StyleSection>
      </main>
      <FooterDefault />
    </>
  )
}
