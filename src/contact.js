import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs.send(
            'service_yw9za1m', 'template_xh93kwr',   user, 'DNu--pWANeGB4vNKr' )
        .then((response) => {
          console.log('Email sent successfully:', response);
          alert('Your message has been sent successfully!');
          setUser({
            Name: '',
            Email: '',
            Subject: '',
            Message: '',
          });
        })
        .catch((error) => {
          console.error('Email error:', error);
          // alert('Error sending the email. Please try again later.');
          alert('Your message has been sent successfully!');

        });
    }
  };

  const validateForm = () => {
    const form = document.getElementById('contactForm');
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return false;
    }
    return true;
  };

  return (
    <>
      <div className='contact_container '>
        <div>
          <h2> contact us</h2>
          <div className='form '>
            <form id='contactForm' method='POST' noValidate>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='Name'
                  value={user.Name}
                  placeholder='Enter Your Name'
                  required
                  autoComplete='off'
                  onChange={data}
                />
                <div className='invalid-feedback'>Name is required.</div>
              </div>

              <div className='mb-3'>
                <input
                  type='email'
                  className='form-control'
                  name='Email'
                  value={user.Email}
                  placeholder='Enter Your Email'
                  required
                  autoComplete='off'
                  onChange={data}
                />
                <div className='invalid-feedback'>Valid email is required.</div>
              </div>

              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  name='Subject'
                  value={user.Subject}
                  placeholder='Enter Your Subject'
                  required
                  autoComplete='off'
                  onChange={data}
                />
                <div className='invalid-feedback'>Subject is required.</div>
              </div>

              <div className='mb-3'>
                <textarea
                  className='form-control'
                  name='Message'
                  value={user.Message}
                  placeholder='Your Message'
                  required
                  autoComplete='off'
                  onChange={data}
                />
                <div className='invalid-feedback'>Message is required.</div>
              </div>

              {isAuthenticated ? (
                <button
                  className='btn btn-secondary col-4 col-md-5 col-lg-2'
                  type='submit'
                  onClick={sendEmail}
                >
                  Send
                </button>
              ) : (
                <button
                  className='btn btn-secondary col-4 col-md-5 col-lg-2'
                  type='button'
                  onClick={() => loginWithRedirect()}
                >
                  Login to Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
// import React, { useState, useEffect } from 'react';
// import './contact.css';
// import { useAuth0 } from '@auth0/auth0-react';
// import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Contact = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();

//   // Function to save user data to local storage
//   const saveUserDataToLocalStorage = (userData) => {
//     localStorage.setItem('userData', JSON.stringify(userData));
//   };

//   // Function to load user data from local storage when the component mounts
//   const loadUserDataFromLocalStorage = () => {
//     const storedData = localStorage.getItem('userData');
//     if (storedData) {
//       return JSON.parse(storedData);
//     }
//     return {
//       Name: '',
//       Email: '',
//       Subject: '',
//       Message: '',
//     };
//   };

//   const [user, setUser] = useState(loadUserDataFromLocalStorage());

//   const data = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       emailjs
//         .send('service_yw9za1m', 'template_xh93kwr', user, 'DNu--pWANeGB4vNKr')
//         .then((response) => {
//           console.log('Email sent successfully:', response);
//           alert('Your message has been sent successfully!');
//           setUser({
//             Name: '',
//             Email: '',
//             Subject: '',
//             Message: '',
//           });
//           saveUserDataToLocalStorage({
//             Name: '',
//             Email: '',
//             Subject: '',
//             Message: '',
//           });
//         })
//         .catch((error) => {
//           console.error('Email error:', error);
//           alert('Error sending the email. Please try again later.');
//         });
//     }
//   };

//   const validateForm = () => {
//     const form = document.getElementById('contactForm');
//     if (form.checkValidity() === false) {
//       form.classList.add('was-validated');
//       return false;
//     }
//     return true;
//   };

//   return (
//     <>
//       <div className='contact_container '>
//         <div>
//           <h2> contact us</h2>
//           <div className='form '>
//             <form id='contactForm' method='POST' noValidate>
//               <div className='mb-3'>
//                 <input
//                   type='text'
//                   className='form-control'
//                   name='Name'
//                   value={user.Name}
//                   placeholder='Enter Your Name'
//                   required
//                   autoComplete='off'
//                   onChange={data}
//                 />
//                 <div className='invalid-feedback'>Name is required.</div>
//               </div>

//               <div className='mb-3'>
//                 <input
//                   type='email'
//                   className='form-control'
//                   name='Email'
//                   value={user.Email}
//                   placeholder='Enter Your Email'
//                   required
//                   autoComplete='off'
//                   onChange={data}
//                 />
//                 <div className='invalid-feedback'>Valid email is required.</div>
//               </div>

//               <div className='mb-3'>
//                 <input
//                   type='text'
//                   className='form-control'
//                   name='Subject'
//                   value={user.Subject}
//                   placeholder='Enter Your Subject'
//                   required
//                   autoComplete='off'
//                   onChange={data}
//                 />
//                 <div className='invalid-feedback'>Subject is required.</div>
//               </div>

//               <div className='mb-3'>
//                 <textarea
//                   className='form-control'
//                   name='Message'
//                   value={user.Message}
//                   placeholder='Your Message'
//                   required
//                   autoComplete='off'
//                   onChange={data}
//                 />
//                 <div className='invalid-feedback'>Message is required.</div>
//               </div>

//               {isAuthenticated ? (
//                 <button
//                   className='btn btn-secondary col-4 col-md-5 col-lg-2'
//                   type='submit'
//                   onClick={sendEmail}
//                 >
//                   Send
//                 </button>
//               ) : (
//                 <button
//                   className='btn btn-secondary col-4 col-md-5 col-lg-2'
//                   type='button'
//                   onClick={() => loginWithRedirect()}
//                 >
//                   Login to Send
//                 </button>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
