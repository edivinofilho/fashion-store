import { ThemeProvider } from "styled-components"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle"
import { ResetStyle } from "./styles/reset"


export const App = () => {

  
  
   return (
    <>
      <ThemeProvider theme="light">
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
      </ThemeProvider>
    </>
  )
}