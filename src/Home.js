import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import{FiTruck} from'react-icons/fi';
import{BsCurrencyDollar} from'react-icons/bs';
import{CiPercent} from'react-icons/ci';
import{BiHeadphone} from'react-icons/bi';
import{AiOutlineShoppingCart} from'react-icons/ai';
import{BsEye} from'react-icons/bs';
import{AiOutlineHeart} from'react-icons/ai';
import{AiOutlineCloseCircle} from'react-icons/ai';

import Homeproduct from "./homeproduct";
import { useAuth0 } from "@auth0/auth0-react";
import'./home.css'

const Home = ({detail, view, close, setClose}) => {
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

  return (
    <>
        {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>Our Designs Catches the eye have the best selection of the Purest and Finest Designs in the World ❤❤.</p>
                                <h3>${curElm.Price}</h3>
                                <button onClick={() => addToCart(curElm)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>Stylish Essentials for Every Occasion</h2>
                       
                            <Link to='/product' className="link">Shop Now</Link>
                    </div>
                    
                </div>
            </div>
            <div className="product_type">
              <div className="container">
              <div className="box">
                  <div className="img_box" id="beautyFashion">
                    <img src="./img/beautyFashion.jpg" alt='Beautiful Jewelry'></img>
                  </div>
                  <div className="detail">
                    <p>Beautiful Fashion</p>
                  </div>
                </div>

                <div className="box">
                  <div className="img_box">
                    <img src="./img/menIcon.jpg" alt='Beautiful Jewelry'></img>
                  </div>
                  <div className="detail  ">
                    <p>For Men </p>
                  </div>
                </div>
                
                <div className="box">
                  <div className="img_box">
                    <img src="./img/womenIcon.jpg" alt='Beautiful Jewelry'></img>
                  </div>
                  <div className="detail">
                    <p>For Women</p>
                  </div>
                </div>
                <div className="box">
                  <div className="img_box">
                    <img src="./img/kidsIcon.jpg" alt='Beautiful Jewelry'></img>
                  </div>
                  <div className="detail">
                    <p>For Kids</p>
                  </div>
                </div>
              
              </div>
            </div>
            {/* <div className="about">
              <div className="container">
                <div className="box">
                  <div className="icon">
                    <FiTruck/>
                  </div>
                  <div className="detail">
                    <h3>Free Shipping</h3>
                    <p>Oder above $8000</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <BsCurrencyDollar/>
                  </div>
                  <div className="detail">
                    <h3>Peturn & Refund</h3>
                    <p>Money Back Gaurenty</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <CiPercent/>
                  </div>
                  <div className="detail">
                    <h3>Member Discount</h3>
                    <p>On every Oder</p>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">
                    <BiHeadphone/>
                  </div>
                  <div className="detail">
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="product">
              <h2>Top Products</h2>
              <div className="container">
                {
                  Homeproduct .map((curElm) =>
                  {
                    return (
                    
                     
                      <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className='icon'>
                  {isAuthenticated ? (
                            <>
                              <li onClick={() => addToCart(curElm)}>
                                <AiOutlineShoppingCart />
                              </li>
                              {/* <li onClick={() => view(curElm)}>
                                <BsEye />
                              </li> */}
                            </>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart />
                            </li>
                          )}
                    
                    <li onClick={() => view (curElm)}><BsEye /></li>
                    <li><AiOutlineHeart /></li>                                     
                  </div>
                </div>
                <div className='detail'>
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="banner">
              <div className="container">
              <div className="detail">
               <h3>Fresh Styles Just In</h3>
               <h3>Urban Chic Essentials</h3>
               <p>$49.99</p>
               <Link to='/product' className="link">Shop Now</Link>
              </div>
              </div>
            </div>

        </>
    )
}

export default Home

