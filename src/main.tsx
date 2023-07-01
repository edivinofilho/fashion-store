import React from 'react'
import ReactDOM from 'react-dom/client'
import  { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './providers/ProductsContext/ProductsContex.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
