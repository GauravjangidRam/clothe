

import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/Cart.css';

export default function AddToCart() {
    const location = useLocation();
    const productDetails = location.state;
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(productDetails.newPrice);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        setTotalPrice(newQuantity * productDetails.newPrice);
    };

    const navigate = useNavigate();

    const handleCheckout = () => {
        const paymentData = {
            productDetails,
            quantity,
            totalPrice,
        };
        navigate('/payment', { state: paymentData });
    };

    return (
        <Container className="main-box1">
            <Row className="main-row">
                <Col>
                    <h1 className="cart-title">Product Cart</h1>
                    <Card className="cart-details1">
                        <Card.Body className="cart-body1">
                            <Row className="cart-row1">
                                <Col md={6} className="main-img-1">
                                    <Image src={productDetails.img} className="cart-image-0" />
                                </Col>
                                <Col md={6} className="cart-details-col">
                                    <h5 className="cart-product-name">{productDetails.name1}</h5>
                                    <h4 className="cart-product-price">Price: &#8377;{productDetails.newPrice}</h4>
                                    <p className="cart-product-size">Selected Size: {productDetails.selectedSize}</p>
                                    <p className="cart-product-color-label">Selected Color: </p>
                                    <div className="cart-selected-color">
                                        <span className="cart-color-circle" style={{ backgroundColor: productDetails.selectedColor }}></span>
                                    </div>
                                    <Form.Group as={Row} controlId="quantity" className="cart-quantity-group">
                                        <Form.Label column sm="3" className="cart-quantity-label">Quantity</Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                className="cart-quantity-input"
                                            />
                                        </Col>
                                    </Form.Group>
                                    <h5 className="cart-total-price">Total Price: &#8377;{totalPrice}</h5>
                                    <Button variant="primary" onClick={handleCheckout} className="cart-checkout-button">
                                        Proceed to Checkout
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
