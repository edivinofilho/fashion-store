import React from 'react'
import ReactDOM from 'react-dom/client'
import  { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './providers/ProductsContext/ProductsContex.tsx'
import { StyleSheetManager } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'onlyBrand' && prop !== 'styleTypeButton' && prop !== 'styledDiv'}>
          <App />
        </StyleSheetManager>,
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
