import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CartProvider } from "./context/cartcontext.jsx";
import { WishlistProvider } from "./context/wishlistcontext.jsx";
import { ToastProvider } from "./context/toast.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
         <ToastProvider>
      <App />
      </ToastProvider>
      </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
