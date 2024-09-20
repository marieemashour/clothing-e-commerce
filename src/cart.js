import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
    const { user, isAuthenticated} = useAuth0();
  const [cart, setCart] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(initialCart);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.Price * item.qty, 0);
  };
// Function to increment the quantity of an item in the cart
const incrementQuantity = (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      updatedCart[index].qty += 1;
      setCart(updatedCart);
  
      // Update local storage with the updated cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  
  // Function to decrement the quantity of an item in the cart
  const decrementQuantity = (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1 && updatedCart[index].qty > 1) {
      updatedCart[index].qty -= 1;
      setCart(updatedCart);
  
      // Update local storage with the updated cart
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };


const sendEmail = () => {
    // Check if the user is authenticated and their email is available
    if (!isAuthenticated || !user?.email) {
      alert('Please log in and provide your email before confirming the purchase.');
      return;
    }
  
    const userEmail = user.email;
  
    const emailMessage = `Thank you for your purchase!\n\nItems:\n${cart
      .map(item => `${item.Title} - $${item.Price} x ${item.qty}`)
      .join('\n')}\n\nTotal Price: $${calculateTotalPrice()}`;
  
    const templateParams = {
      to_email: userEmail, // 
      message: emailMessage
    };
  
   
    

  
    emailjs
      .send('service_yw9za1m', 'template_xh93kwr', templateParams, 'DNu--pWANeGB4vNKr')
      .then(response => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully with cart items!');
        setEmailSent(true);
        // Clear the cart and local storage after sending the email
        setCart([]);
        localStorage.removeItem('cart');
      })
      .catch(error => {
        console.error('Email error:', error);
        alert('Error sending the email. Please try again later.');
      });
  };

  const clearCart = () => {
        // Clear the cart state
        setCart([]);
        
   
        localStorage.removeItem('cart');
      };
  
 

const removeExactItem = (item) => {
 
  const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  return (
    <div className='cartcontainer'>
      {cart.length === 0 && 
        <div className='emptycart'>
          <h2 className='empty'>Cart is Empty</h2>
          <Link to='/product' className='emptycartbtn btn btn-dark col-5 col-md-5 col-lg-2'>Shop Now</Link>
        </div>
      }
      <div className='contant'>
        {cart.map(item => (  
          <div className='cart_item' key={item.id}>
            
            <div className='img_box'>
              <img src={item.Img} alt={item.Title} />
            </div>
            <div className='detail'>
              <div className='info'>
                <h4>{item.Cat}</h4>
                <h3>{item.Title}</h3>
                <p>Price: ${item.Price}</p>
                <div className='qty'>
                  <button className='incqty' onClick={() => incrementQuantity(item)}>+</button>
                  <div className='m-5'>{item.qty}</div>
                  <button className='decqty' onClick={() => decrementQuantity(item)}>-</button>
                </div>
                <h4 className='subtotal'>Subtotal: ${item.Price * item.qty}</h4>
              </div>
              <div className='close'>
                <button onClick={ () => removeExactItem(item) } >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cart.length !== 0 && !emailSent && (
        <div className='row  ' >
          <div className='col-6 row'>
            <button onClick={sendEmail} className='btn btn-secondary sendmail  '>Confirm Buying</button>
          </div>
        
        </div>
        
      )}

      {cart.length !== 0 && !emailSent && (
        <div className='row  '>
          <div className='col-7 mt-4 total'>
            
            
            <p>Total Price: ${calculateTotalPrice()}</p>
            <button onClick={clearCart} className='btn btn-danger col-10'> Clear Cart</button>
          </div>
        </div>
      )}
     
      {emailSent && (
        <p style={{ marginLeft: '450px' }}>Email sent! Cart items have been sent to {user.email}.</p>
      )}
    </div>
  );
};

export default Cart;



























