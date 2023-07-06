import { FooterStyled } from "../../components/Footer/styles"
import { TopSectionAdmin } from "../../components/adminComponents/TopSectionAdmin"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { HeaderDefault } from "../../components/Header"
import { StyledTopSectionContainer } from "../AdminDashboardPage/styles"


export const AdminDashboardWelcomePage = () => {
  const user = localStorage.getItem("@USER")

  return (
    <>
      <HeaderDefault onlyBrand={true}/>
      <NavAdminBar />
      <StyledTopSectionContainer>
        <TopSectionAdmin title="PAINEL DO ADMINISTRADOR" message={`Seja bem vindo, ${user}!`}/>
      </StyledTopSectionContainer>
      <main>
      </main>
      <FooterStyled>
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </FooterStyled>
    </>
  )
}