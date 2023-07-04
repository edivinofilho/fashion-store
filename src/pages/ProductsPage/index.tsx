import { FooterDefault } from "../../components/Footer"
import { HeaderDefault } from "../../components/Header"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex";
import { ConteinerTopStyled } from "./style"
import { useContext } from 'react';
import { ProductList } from './../../components/ProductList/index';

export const ProductsPage = () => {
  const productList: IProduct[] | null = useContext(ProductContext).productList
 
  
  return (
    <ConteinerTopStyled>
      <HeaderDefault/>
      

      <FooterDefault/>
    </ConteinerTopStyled>
  )
}