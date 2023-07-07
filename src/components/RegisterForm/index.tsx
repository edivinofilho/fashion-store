import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./RegisterSchema";
import { ButtonStyled } from "../../styles/Button";
import { StyledForm } from "../../pages/RegisterPage/style";


export interface IResgisterFormData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResgisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const submit: SubmitHandler<IResgisterFormData> = (formData) => {
    userRegister(formData, setLoading);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
        

        <Input
         
          type="text"
          id="name"
          placeholder="Nome"
          error={errors.name}
          disabled={loading}
          {...register("name")}
        />

        <Input
         
          type="text"
          id="email"
          placeholder="Email"
          error={errors.email}
          disabled={loading}
          {...register("email")}
        />

        <Input
          
          type="password"
          id="password"
          placeholder="Senha"
          error={errors.password}
          disabled={loading}
          {...register("password")}
        />

        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          error={errors.confirmPassword}
          disabled={loading}
          {...register("confirmPassword")}
        />

        <ButtonStyled styleTypeButton="back"
          type="submit"
        >CADASTRAR-SE
        </ButtonStyled>
      </StyledForm>
    </>
  );
};
