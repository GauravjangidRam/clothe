import { Card, Container, Image, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/ProductDetailsWomen.css'; // Make sure to import the CSS

function ProductDetailsWomen() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    setDetails(loc.state.product);
    setMainImage(loc.state.product.img);
  }, [loc.state]);

  function AddTo() {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    existingCart.push(details);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    alert("Product Will be Added to Cart");
    navigate('/AddTo', { state: { ...details } });
  }

  const BuyNow = () => {
    navigate("/AddToCart", {state: {...details}})
  }

  const handleSideImageClick = (imageSource) => {
    setMainImage(imageSource);
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
            <Col md={5} className="main-img">
              <Image className="img-style" src={mainImage} fluid />
              <div className="side-img">
                {details.sideimg &&
                  details.sideimg.map((value, index) => (
                    <Card
                      key={index}
                      style={{ width: '6rem', marginBottom: '10px', border: 'none' }}
                      onClick={() => handleSideImageClick(value)}
                    >
                      <Image src={value} className="side-img-style" />
                    </Card>
                  ))}
              </div>
            </Col>
            <Col md={7} className="right-details">
              <div className="right-box">
                <h3 className="Women-Name-1">{details.name}</h3>
                <h5 className="Women-Name-2">{details.name2}</h5>
                <p className="rating">
                  <button>{details.rating}<span>/{details.view}</span> Rating</button>
                </p>
                <p className="mrp">
                  <span className="Women-newPrice"><h4>&#8377;{details.newPrice}</h4></span>
                  <del className="Women-oldPrice">&#8377;{details.oldPrice}</del>
                  <span className="Women-offer">{details.offer}</span>
                </p>
                <p>Price inclusive of all taxes</p>
                <div className="buy-add">
                  <button type="button" className="Women-btn-buy" onClick={BuyNow}>Buy Now</button>
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
