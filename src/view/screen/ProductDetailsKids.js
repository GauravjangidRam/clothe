

import React, { useState } from 'react';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/ProductDetailsKids.css';

export const ProductDetailsKids = () => {
  const location = useLocation();
  const kidsData = location.state;
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(kidsData.img);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(kidsData);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
    alert("Product will be Add")
  };

  const handleBuyNow = () => {
    navigate('/AddToCart', { state: kidsData });
  };

  return (
    <Container>
      <div className="kidsHeading">
        <h1 className="KidsMainHeading">Product Details</h1>
        <hr className="Kids-heading-line" />
      </div>
      <Row className="Kids-Main-Image">
        <Col md={8} className="Kids-Image-section">
          <Image className="Kids-img-style" src={mainImage} fluid />
          <div className="Kids-image-section">
            {kidsData.sideimg &&
              kidsData.sideimg.map((value, index) => (
                <Card
                  key={index}
                  style={{ width: '6rem', marginBottom: '10px', border: 'none' }}
                  onClick={() => handleImageClick(value)}
                >
                  <Image src={value} className="Kids-left-img-style" />
                </Card>
              ))}
          </div>
        </Col>
        <Col md={4} className="Kids-right-details">
          <div className="Kids-right-box">
            <h3 className="Kids-Name-1">{kidsData.name}</h3>
            <h5 className="Kids-Name-2">{kidsData.name1}</h5>
            <p className="Kids-Rating">
              <button className="Kids-btn-rating">
                {kidsData.rating}/{kidsData.view} Rating
              </button>
            </p>
            
            <p className="Kids-mrp">
           <span className='Kids-'> <h4 className="Kids-newPrice">&#8377;{kidsData.newPrice}</h4></span><del className='Kids-Old-Prce'>&#8377;{kidsData.oldPrice}</del> <span className='Kids-Offer-s'>{kidsData.offer}</span>
            </p>
            <p className='Kids-Pr'>Price inclusive of all taxes</p>
            <div className="Kids-buy-add">
              <button type="button" className="Kids-Add-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button type="button" className="Kids-Buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </Col>
      </Row>
      {showSuccessMessage && (
        <div className="success-message">Product added to cart!</div>
      )}
    </Container>
  );
};
