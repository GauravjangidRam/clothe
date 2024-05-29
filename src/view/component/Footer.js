import { Col, Container, Image } from "react-bootstrap";
import './Footer.css'

 export default function Footer(){
    return(
        <>
        <div className="Footer-Container">
            <Container className="Footermain-box">
        <Col className="Footer-Col-details">
            <div className="first-col">
              
                    <h4 className="Footer-Text-first-leftside">Ajio</h4>
                      
                      <a href="/" className="Footer-left">Who We Are</a>
                      <a href="/" className="Footer-left">Join Our Team</a>
                      <a href="/" className="Footer-left">Term & Conditions</a>
                      <a href="/" className="Footer-left">We Respect Your Privacy</a>
                      <a href="/" className="Footer-left">PRomations Term & Conditions</a>
              
            </div>

        </Col>
        <Col className="footer-middle-col">
            <div className="Footer-Middel-Text">
                <h4 className="Footer-Middle-text">Help</h4>

                <a href="/" className="Footer-Middle">Who We Are</a>
                      <a href="/" className="Footer-Middle">Join Our Team</a>
                      <a href="/" className="Footer-Middle">Term & Conditions</a>
                      <a href="/" className="Footer-Middle">We Respect Your Privacy</a>
                      <a href="/" className="Footer-Middle">PRomations Term & Conditions</a>
            </div>
        </Col>
        <Col className="footer-right-col">
            <div className="Footer-Right">
                <h4 className="Footer-Right-text">Shop By</h4>

                <a href="/" className="Footer-right">Men</a>
                      <a href="/" className="Footer-right">Women</a>
                      <a href="/" className="Footer-right">Kids</a>
                      <a href="/" className="Footer-right">Home</a>
                      <a href="/" className="Footer-right">Collection</a>
                      <a href="/" className="Footer-right">Brand Directory</a>
                      <a href="/" className="Footer-right">New Stores</a>
            </div>
        </Col>

            </Container>
            <Container className="footer-payment">

            <hr className="footer-br-box" />
        <div className="payment">


            <h3 className="Footer-Payment">Payment methods</h3>


        <div className="Footer-Payment-Images">

            <h5 className="Footer-Net_banking">Net<button className="Footer-Net-bank">Banking</button>    </h5>
           
  <Image className="img" src={require('../image/verified visa.png')}/>
  <Image className="img" src={require('../image/cashondelivery.png')}/>
  <Image className="img" src={require('../image/mastercard.png')}/>
        </div>

        </div>
            </Container>
        </div>
        
        </>
    )
}