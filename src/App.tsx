// import { ThemeProvider } from "styled-components"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle.ts"
import { ResetStyle } from "./styles/reset.ts"



export const App = () => {

  
   return (
    <>
      {/* <ThemeProvider> */}
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
      {/* </ThemeProvider> */}
    </>
  )
}