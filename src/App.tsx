import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle.ts"
import { ResetStyle } from "./styles/reset.ts"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "./providers/UserContext/UserContext.tsx"

export const App = () => {

  const { loading } = useContext(UserContext)
  
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <ResetStyle />
      {loading ? <p>Loading...</p> : <RoutesMain />}
    </>
  )
}