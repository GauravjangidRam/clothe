
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/AddTo.css';

const ShoppingCartItem = ({ item, removeFromCart }) => {
  return (
    <Col md={4}>
      <Card className='AddTo-card'>
        <Image src={item.selectedImage || item.img} className="AddTo-main-image" />
        <div className='AddTo-Card-Details'>
          <h3 className='AddTo-card-name'>{item.name}</h3>
          <p className='AddTo-Size'> Size: {item.selectedSize}</p>
          <p className='AddTo-Color'>Color: {item.selectedColor}</p>
          <p className='AddTo-Price'> Price: ₹{item.newPrice}</p>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>
            Remove
          </Button>
        </div>
      </Card>
    </Col>
  );
};

const AddTo = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.newPrice, 0);
    setTotalPrice(total);
  };

  const updateCartItems = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('storage')); // Trigger custom event to update header
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    updateCartItems(updatedCartItems);
  };

  const handleBuyNow = () => {
    navigate('/payment', { state: { cartItems, totalPrice } });
  };

  return (
    <>
      <h2 className='AddTo-Heading'>Cart Items</h2>
      <Row className='AddTo-details'>
        {cartItems.map((item, index) => (
          <ShoppingCartItem key={index} item={item} removeFromCart={removeFromCart} />
        ))}
      </Row>
      <div className="AddTo-total">
        {!showTotal && (
          <Button variant="info" onClick={() => setShowTotal(true)}>
            Show Total
          </Button>
        )}
        {showTotal && (
          <>
            <p className="AddTo-Total-Price">Total Price: ₹{totalPrice}</p>
            <Button variant="success" onClick={handleBuyNow}>
              Buy Now - ₹{totalPrice}
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default AddTo;
