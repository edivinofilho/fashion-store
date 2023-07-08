import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle.ts"
import { ResetStyle } from "./styles/reset.ts"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export const App = () => {

  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </>
  )
}