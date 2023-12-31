import { Modal } from "../../components/Modal/index"
import { TopSectionAdmin } from "../../components/adminComponents/TopSectionAdmin"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { useContext, useState } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex"
import { IProduct } from "../../providers/ProductsContext/@types"
import { AddNewProductForm } from "../../components/adminComponents/AddNewProductForm"
import { EditProductForm } from "../../components/adminComponents/EditProductForm"
import { HeaderDefault } from "../../components/Header"
import { FooterStyled } from "../../components/Footer/styles"
import { ButtonStyled } from "../../styles/Button"
import { StyledTopSectionContainer } from "./styles"
import { StyledProductList } from "../../styles/UlStyled"
import plusImg from "../../../src/assets/plusSign.svg"
import ediButtonImg from "../../../src/assets/editButton.svg"
import deleteImg from "../../../src/assets/deleteButton.svg"

export const AdminDashboardPage = () => {

  const productList: IProduct[] = useContext(ProductContext).productList ||[]

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const { removeProduct, isModalNewProductOpen, setIsModalNewProductsOpen, isModalEditProduct, setisModalEditProduct } = useContext(ProductContext)

  return (
    <>
      <HeaderDefault onlyBrand={true} />
      <NavAdminBar />
      <StyledTopSectionContainer>
        <TopSectionAdmin title="PRODUTOS" message="Gerencie os produtos do catálogo" />
        <ButtonStyled styleTypeButton="black"
          onClick={() => setIsModalNewProductsOpen(true)}> {<img src={plusImg} alt="Sinal de adição" />} NOVO PRODUTO</ButtonStyled>
      </StyledTopSectionContainer>
      <main>
        <StyledProductList styledDiv="adminPage">
          {productList.length > 0 ? productList.map((product) => (
            <li key={product.id}>
              <div>
                <img src={product.image} />
                <span>
                  <p>{product.name}</p>
                  <p>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                </span>
              </div>
              <div>
                <button onClick={() => {
                  setSelectedProduct(product)
                  setisModalEditProduct(true)
                }}>{<img src={ediButtonImg} className="buttonIcon" />}</button>
                <button onClick={() =>
                  removeProduct(product.id)
                }>{<img src={deleteImg} alt="Botão para remover produto" className="buttonIcon" />}</button>
              </div>
            </li>
          )) : <h2>Nenhum produto diponível no momento</h2>}
        </StyledProductList>
        {isModalNewProductOpen ?
          <Modal title="NOVO PRODUTO" styleModal="adminModal" setModalState={() => setIsModalNewProductsOpen(false)}>
            <AddNewProductForm />
          </Modal>
          : null
        }
        {isModalEditProduct ?
          <Modal title="EDITAR PRODUTO" styleModal="adminModal" setModalState={() => setisModalEditProduct(false)}>
            <EditProductForm product={selectedProduct} />
          </Modal>
          : null
        }
      </main>
      <FooterStyled>
        <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
      </FooterStyled>
    </>
  )
}