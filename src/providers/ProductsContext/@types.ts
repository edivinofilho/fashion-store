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