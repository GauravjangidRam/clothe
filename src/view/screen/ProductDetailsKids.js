import React from 'react';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const ProductDetailsKids = () => {
  const location = useLocation();
  const kidsData = location.state;

  return (
    <>
      <Container>
        <div className="heading">
          <h1 className="heading-add">Product Details</h1>
          <hr className="heading-line" />
        </div>
        <Row className="box-container">
          <Col md={8} className="main-img">
            <Image className="img-style" src={kidsData.img} fluid />
            <div className="image-section">
              {kidsData.sideimg &&
                kidsData.sideimg.map((value, index) => (
                  <Card
                    key={index}
                    style={{ width: '6rem', marginBottom: '10px', border: 'none' }}
                  >
                    <Image src={value} className="left-img-style" />
                  </Card>
                ))}
            </div>
          </Col>
          <Col md={4} className="right-details">
            <div className="right-box">
              <h3>{kidsData.name}</h3>
              <h5 className="name1">{kidsData.name1}</h5>
              <p className="rating">
                <button>
                  {kidsData.rating}/{kidsData.view} Rating
                </button>
              </p>
              <h4>&#8377;{kidsData.newPrice}</h4>
              <p className="mrp">
                MRP <del>&#8377;{kidsData.oldPrice}</del> {kidsData.offer}
              </p>
              <p>Price inclusive of all taxes</p>
              <div className="buy-add">
                <button type="button">Buy Now</button>
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};