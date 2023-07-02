import { Header } from "../../components/adminComponents/Header"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { ProductList } from "../../components/ProductList"


export const AdminDashboardPage = () => {

  const submit = () => {
    console.log('Novo Produto')
  }

  return (
    <>
      <h1>LOGO</h1>
      <NavAdminBar />
      <Header title='PRODUTOS' message='Gerencie o produtos do catálogo'/>
      <button onClick={submit}>NOVO PRODUTO</button>

      <main>
        <ProductList />
      </main>
    </>
  )
}