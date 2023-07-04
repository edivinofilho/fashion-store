import { Modal } from "../../components/Modal/index"
import { Header } from "../../components/adminComponents/Header"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { ProductList } from "../../components/ProductList"
import { useContext, useState } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex"
import { IProduct } from "../../providers/ProductsContext/@types"
import { AddNewProductForm } from "../../components/adminComponents/AddNewProductForm"
import { EditProductForm } from "../../components/adminComponents/EditProductForm"


export const AdminDashboardPage = () => {
  
  const productList: IProduct[] | null = useContext(ProductContext).productList

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const { removeProduct, isModalNewProductOpen, setIsModalNewProductsOpen, isModalEditProduct, setisModalEditProduct } = useContext(ProductContext)

  
  return (
    <>
      <h1>LOGO</h1>
      <NavAdminBar />
      <Header title="PRODUTOS" message="Gerencie os produtos do catálogo"/>
      <button onClick={() => setIsModalNewProductsOpen(true)}> + NOVO PRODUTO</button>

      <main>
        <ProductList>
          {productList ? productList.map((product) => (
          <li key={product.id}>
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => {
              setSelectedProduct(product)
              setisModalEditProduct(true)
            
              }}>Editar</button>
            <button onClick={() => removeProduct(product.id)}>Remover</button>
          </li>
        )) : null}
        </ProductList>

        { isModalNewProductOpen ? 
          <Modal title="NOVO PRODUTO" setModalState={() => setIsModalNewProductsOpen(false)}>
            <AddNewProductForm />
          </Modal>
          : null
        }

        { isModalEditProduct ? 
          <Modal title="EDITAR PRODUTO" setModalState={() => setisModalEditProduct(false)}>
            <EditProductForm product={selectedProduct}/>
          </Modal>
          : null
        }
      </main>
    </>
  )
}