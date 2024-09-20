import React, { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import the Auth0 hook
import './Nav.css';

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0(); // Use the Auth0 hook
  const navigate = useNavigate();
  const [showDashboardLink, setShowDashboardLink] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated and user object is defined
    if (isAuthenticated && user) {
      const userEmail = user.email;
      console.log("User Email:", user.email);

      // Check user credentials
      if (userEmail === 'adminnn@gmail.com') {
        setShowDashboardLink(true);
      }
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <div className='main_header'>
        <div className='container'>
          <div className='logo'>
            <p>Ecom</p>
          </div>

          <div className='icon'>
            {isAuthenticated && (
              <div className='account'>
                <div className='user_icon'>
                  <AiOutlineUser />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}
            <div className='second_icon'>
              <Link to='/' className='link'>
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className='link'>
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
            <ul>
              <li>
                <Link to='/' className='link'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/product' className='link'>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to='/about' className='link'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/contact' className='link'>
                  Contact
                </Link>
              </li>
              {showDashboardLink && (
                <li>
                  <Link to='/dashboard' className='link'>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className='auth'>
            {isAuthenticated ? (
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                <CiLogout />
              </button>
            ) : (
              <button onClick={loginWithRedirect}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
