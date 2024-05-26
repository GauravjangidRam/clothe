import { Col, Container, Row, Image } from "react-bootstrap";
import '../style/Product.css'
import Card from "react-bootstrap/Card";
import { productcard } from "../data/productdata";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [fide, setData] = useState('');
  const nav1 = useNavigate();

  useEffect(() => {
    setData(productcard);
  }, []);

  return (
    <>
      <Container>
        <Row className="Men-Heading">
          <h3>Clothing</h3>
        </Row>

        <Row className="Men-Section" >
          {
            fide && fide.map((value, index) => (
              <Col md={6} lg={4} xl={3} key={index}className="Men-cards">
                <Card className="Men-mulitple" onClick={() => nav1('/ProductDetails', { state: value })}>
                  <Image src={value.img} className="Men-images"/>

                  <div className="Men-details">
                    <h5 className="Men-name">{value.name}</h5>
                    <p><span>{value.name1}</span></p>
                    <button className="Men-Price-view">{value.rating} | {value.view}</button>
                    <p className="Men-New-Price ">
                      <span>&#8377;{value.newPrice}</span>
                      <del><span className="Men-offer" >&#8377;{value.oldPrice}</span></del>
                        <span className="Men-offer-value">{value.offer}</span>
                    </p>
                    <h6 className="Men-save-price">{value.savePrice}</h6>
                  </div>
                 
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}
