import React from 'react';
import "./about.css"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-container">
        <div className='about'>
      <h2>About Us</h2>
      <div className='row'>
        <img src='./img/aboutus.jpg' className='image col-12 col-lg-4' alt="Our store front"/>
        <div className='welcome col-12 col-lg-7'>
        <p>
        Welcome to <Link to={'/'} className='home'>Ecom App</Link>, where style meets comfort. We're passionate about delivering fashion-forward clothing that helps you express your unique personality.
        </p><p>
        Since our inception in 2015, we've been dedicated to providing you with high-quality, trendy clothing that doesn't compromise on comfort. Each piece in our collection is carefully selected to ensure you look and feel your best.
        </p>
        </div>
      </div>
      <div className='info'>
      <p>
        What sets us apart:
      </p>
      <ul>
        <li>Quality Fabrics: We source only the finest materials to ensure comfort and durability.</li>
        <li>On-Trend Designs: Our collection features the latest fashion trends, keeping you stylish year-round.</li>
        <li>Inclusive Sizing: We believe fashion is for everyone, offering a wide range of sizes to suit all body types.</li>
        <li>Customer-Centric: Your satisfaction is our priority. We offer excellent customer service and a hassle-free shopping experience.</li>
      </ul>
      </div>
      <div className='our-story'>
          <h3>Our Story</h3>
          <p>
          <Link to={'/'} className='home'>Ecom App</Link> began as a small boutique with a big dream - to make fashion accessible, comfortable, and exciting for everyone. What started as a modest venture has now grown into a beloved destination for fashion enthusiasts.
          </p>
          <p>
            Over the years, we've remained true to our commitment to quality, style, and customer satisfaction. Our team of fashion experts works tirelessly to curate collections that resonate with our diverse clientele, ensuring that everyone can find pieces that make them feel confident and stylish.
          </p>
          <p>
            Today, <Link to={'/'} className='home'>Ecom App</Link> stands as a testament to our passion for fashion and our dedication to our customers. We invite you to explore our diverse collection and join us on our journey as we continue to redefine casual and formal wear for the modern individual.
          </p>
        </div>
      <div className='details'>
      <p>
        Whether you're looking for the perfect outfit for a night out, comfortable everyday wear, or a standout piece to express your unique style, we have something special for every occasion.
        <Link to={'/product'} className='shop'>
            Shop Now
        </Link>
        <br/>  <br/>  
        For any inquiries or to get in touch with us, please visit our <Link to={'/contact'} className='contact'>Contact Us</Link> page.
      </p>
      <p className='thanks'>
        Thank you for choosing <Link to={'/'} className='home'>Ecom App</Link> for your fashion needs.
      </p>
      <p className='wish'>
        We look forward to helping you express your style and confidence through our clothing.</p>
      </div>
     
      </div>
    </div>
  );
};

export default AboutUs;