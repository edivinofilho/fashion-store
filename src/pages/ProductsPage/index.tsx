import { FooterDefault } from "../../components/Footer/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx";
import { ConteinerTopStyled } from "./style.ts"
import { useContext } from 'react';
import { IProduct } from "../../providers/ProductsContext/@types.ts";
import { ProductList } from "../../components/ProductList/index.tsx";
import cart from "../../assets/cart.svg"

export const ProductsPage = () => {
  const { productList, currentProduct } = useContext(ProductContext)

  const filterProductList = productList?.filter(product => product.id !== currentProduct?.id)

  return (
    <ConteinerTopStyled>
      <HeaderDefault onlyBrand={false} />
      <div>
        <span>PRODUTO PRINCIPAL</span>
        <img src={currentProduct?.image} />
        <p>{currentProduct?.name}</p>
        <p>R$ {currentProduct?.price}</p>
        <div>
          <img src={cart} alt="Carrinho" />
          <span>Saiba Mais</span>
        </div>
      </div>
      <ProductList page="otherPage" >
        {
          filterProductList?.map(product =>
            <li key={product.id}>
              <img src={product.image} />
              <p>{product.name}</p>
              <p>R$ {product.price}</p>
              <div>
                <img src={cart} alt="Carrinho" />
                <span>Saiba Mais</span>
              </div>
            </li>)
        }

      </ProductList>


      <FooterDefault />
    </ConteinerTopStyled>
  )
}