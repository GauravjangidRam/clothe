



import { Col, Container, Row } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { kidspage } from '../data/kidsdata';
import '../style/Kids.css';
import { useNavigate } from 'react-router-dom';


export default function Kids() {
  const navigate = useNavigate("")
  
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
                <Card style={{ width: '100%' }}   className="Kids-animation"onClick={() => navigate('/ProductDetailsKids', { state: value })} >
                  <Card.Img variant="top" src={value.img}  />
                  <Card.Body>
                    <h4 className="Kids-name-0">{value.name}</h4>
                    <div className='Kids-details-item'>
                      <p className='kids-name-1'><span className='kids-name-2'>{value.name1}</span></p>
                      <button className="Kids-rating-1">{value.rating}|{value.view}</button>
                      <div className="Kids-price-section"></div>
                      <p className="Kids-price"><span className='Kids-NewPrice'>&#8377;{value.newPrice}</span><del className='Kids-oldPrice'>&#8377;{value.oldPrice}</del><span className="Kids-Offer-0">{value.offer}</span></p>
                      <h6 className="Kids-SavePrice">{value.savePrice}</h6>
                    </div>
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
