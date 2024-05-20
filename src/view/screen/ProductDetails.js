
// import { Card, Container, Image, Col, Row } from "react-bootstrap"
// import { useLocation, useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"
// import '../style/AddToCart.css'

// function ProductDetails() {
//   const loc = useLocation();
//   const navigate = useNavigate();
//   const [details1, setDetails] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     setDetails(loc.state);
//   }, [loc.state]);

//   function AddTo() {
//     navigate('/AddToCart', { state: { ...details1, selectedSize, selectedColor } });
//   }

//   const BuyNow = () => {
//     navigate('/AddToCart', { state: { ...details1, selectedSize, selectedColor } });
//   }

//   return (
//     <>
//       <Container>
//         <div className="heading">
//           <h1 className="heading-add">Product Details</h1>
//           <hr className="heading-line" />
//         </div>
//         <Row>
//           <div className="image-section">
//             <div className="left-img">
//               <Col>
//                 {
//                   details1 && details1.sideimg.map((value, index) => (
//                     <Card key={index} style={{ width: '6rem', marginBottom: '10px', border: 'none' }}>
//                       <Image src={value} className="left-img-style" />
//                     </Card>
//                   ))
//                 }
//               </Col>
//             </div>
//             <div className="main-img">
//               <Col>
//                 <Image className="img-style" src={details1.img} />
//               </Col>
//             </div>
//             <Col className="right-details">
//               <div className="right-box">
//                 <h3>{details1.name}</h3>
//                 <h5 className="name1">{details1.name1}</h5>
//                 <p className="rating">
//                   <button>{details1.rating}<span>/{details1.view}</span> Rating</button>
//                 </p>
//                 <h4>&#8377;{details1.newPrice}</h4>
//                 <p className="mrp">MRP <del>&#8377;{details1.oldPrice}</del> {details1.offer}</p>
//                 <p>Price inclusive of all taxes</p>
//                 <p className="size-section"><h5>Select Size</h5></p>
//                 <div className="size-btn">
//                   {
//                     details1 && details1.size.map((value, index) => (
//                       <button 
//                         key={index} 
//                         className={`size-btn1 ${selectedSize === value ? 'selected' : ''}`} 
//                         onClick={() => setSelectedSize(value)}
//                       >
//                         {value}
//                       </button>
//                     ))
//                   }
//                 </div>
//                 <h5 className="text-color">Color Choices</h5>
//                 <div className="color-btn">
//                   {
//                     details1 && details1.color.map((color, index) => (
//                       <button 
//                         key={index} 
//                         style={{ backgroundColor: color, width: 30, height: 30, marginLeft: 10, border: selectedColor === color ? '2px solid black' : 'none' }}
//                         onClick={() => setSelectedColor(color)}
//                       >
//                       </button>
//                     ))
//                   }
//                 </div>
//                 <div className="buy-add">
//                   <button type="button" onClick={BuyNow}>Buy Now</button>
//                   <button type="button" onClick={AddTo}>Add to Cart</button>
//                 </div>
//               </div>
//             </Col>
//           </div>
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default ProductDetails;





import { Card, Container, Image, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/AddToCart.css';

function ProductDetails() {
  const loc = useLocation();
  const navigate = useNavigate();
  const [details1, setDetails] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    setDetails(loc.state);
  }, [loc.state]);

  function AddTo() {
    navigate('/AddToCart', { state: { ...details1, selectedSize, selectedColor } });
  }

  const BuyNow = () => {
    navigate('/AddToCart', { state: { ...details1, selectedSize, selectedColor } });
  }

  return (
    <>
      <Container>
        <div className="heading">
          <h1 className="heading-add">Product Details</h1>
          <hr className="heading-line" />
        </div>
        <Row>
          <Col md={4} className="image-section">
            <div className="left-img">
              {
                details1 && details1.sideimg.map((value, index) => (
                  <Card key={index} style={{ width: '6rem', marginBottom: '10px', border: 'none' }}>
                    <Image src={value} className="left-img-style" />
                  </Card>
                ))
              }
            </div>
          </Col>
          <Col md={4} className="main-img">
            <Image className="img-style" src={details1.img} fluid />
          </Col>
          <Col md={4} className="right-details">
            <div className="right-box">
              <h3>{details1.name}</h3>
              <h5 className="name1">{details1.name1}</h5>
              <p className="rating">
                <button>{details1.rating}<span>/{details1.view}</span> Rating</button>
              </p>
              <h4>&#8377;{details1.newPrice}</h4>
              <p className="mrp">MRP <del>&#8377;{details1.oldPrice}</del> {details1.offer}</p>
              <p>Price inclusive of all taxes</p>
              <p className="size-section"><h5>Select Size</h5></p>
              <div className="size-btn">
                {
                  details1 && details1.size.map((value, index) => (
                    <button 
                      key={index} 
                      className={`size-btn1 ${selectedSize === value ? 'selected' : ''}`} 
                      onClick={() => setSelectedSize(value)}
                    >
                      {value}
                    </button>
                  ))
                }
              </div>
              <h5 className="text-color">Color Choices</h5>
              <div className="color-btn">
                {
                  details1 && details1.color.map((color, index) => (
                    <button 
                      key={index} 
                      style={{ backgroundColor: color, width: 30, height: 30, marginLeft: 10, border: selectedColor === color ? '2px solid black' : 'none' }}
                      onClick={() => setSelectedColor(color)}
                    >
                    </button>
                  ))
                }
              </div>
              <div className="buy-add">
                <button type="button" onClick={BuyNow}>Buy Now</button>
                <button type="button" onClick={AddTo}>Add to Cart</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetails;
