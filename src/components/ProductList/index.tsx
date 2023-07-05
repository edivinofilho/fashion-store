import { StyledProductList } from "./styles.ts";

interface IProductList {
  children: React.ReactNode;
  page: "otherPage" | "adminPage";
}

export const ProductList = ({ children, page }: IProductList) => {
  return (
    <StyledProductList styleDiv={page}>
      {children}
    </StyledProductList>
  )
}