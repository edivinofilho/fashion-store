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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from "react-router-dom";
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
    const storage = localStorage.getItem('@cartFashionStore')
    if (storage != null) {
      const newList: IProduct[] = JSON.parse(storage)
      if (currentProduct !== null) {
        const limiter = newList?.find((element) => element.id === currentProduct.id)
        if (limiter == undefined) {
          if (newList != null) {
            const list: IProduct[] = [...newList, currentProduct]
            localStorage.setItem('@cartFashionStore', JSON.stringify(list))
            toast.success('Produto Adicionado!', {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            localStorage.setItem('@cartFashionStore', JSON.stringify([currentProduct]))
            toast.success('Produto Adicionado!', {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      }
    }
  }

  return (

    <ConteinerTopStyled>
      <HeaderDefault onlyBrand={false} />
      <main>

        <ProductMainStyled>
          <div className="HomeProduct" ><Link className="button" to="/" >Home </Link> <h3>&gt; {currentProduct?.name}</h3></div>
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
      <ToastContainer/>
    </ConteinerTopStyled>
  )
}
