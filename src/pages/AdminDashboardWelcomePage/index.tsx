import { FooterStyled } from "../../components/Footer/styles"
import { TopSectionAdmin } from "../../components/adminComponents/TopSectionAdmin"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { HeaderDefault } from "../../components/Header"


export const AdminDashboardWelcomePage = () => {
  const user = localStorage.getItem("@USER")

  return (
    <>
      <HeaderDefault onlyBrand={true}/>
      <NavAdminBar />
      <TopSectionAdmin title="PAINEL DO ADMINISTRADOR" message={`Seja bem vindo, ${user}!`}/>
      
      <main>
      </main>
      <FooterStyled>
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </FooterStyled>
    </>
  )
}