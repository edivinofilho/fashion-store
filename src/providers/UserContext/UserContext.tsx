import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { SubmitHandler } from "react-hook-form"
import { IUserContext, IUserProviderProps, IUser, IFormData, IUserRegisterResponse } from "./@type"


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const navigation = useNavigate()
  const [loading, setLoading] = useState<IUserContext | true | false>(false)

  const currentPath = window.location.pathname

  const Toasty = (text: string, type: "success" | "error", position: "top-left" | "top-right") => {
    if (type === "success") {
      toast.success(`${text}`, {
        position: position,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      toast.error(`${text}`, {
        position: position,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  useEffect(() => {
    const userDetailsString = localStorage.getItem("@User");
  
    if (userDetailsString) {
      const userDetails = JSON.parse(userDetailsString)
      const { email, confirmPassword } = userDetails

      const loadUser = async () => {
        try {
          setLoading(true)
          const { data } = await api.post("/login", {
              email,
              password: confirmPassword,
          })

          setUser(data)
  
          navigation(currentPath)
        } catch (error) {
          Toasty("Ups, algo deu errado, tente novamente", "error", "top-left")
        } finally {
          setLoading(false)
        }
      }
  
      loadUser()
    }
  }, [])

  const login: SubmitHandler<IFormData> = async (formData: IFormData) => {

    try {
      const { data } = await api.post("/login", formData)

      localStorage.setItem("@AcessToken", data.accessToken)
      localStorage.setItem("@User", JSON.stringify(data.user))
      navigation("/admin_welcome")
      setUser(data)
      Toasty("Usuário logado", "success", "top-right")

    } catch (error: any) {

      if (error.response.data == "Incorrect password") {
        Toasty("Senha incorreta", "error", "top-right")

      } else if (error.response.data == "Cannot find user") {
        Toasty("Usuário não encontrado", "error", "top-right")

      }
    }
  }
  const userRegister = async (
    formData: IFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true)
      await api.post<IUserRegisterResponse>("/users", formData)
      Toasty("Cadastro efetuado com sucesso", "success", "top-right") 
      navigation("/login")

    } catch (error) {
      Toasty("Algo deu errado, tente novamente", "error", "top-right") 
      
      window.location.reload()
    }
  }

  const logout = ( ) => {
    localStorage.removeItem("@AcessToken")
    localStorage.removeItem("@User")

    Toasty("Saindo...", "success", "top-right") 
  }

  return (
    <UserContext.Provider value={{ Toasty, user, setUser, login, navigation, userRegister, logout, loading }}>
      {children}
    </UserContext.Provider>
  )
}

