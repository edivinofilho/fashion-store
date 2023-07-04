import { HeaderStyled } from "./style.ts"
import logo from "../../assets/FAshionSTORE.svg"
import cart from "../../assets/cart.svg"

interface IProps {
    onlyBrand: Boolean
}

export const HeaderDefault = ({ onlyBrand }: IProps) => {

    return (
        <HeaderStyled onlyBrand={onlyBrand}>
            {onlyBrand === true ? null : <img src={logo} alt="Logo fashion store" />}
            <img src={cart} alt="icone de carrinho" />
        </HeaderStyled>
    )
}