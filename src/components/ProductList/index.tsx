interface IProductList {
  children: React.ReactNode;
}

export const ProductList = ({children} : IProductList) => {
  return (
    <ul>
      {children}
    </ul>
  )
}