



import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { kidspage } from '../data/kidsdata';
import '../../App.css';

export default function Kids() {
  return (
    <>
      <div style={{ width: "20rem", margin: "0 auto" }}>
        <h3 style={{ textAlign: 'center', fontSize: '3rem', margin: 0 }}>Kids Clothing</h3>
        <hr style={{ border: "2px solid black", marginBottom: '30px' }} />
      </div>
      <Container>
        <Row>
          {
            kidspage && kidspage.map((value, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src={value.img} />
                  <Card.Body>
                    <Card.Title className="brown-text">{value.name}</Card.Title>
                    <Card.Text>
                      <p><span>{value.name1}</span></p>
                      <button className="rat">{value.rating}|{value.view}</button>
                      <p className="price"><span>&#8377;{value.newPrice}</span><del><span className="off" style={{ color: "gray", marginRight: "5px" }}>&#8377;{value.oldPrice}</span></del>{value.offer}</p>
                      <h6>{value.savePrice}</h6>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  );
}
