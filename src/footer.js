import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
           <div className='col-md-4 col-lg-8 col-xl-4 col-5'>
            <div className='about' >
                <p className='logo'>Ecom</p>
                <div className='detail' >
                    <p>We are a team of designers and developers that create high quality websites</p>
                    <div className='icon'>
                        <li className='ffa'><a  href="https://facebook.com" target='_blank'><RiFacebookFill /></a></li>
                        <li   className='iia'> <a  href="https://instagram.com" target='_blank'><AiOutlineInstagram /></a></li>
                        <li  className='tta'> <a  href="https://twitter.com" target='_blank'><AiOutlineTwitter /></a></li>
                        <li  className='you' > <a  href="https://youtube.com" target='_blank'><BsYoutube /></a></li>
                    </div>
                </div>
            </div>
            </div>
            <div className='col-md-4 col-lg-2 col-xl-4 col-3'>
            <div className='account' >
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li ><Link to="/cart" className="link"> Order</Link></li>
                    <li > <Link to="/cart" className="link">Cart</Link></li>
                    <li ><Link to="/" className="link">return</Link></li>
                </ul>
            </div>
            </div>
            <div className='col-md-4 col-lg-2 col-xl-4 col-4'>
            <div className='page' >
                <h3>Pages</h3>
                <ul>
                <li><Link to="/" className="link">Home</Link></li>
                    <li> <Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <li><Link to="/product" className="link">Gallery</Link></li>
                    
                </ul>
            
            </div>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default Footer