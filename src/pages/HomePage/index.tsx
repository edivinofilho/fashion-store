import { useContext } from "react"
import { StyledProductList } from "../../styles/UlStyled.ts"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { ProductItem } from "../../components/ProductItem/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { FooterDefault } from "../../components/Footer/index.tsx"
import imgCover from "../../assets/imgCover.svg"
import { MainStyled } from "./styles.ts"
import { ModalCart } from "../../components/shoppCart/index.tsx"

export const HomePage = () => {

  const { productList, isModal } = useContext(ProductContext)

  return (
    <>
      <HeaderDefault onlyBrand={false} />
      <MainStyled>
        <div>
          <img className="imgCover" src={imgCover} alt='' />
          <h1 className="title">Kenzie Fashion Store</h1>
        </div>
        <h2>PRODUTOS EM DESTAQUE</h2>
        <StyledProductList styledDiv="otherPage" >
          {productList ? productList.map((product) => (<ProductItem key={product.id} item={product} />)) : null}
        </StyledProductList>
        {isModal ? <ModalCart /> : null}
      </MainStyled>
      <FooterDefault />
    </>
  )
}