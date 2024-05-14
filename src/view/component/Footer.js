import { Col, Container, Image } from "react-bootstrap";
import './Footer.css'

 export default function Footer(){
    return(
        <>
        <div className="Container">
            <Container className="main-box">
        <Col>
            <div className="first-col">
              
                    <h4 className="foot">Ajio</h4>
                      
                      <a href="#">Who We Are</a>
                      <a href="#">Join Our Team</a>
                      <a href="#">Term & Conditions</a>
                      <a href="#">We Respect Your Privacy</a>
                      <a href="#">PRomations Term & Conditions</a>
              
            </div>

        </Col>
        <Col>
            <div className="first-col">
                <h4>Help</h4>

                <a href="#">Who We Are</a>
                      <a href="#">Join Our Team</a>
                      <a href="#">Term & Conditions</a>
                      <a href="#">We Respect Your Privacy</a>
                      <a href="#">PRomations Term & Conditions</a>
            </div>
        </Col>
        <Col>
            <div className="third">
                <h4>Shop By</h4>

                <a href="#">Men</a>
                      <a href="#">Women</a>
                      <a href="#">Kids</a>
                      <a href="#">Home</a>
                      <a href="#">Collection</a>
                      <a href="#">Brand Directory</a>
                      <a href="#">New Stores</a>
            </div>
        </Col>

            </Container>
            <Container >

            <hr />
        <div className="payment">


            <h3>Payment methods</h3>


        <div className="lo">

            <h5>Net<button>Banking</button>    </h5>
           
  <Image className="img" src={require('../component/png-clipart-logo-visa-3-d-secure-organization-font-visa-blue-text-thumbnail.png')}/>
  <Image className="img" src={require('../image/download.jpeg')}/>
  <Image className="img" src={require('../image/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment-thumbnail.png')}/>
        </div>

        </div>
            </Container>
        </div>
        
        </>
    )
}