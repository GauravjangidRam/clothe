import { Col, Container, Row, Image } from "react-bootstrap";
import "../style/formstyle.css";
import Button from "react-bootstrap/Button";
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
        <Row className="cloth-top">
          <h3>Clothing</h3>
        </Row>

        <Row className="product" style={{ marginTop: '20px' }}>
          {
            fide && fide.map((value, index) => (
              <Col md={6} lg={4} xl={3} key={index} className="mb-4">
                <Card className="card" onClick={() => nav1('/ProductDetails', { state: value })}>
                  <Image src={value.img} className="img1" style={{ cursor: "pointer" }} />

                  <div className="details">
                    <h5 className="brown-text">{value.name}</h5>
                    <p><span>{value.name1}</span></p>
                    <button className="rat">{value.rating} | {value.view}</button>
                    <p className="price">
                      <span>&#8377;{value.newPrice}</span>
                      <del><span className="off" style={{ color: "gray", marginRight: "5px" }}>&#8377;{value.oldPrice}</span></del>
                      {value.offer}
                    </p>
                    <h6>{value.savePrice}</h6>
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
