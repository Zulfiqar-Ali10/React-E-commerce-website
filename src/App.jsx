import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './UserSide/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './UserSide/Products'
import Contact from './UserSide/Contact'
import Admin from './assets/AdminSide/Admin'
import Order from './assets/AdminSide/Orders'
import Auth from './assets/AdminSide/Auth'
import About from './UserSide/About'
import CartPage from './Components/CartPage'
import CheckoutPage from './Components/CheckoutPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/order' element={<Order />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
