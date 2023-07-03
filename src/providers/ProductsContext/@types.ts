import { TAddNewProductForm } from "../../components/adminComponents/AddNewProductForm/addNewProductFormSchema";

export interface IProductProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface IRemoveProduct {
  removeProduct: (itemId: number)=> void;
}

export interface IProductContextValue {
  productList: IProduct[] | null;
  removeProduct: (itemId: number) => void;
  isModalNewProductOpen: boolean;
  setIsModalNewProductsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submitAddNewProduct: (formData: TAddNewProductForm) => Promise<void>;
}