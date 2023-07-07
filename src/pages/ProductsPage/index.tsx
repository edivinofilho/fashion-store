import { FooterDefault } from "../../components/Footer/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx";
import { ConteinerTopStyled, ProductMainStyled } from "./style.ts"
import { useContext, useEffect } from 'react';
import { IProduct } from "../../providers/ProductsContext/@types.ts";
import cart from "../../assets/cartPlus.svg"
import { StyledProductList } from "../../styles/UlStyled.ts";
import { ProductItem } from "../../components/ProductItem/index.tsx";
import { ModalCart } from "../../components/shoppCart/index.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api.ts";
import { ButtonStyled } from "../../styles/Button.ts";

export const ProductsPage = () => {

  const { productList, currentProduct, isModal, setlistCart, listCart, setCurrentProduct } = useContext(ProductContext)

  const navigate = useNavigate()

  let { id } = useParams()
  if (!id) {
    id = "1"
  }

  useEffect(() => {
    const loadProductId = async () => {
      try {
        const { data } = await api.get(`/products/${id}`)
        setCurrentProduct(data)
      } catch (error) {
        navigate("/")
      }
    }
    loadProductId()
  }, [])

  const filterProductList = productList?.filter(product => product.id !== currentProduct?.id)


  const addCart = () => {
    const newList: IProduct[] = JSON.parse(localStorage.getItem('@cartFashionStore'))
    if (newList != null && currentProduct != null) {
      const list: IProduct[] = [...newList, currentProduct]
      localStorage.setItem('@cartFashionStore', JSON.stringify(list))
    } else if (listCart != null && currentProduct != null) {
      setlistCart([...listCart, currentProduct])
      localStorage.setItem('@cartFashionStore', JSON.stringify(listCart))
    } else {
      localStorage.setItem('@cartFashionStore', JSON.stringify([currentProduct]))
      if (currentProduct != null) {
        setlistCart([currentProduct])
      }
    }
  }

  return (

    <ConteinerTopStyled>
      <HeaderDefault onlyBrand={false} />
      <main>

        <ProductMainStyled>
          <div className="HomeProduct" ><Link to="/" >Home </Link> <h3>&gt; {currentProduct?.name}</h3></div>
          <div className="ProductContainer">
            <img className="ProductMain" src={currentProduct?.image} />

            <div>
              <h4>{currentProduct?.name}</h4>
              <span>{currentProduct?.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
              <p>{currentProduct?.description}</p>
              <ButtonStyled styleTypeButton="black"  onClick={addCart}> <img src={cart} alt="Carrinho" /> Adicionar Ao carrinho</ButtonStyled>
            </div>
          </div>
        </ProductMainStyled>
        <h2>Veja Também</h2>
        <StyledProductList styledDiv="otherPage" >
          {
            filterProductList?.map(item => <ProductItem key={item.id} item={item} />)

          }
        </StyledProductList>
      </main>
      {isModal ? <ModalCart /> : null}
      <FooterDefault />
    </ConteinerTopStyled>
  )
}
