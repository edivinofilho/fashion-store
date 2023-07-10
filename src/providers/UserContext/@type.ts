import { SubmitHandler } from "react-hook-form"
import { NavigateFunction } from "react-router-dom"

export interface IUserProviderProps {
  children: React.ReactNode
}

export interface IFormData {
  email: string
  password: string
}

export interface IUser {
  accessToken: string | null,
  user: {
    id: number
    name: string
    email: string
  }
}
export interface IResgisterFormData {
  email: string
  password: string
  name: string
  confirmPassword: string
}

export interface IUserContext {
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  user: IUser | null
  login: SubmitHandler<IFormData>
  userRegister: (
    formData: IResgisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>
  navigation: NavigateFunction
  logout: () => void
  loading: boolean | IUserContext | true | false
}

export interface IUserRegisterResponse {
  accessToken: string
  user: IUser
}

