import { HeaderStyled } from "./style.ts"
import logo from ".././FAshionSTORE.svg"
import cart from ".././cart.svg"

export const HeaderDefault = () => {

    return (
        <HeaderStyled>
            <img src={logo} alt="Logo fashion store" />
            <img src={cart} alt="icone de carrinho" />
        </HeaderStyled>
    )
}