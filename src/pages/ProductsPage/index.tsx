import { FooterDefault } from "../../components/Footer/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx";
import { ConteinerTopStyled, ProductMainStyled } from "./style.ts"
import { useContext } from 'react';
import { IProduct } from "../../providers/ProductsContext/@types.ts";
import cart from "../../assets/cartPlus.svg"
import { StyledProductList } from "../../styles/UlStyled.ts";
import { ProductItem } from "../../components/ProductItem/index.tsx";

export const ProductsPage = () => {
  const { productList, currentProduct } = useContext(ProductContext)

  const filterProductList = productList?.filter(product => product.id !== currentProduct?.id)

  return (

    <ConteinerTopStyled>
      <HeaderDefault onlyBrand={false} />
      <main>
      <div className="HomeProduct" ><h3 >Home &gt; {currentProduct?.name}</h3></div>
      <ProductMainStyled>
        <div>
          <img src={currentProduct?.image} />
        </div>
        <div>
          <h4>{currentProduct?.name}</h4>
          <span>{currentProduct?.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
          <p>{currentProduct?.description}</p>
          <button> <img src={cart} alt="Carrinho" /> Adicionar Ao carrinho</button>
        </div>
      </ProductMainStyled>
      <h2>Veja Também</h2>
      <StyledProductList styledDiv="otherPage" >
        {
          filterProductList?.map(item => <ProductItem key={item.id} item={item} />)

        }
      </StyledProductList>
      </main>
      <FooterDefault />
    </ConteinerTopStyled>
  )
}
