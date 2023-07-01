import { useContext } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex"
import { IProduct } from "../../providers/ProductsContext/@types"


export const ProductCard = () => {
  const productList: IProduct[] | null = useContext(ProductContext).productList

  const { removeProduct } = useContext(ProductContext)
  
  return (
    <>
      {productList ? productList.map((product) => (
        <li key={product.id}>
          <img src={product.image}/>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button>Editar</button>
          <button onClick={() => removeProduct(product.id)}>Remover</button>
        </li>
      )) : null}
    </>
  )
}