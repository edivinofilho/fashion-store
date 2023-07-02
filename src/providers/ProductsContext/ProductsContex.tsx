import { createContext, useState, useEffect } from "react"
import { api } from "../../services/api"
import { IProduct, IProductProviderProps } from "./@types"

interface IProductContextValue {
  productList: IProduct[] | null;
  removeProduct: (itemId: number) => void;
}

export const ProductContext = createContext<IProductContextValue>({
  productList: null,
  removeProduct: (itemId: number) => {},
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

  const removeProduct = async (itemId : number) => {
    // const token = localStorage.getItem('@TOKEN')
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGVtYWlsLmNvbSIsImlhdCI6MTY4ODI0OTU1OCwiZXhwIjoxNjg4MjUzMTU4LCJzdWIiOiIyIn0.4NNMXWK51J7Jti4eKA0uGw95mJAp5uF2zP6CG0-zIcA'

    if(productList !== null){
      try {
        api.delete(`/products/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const updatedProductList = productList.filter((item) => item.id !== itemId)

        setProductList(updatedProductList)

      } catch (error){
        console.log(error)
      }

    }

  } 

  return (
    <ProductContext.Provider value={{ productList, removeProduct}}>
      { children }
    </ProductContext.Provider>
  )
}