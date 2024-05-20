// import React from 'react';
// import { Container, Row } from 'react-bootstrap';

// export default function AddToCart(){
//     return(
//         <>
//         <Container>
//             <Row>
                
//             </Row>
//         </Container>
        
//         </>
//     )
// }




// import React from 'react';
// import { Container, Row, Col, Card, Image } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// export default function AddToCart() {
//     const location = useLocation();
//     const productDetails = location.state;

//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Col>
//                         <h1>Product Details in Cart</h1>
//                         <Card>
//                             <Card.Body>
//                                 <Row>
//                                     <Col md={6}>
//                                         <Image src={productDetails.img} width={100} />
//                                     </Col>
//                                     <Col md={6}>
//                                         <h3>{productDetails.name}</h3>
//                                         <h5>{productDetails.name1}</h5>
//                                         {/* <p>Rating: {productDetails.rating}/{productDetails.view}</p> */}
//                                         <h4>Price: &#8377;{productDetails.newPrice}</h4>
//                                         {/* <p>MRP: <del>&#8377;{productDetails.oldPrice}</del> {productDetails.offer}</p> */}
//                                         <p>Size: {productDetails.size.join(', ')}</p>
//                                         {/* <p>Colors: </p>
//                                          <div>
//                                             {productDetails.color.map((color, index) => (
//                                                 <span key={index} style={{
//                                                     display: 'inline-block',
//                                                     backgroundColor: color,
//                                                     width: 30,
//                                                     height: 30,
//                                                     marginRight: 10,
//                                                     borderRadius: '50%'
//                                                 }}></span>
//                                             ))}
//                                         </div> */}
//                                     </Col>
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }






// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// export default function AddToCart() {
//     const location = useLocation();
//     const productDetails = location.state;

//     const [quantity, setQuantity] = useState(1);
//     const [totalPrice, setTotalPrice] = useState(productDetails.newPrice);

//     const handleQuantityChange = (e) => {
//         const newQuantity = parseInt(e.target.value);
//         setQuantity(newQuantity);
//         setTotalPrice(newQuantity * productDetails.newPrice);
//     };

//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Col>
//                         <h1>Product Details in Cart</h1>
//                         <Card>
//                             <Card.Body>
//                                 <Row>
//                                     <Col md={6}>
//                                         <Image src={productDetails.img} fluid />
//                                     </Col>
//                                     <Col md={6}>
//                                         <h3>{productDetails.name}</h3>
//                                         <h5>{productDetails.name1}</h5>
//                                         <p>Rating: {productDetails.rating}/{productDetails.view}</p>
//                                         <h4>Price: &#8377;{productDetails.newPrice}</h4>
//                                         <p>MRP: <del>&#8377;{productDetails.oldPrice}</del> {productDetails.offer}</p>
//                                         <p>Size: {productDetails.size.join(', ')}</p>
//                                         <p>Colors: </p>
//                                         <div>
//                                             {productDetails.color.map((color, index) => (
//                                                 <span key={index} style={{
//                                                     display: 'inline-block',
//                                                     backgroundColor: color,
//                                                     width: 30,
//                                                     height: 30,
//                                                     marginRight: 10,
//                                                     borderRadius: '50%'
//                                                 }}></span>
//                                             ))}
//                                         </div>
//                                         <Form.Group as={Row} controlId="quantity">
//                                             <Form.Label column sm="3">Quantity</Form.Label>
//                                             <Col sm="9">
//                                                 <Form.Control
//                                                     type="number"
//                                                     min="1"
//                                                     value={quantity}
//                                                     onChange={handleQuantityChange}
//                                                 />
//                                             </Col>
//                                         </Form.Group>
//                                         <h5>Total Price: &#8377;{totalPrice}</h5>
//                                         <Button variant="primary">Proceed to Checkout</Button>
//                                     </Col>
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }







import React, { useState } from 'react';
import { Container, Row, Col, Card, Image, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

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

    return (
        <>
            <Container>
                <Row style={{marginBottom:30}}>
                    <Col>
                        <h1 style={{textAlign:'center'}}>Product Cart</h1>
                        <Card>
                            <Card.Body>
                                <Row >
                                    <Col md={6}>
                                        <Image src={productDetails.img} style={{width:250}} />
                                    </Col>
                                    <Col md={6}>
                                        {/* <h3>{productDetails.name}</h3> */}
                                        <h5>{productDetails.name1}</h5>
                                        {/* <p>Rating: {productDetails.rating}/{productDetails.view}</p> */}
                                        <h4>Price: &#8377;{productDetails.newPrice}</h4>
                                        {/* <p>MRP: <del>&#8377;{productDetails.oldPrice}</del> {productDetails.offer}</p> */}
                                        <p>Selected Size: {productDetails.selectedSize}</p>
                                        <p>Selected Color: </p>
                                        <div>
                                            <span style={{
                                                display: 'inline-block',
                                                backgroundColor: productDetails.selectedColor,
                                                width: 30,
                                                height: 30,
                                                borderRadius: '50%'
                                            }}></span>
                                        </div>
                                        <Form.Group as={Row} controlId="quantity">
                                            <Form.Label column sm="3">Quantity</Form.Label>
                                            <Col sm="9">
                                                <Form.Control
                                                    type="number"
                                                    min="1"
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <h5>Total Price: &#8377;{totalPrice}</h5>
                                        <Button variant="primary">Proceed to Checkout</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
