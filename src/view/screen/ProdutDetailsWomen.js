

import { Card, Container, Image, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/AddToCart.css';

function ProductDetailsWomen() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null); // Set to null to allow null checks


  useEffect(() => {
    setDetails(loc.state.product); // Expecting product data to be in loc.state.product
  }, [loc.state]);

  function AddTo() {
    navigate('/AddToCart', { state: { ...details } });
  }

  const BuyNow = () => {
    navigate('/AddToCart', { state: { ...details } });
  }

  return (
    <>
      <Container>
        <div className="heading">
          <h1 className="heading-add">Product Details</h1>
          <hr className="heading-line" />
        </div>
        {details ? (
          <Row>
            <Col md={4} className="image-section">
              <div className="left-img">
                {details.sideimg && details.sideimg.map((value, index) => (
                  <Card key={index} style={{ width: '6rem', marginBottom: '10px', border: 'none' }}>
                    <Image src={value} className="left-img-style" />
                  </Card>
                ))}
              </div>
            </Col>
            <Col md={4} className="main-img">
              <Image className="img-style" src={details.img} fluid />
            </Col>
            <Col md={4} className="right-details">
              <div className="right-box">
                <h3>{details.name}</h3>
                <h5 className="name1">{details.name1}</h5>
                <p className="rating">
                  <button>{details.rating}<span>/{details.view}</span> Rating</button>
                </p>
                <h4>&#8377;{details.newPrice}</h4>
                <p className="mrp">MRP <del>&#8377;{details.oldPrice}</del> {details.offer}</p>
                <p>Price inclusive of all taxes</p>
                <p className="size-section"><h5>Select Size</h5></p>
                {/* <div className="size-btn">
                  {details.size && details.size.map((value, index) => (
                    <button 
                      key={index} 
                      className={`size-btn1 ${selectedSize === value ? 'selected' : ''}`} 
                      onClick={() => setSelectedSize(value)}
                    >
                      {value}
                    </button>
                  ))}
                </div> */}
                <h5 className="text-color">Color Choices</h5>
                {/* <div className="color-btn">
                  {details.color && details.color.map((color, index) => (
                    <button 
                      key={index} 
                      style={{ backgroundColor: color, width: 30, height: 30, marginLeft: 10, border: selectedColor === color ? '2px solid black' : 'none' }}
                      onClick={() => setSelectedColor(color)}
                    >
                    </button>
                  ))}
                </div> */}
                <div className="buy-add">
                  <button type="button" onClick={BuyNow}>Buy Now</button>
                  <button type="button" onClick={AddTo}>Add to Cart</button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
}

export default ProductDetailsWomen;

