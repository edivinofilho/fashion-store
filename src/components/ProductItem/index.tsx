import { IProduct } from "../../providers/ProductsContext/@types.ts"
import cartPlus from "../../assets/cartPlus.svg"
import { LiStyled } from "./styles.ts"
import { useContext } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { Link } from "react-router-dom"
import { ButtonStyled } from "../../styles/Button.ts"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

interface IProductList {
  item: IProduct
}

export const ProductItem = ({ item }: IProductList) => {
  const { setCurrentProduct } = useContext(ProductContext)

  const addCart = () => {
    const storage = localStorage.getItem("@cartFashionStore")
    if (storage != null) {
      const newList: IProduct[] = JSON.parse(storage)
      const limiter = newList?.find((element) => element.id == item.id)
      if (limiter == undefined) {
        toast.success("Produto Adicionado!", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
       
        if (newList != null && item != null) {
          const list: IProduct[] = [...newList, item]
          localStorage.setItem("@cartFashionStore", JSON.stringify(list))
        } else if (item != null) {
          localStorage.setItem("@cartFashionStore", JSON.stringify([item]))
        }
      } else {
        toast.error("Produto já esta no carrinho!", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        
      }
    } else {
      toast.success("Produto Adicionado!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      localStorage.setItem("@cartFashionStore", JSON.stringify([item]))
    }
  }

  return (
    <LiStyled>
      <img className="image" src={item.image} />
      <div className="container">
        <p className="name">{item.name}</p>
        <p className="price">{item.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
        <div className="containerButton">
          <ButtonStyled styleTypeButton="black" onClick={addCart}><img src={cartPlus} alt="Carrinho com o sinal de + dentro" /></ButtonStyled>
          <Link className="button" to={`/product/${item.id}`} onClick={() => { setCurrentProduct(item) }}> SAIBA MAIS</Link>
        </div>
      </div>
    </LiStyled >
  )
}