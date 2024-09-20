import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './Gallerydetail';
import './Gallery.css';

const Gallery = ({ product, setProduct, detail, view, close, setClose }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    // Load cart data from local storage when the component mounts
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(initialCart);
  }, []);

  useEffect(() => {
    // Update local storage whenever the cart state changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
      alert('new piece of this product is added')
    } else {
      const updatedCart = [...cart, { ...item, qty: 1 }];
      setCart(updatedCart);
      alert('Product is added to cart')
    }
  };
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      {close ? (
        <div className='product_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'>
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm) => {
              return (
                <div className='productbox' key={curElm.id}>
                  <div className='img-box'>
                    <img src={curElm.Img} alt={curElm.Title}></img>
                  </div>
                  <div className='detail'>
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>Our Designs Catches the eye have the best selection of the Purest and Finest Designs in the World ❤❤. </p>
                    <h3>${curElm.Price}</h3>
                    <button onClick={() => addToCart(curElm)}>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className='productbox'></div>
          </div>
        </div>
      ) : null}
      <div className='products'>
        <h2>gallery</h2>
        {/* <p>Home . products</p> */}
        <div className='container'>
          <div className='filter'>
            <div className='categories'>
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Men")}>Men</li>
                <li onClick={() => filtterproduct("Women")}>Women</li>
                <li onClick={() => filtterproduct("Kids")}>Kids</li>
                {/* <li onClick={() => filtterproduct("Braclet")}>Braclet</li> */}
              </ul>
            </div>
          </div>
          <div className='productbox'>
            <div className='contant'>
              {product.map((curElm) => {
                return (
                  <>
                    <div className='box' key={curElm.id}>
                      <div className='img_box'>
                        <img src={curElm.Img} alt={curElm.Title}></img>
                        <div className='icon'>
                          {isAuthenticated ? (
                            <>
                              <li onClick={() => addToCart(curElm)}>
                                <AiOutlineShoppingCart />
                              </li>
                              <li onClick={() => view(curElm)}>
                                <BsEye />
                              </li>
                            </>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className='detail'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>${curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

