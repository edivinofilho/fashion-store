import { FooterDefault } from "../../components/Footer/index.tsx"
import { HeaderDefault } from "../../components/Header/index.tsx"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx";
import { ConteinerTopStyled } from "./style.ts"
import { useContext } from 'react';
import { IProduct } from "../../providers/ProductsContext/@types.ts";

export const ProductsPage = () => {
  const productList: IProduct[] | null = useContext(ProductContext).productList
 
  
  return (
    <ConteinerTopStyled>
      <HeaderDefault onlyBrand={false}/>
      

      <FooterDefault/>
    </ConteinerTopStyled>
  )
}