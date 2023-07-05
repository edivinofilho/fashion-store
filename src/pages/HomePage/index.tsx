import { useContext } from "react"
import { StyledProductList } from "../../components/ProductList/styles.ts"
import { IProduct } from "../../providers/ProductsContext/@types.ts"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { ProductItem } from "../../components/ProductItem/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { FooterDefault } from "../../components/Footer/index.tsx"
import imgCover from "../../assets/imgCover.svg"

export const HomePage = () => {

  const productList: IProduct[] | null = useContext(ProductContext).productList

  return (
    <>
      <HeaderDefault onlyBrand={false} />
      <main>
        <div>
          <img src={imgCover} alt='' />
          <h1>Kenzie Fashion Store</h1>
        </div>
        <h2>PRODUTOS EM DESTAQUE</h2>
        <StyledProductList styledDiv="otherPage" >
          {productList ? productList.map((product) => (<ProductItem key={product.id} item={product} />)) : null}
        </StyledProductList>
      </main>
      <FooterDefault />
    </>
  )
}