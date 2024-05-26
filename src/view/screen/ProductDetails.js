import { Card, Container, Image, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/MenProductDetails.css';

function ProductDetails() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [details1, setDetails] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setDetails(loc.state);
    setSelectedImage(loc.state.img);
  }, [loc.state]);

  function AddTo() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newCartItem = { ...details1, selectedSize, selectedColor };
    cartItems.push(newCartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    navigate('/AddTo', { state: { cartItems } });
    alert("Product Will be Add  ");
  }

  const BuyNow = () => {
    navigate('/AddToCart', { state: { ...details1, selectedSize, selectedColor } });
  }

  const handleSideImageClick = (image) => {
    setSelectedImage(image);
  }

  return (
    <Container className="Men-Product">
      <div className="Men-Heading">
        <h1 className="Men-heading-add">Product Details</h1>
        <hr className="Men-heading-line" />
      </div>
      <Row>
        <Col md={6} className="Men-Product-Details">
          <Image className="Men-Image-section" src={selectedImage}  />
          <div className="Men-image-left">
            {details1 && details1.sideimg.map((value, index) => (
              <Card key={index} onClick={() => handleSideImageClick(value)} className="side-img-card">
                <Image src={value} className="Men-side-image-left" />
              </Card>
            ))}
          </div>
        </Col>
        <Col md={6} className="Men-right-details">
          <div className="Men-right-box">
            <h3 className="Men-Name">{details1.name}</h3>
            <h5 className="Men-name1">{details1.name1}</h5>
            <p className="Men-rating">
              <button className="Men-btn-rating">{details1.rating}<span>/{details1.view}</span> Rating</button>
            </p>
          
            <p className="Men-mrp"> <span className="Men-New-Price">&#8377;{details1.newPrice}</span> <del>&#8377;{details1.oldPrice}</del><span className="Men-Offer-Price">{details1.offer}</span> </p>
            <p style={{textAlign:'center'}}>Price inclusive of all taxes</p>  
            <p className="Men-size-section"><h5>Select Size</h5></p>
            <div className="size-btn">
              {details1 && details1.size.map((value, index) => (
                <button 
                  key={index} 
                  className={`size-btn1 ${selectedSize === value ? 'selected' : ''}`} 
                  onClick={() => setSelectedSize(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <h5 className="Men-text-color">Color Choices</h5>
            <div className="Men-color-btn">
              {details1 && details1.color.map((color, index) => (
                <button 
                  key={index} 
                  style={{ backgroundColor: color, width: 30, height: 30, marginLeft: 10, border: selectedColor === color ? '2px solid black' : 'none' ,borderRadius:'30px'}}
                  onClick={() => setSelectedColor(color)}
                >
                </button>
              ))}
            </div>
            <div className="Men-buy-add">
              <button type="button" onClick={BuyNow}>Buy Now</button>
              <button type="button" onClick={AddTo}>Add to Cart</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;

