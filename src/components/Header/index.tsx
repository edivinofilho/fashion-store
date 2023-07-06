import { HeaderStyled } from "./styles.ts"
import logo from "../../assets/FAshionSTORE.svg"
import cart from "../../assets/cart.svg"
import { useContext, useEffect } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { IProduct } from "../../providers/ProductsContext/@types.ts"

interface IProps {
    onlyBrand: boolean
}

export const HeaderDefault = ({ onlyBrand }: IProps) => {

    const { setisModal, setlistCart, listCart } = useContext(ProductContext)

    useEffect(()=>{
           const newList: IProduct[] = JSON.parse(localStorage.getItem('@cartFashionStore'))
           if(newList != null){
                setlistCart(newList)
        }
    }, [listCart])


    return (
        <HeaderStyled onlyBrand={onlyBrand}>
            <div>
                <img className="Logo" src={logo} alt="Logo fashion store" />
                {onlyBrand === true ? null : <img onClick={() => { setisModal(true) }} className="Cart" src={cart} alt="icone de carrinho" />}
            </div>
        </HeaderStyled>
    )
}