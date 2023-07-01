import { createContext, useState, useEffect } from "react"
import { api } from "../../services/api"
import { IProduct, IProductProviderProps } from "./@types"

interface IProductContextValue {
  productList: IProduct[] | null
}

export const ProductContext = createContext<IProductContextValue>({
  productList: null,
})

export const ProductsProvider = ({ children }:IProductProviderProps) => {

  const [productList, setProductList] = useState<IProduct[] | null>(null)

  useEffect(() => {       
    const loadProducts = async () => {
      try {
        const { data } = await api.get('/products')
        setProductList(data) 
    
      } catch(error){
        console.log(error)
                
      } finally {
        // setLoading(false)
      }
          
    }
    loadProducts()

  }, [])

  return (
    <ProductContext.Provider value={{ productList}}>
      { children }
    </ProductContext.Provider>
  )
}