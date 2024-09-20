import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Gallery from './Gallery'
import Cart from './cart'
import Contact from './contact'
import AboutUs from './about'
import Home from './Home'

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Gallery product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs/>}/>
    </Routes>
    </>
  )
}

export default Rout