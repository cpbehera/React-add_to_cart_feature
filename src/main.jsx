import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './Context/CartContext'
import './index.css'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
