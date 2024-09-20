
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Gallerydetail from './Gallerydetail';

const App = () => {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Gallerydetail);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(initialCart);
  }, []);

  // Update local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const searchbtn = (product) => 
    {
      const change = Gallerydetail.filter((x) => 
      {
        return x.Cat === product
      })
      setProduct(change)
    }
    //product detail
    const view = (product) => 
    {
      setDetail([{...product}])
      setClose(true)
    }
  

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

