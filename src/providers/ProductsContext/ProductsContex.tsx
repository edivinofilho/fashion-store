import { createContext, useState, useEffect } from "react"
import { api } from "../../services/api"
import { IProduct, IProductProviderProps, IProductContextValue } from "./@types"
import { TAddNewProductForm } from "../../components/adminComponents/AddNewProductForm/addNewProductFormSchema"
import { TeditProductFormSchema } from "../../components/adminComponents/EditProductForm/editProductSchema"


export const ProductContext = createContext({} as IProductContextValue)
 
export const ProductsProvider = ({ children }:IProductProviderProps) => {
  const [ isModalNewProductOpen, setIsModalNewProductsOpen ] = useState(false)

  const [isModalEditProduct, setisModalEditProduct] = useState(false)

  const [productList, setProductList] = useState<IProduct[] | null>(null)

  const [ currentProduct, setCurrentProduct ] = useState<IProduct | null>(null)

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
    const token = localStorage.getItem('@TOKEN')
   
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

  const submitAddNewProduct = async (formData: TAddNewProductForm) : Promise<void> => {
    const token = localStorage.getItem("@TOKEN")

    try {
      const { data } = await api.post("/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedProductList = productList ? [...productList, data] : null
      setProductList(updatedProductList)
      setIsModalNewProductsOpen(false)

    } catch (error){
      console.log(error)
      setIsModalNewProductsOpen(false)
    }
  }

  const submitEditProduct = async (formData: TeditProductFormSchema, productId: string) => {
    console.log(formData)
    const token = localStorage.getItem("@TOKEN")
    
    try {
      const { data } = await api.put(`/products/${productId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(productList){
        const productIndex = productList.findIndex(product => product.id.toString() === productId)
        if (productIndex !== -1) {
          const updatedProductList = [...productList]
          updatedProductList[productIndex] = data 
          setProductList(updatedProductList)
        }
      }
    
    } catch (error) {
      console.log(error)
    }

    setisModalEditProduct(false)
  }

  return (
    <ProductContext.Provider value={{  productList, currentProduct, setCurrentProduct, removeProduct, isModalNewProductOpen, setIsModalNewProductsOpen, submitAddNewProduct, submitEditProduct, isModalEditProduct, setisModalEditProduct}}>
      { children }
    </ProductContext.Provider>
  )
}