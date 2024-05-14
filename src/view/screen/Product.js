import { Col, Container, Row, Image } from "react-bootstrap";
import "../style/formstyle.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productcard } from "../data/productdata";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Product() {
  

 
  const [fide,setdata]=useState('')
  const nav1 =useNavigate("")
  
 useEffect(()=>{
 setdata(productcard);
 },[])
  return (
    <>
      <Container>
        <Row className="cloth-top">
          <h3>Clothing </h3>
        </Row>

        <Row className="product " style={{marginTop:'20px'}}>
          
          {
            fide&&fide.map(value=>(
              <Card style={{width:'22rem'}} className="card" onClick={()=>nav1('/ProductDetails',{state:value})} >
                <Image src={value.img} className="img1" />

                <div className="details">
                  <h5 className="brown-text">{value.name}</h5>
                  <p><span>{value.name1}</span></p>
                  <button className="rat">{value.rating}|{value.view}</button>
                  <p className="price"><span>&#8377;{value.newPrice}</span><del><span className="off" style={{color:"gray",marginRight:"5px"}}>&#8377;{value.oldPrice}</span></del>{value.offer}</p>
                  <h6>{value.savePrice}</h6>
                </div>
              </Card>
            ))
          }



        {/* {
         productcard.map(pro =>(
            <Col lg={4} onClick={()=>goto('/ShopMen',{state:pro})} >
            <Card style={{ width: "18rem" }} lg={3}>
            <Card.Img variant="top" src={pro.img} />
            <Card.Body>
              <Card.Title>{pro.name}</Card.Title>
              <Card.Text>
                {pro.name1}
                <p>

                <Button  >{pro.buyproduct}<Image src={pro.ratingimg} style={{width:17,marginLeft:"8px",marginBottom:'5px'}}/>|{pro.rating}</Button>
                </p>
                <p><span >&#8377;{pro.rate}</span><span><del>&#8377;999</del></span><span >{pro.mainrate}</span></p>
              </Card.Text>
              <Button variant="dark" >Buy Now</Button>
              <Button variant="success">Add To Cart</Button>
            </Card.Body>
        </Card>
      </Col>
          ))
        }
 */}

















          {/* {
          product1&&product1.map((value) => (
            <Col lg={4} onClick={()=>goto('/ShopMen',{state:value})} >
            <Card style={{ width: "18rem" }} lg={3}>
            <Card.Img variant="top" src={value.img} />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>
                {value.name1}
                <p>

                <Button  >{value.buyproduct}<Image src={value.ratingimg} style={{width:17,marginLeft:"8px",marginBottom:'5px'}}/>|{value.rating}</Button>
                </p>
                <p><span >&#8377;{value.rate}</span><span><del>&#8377;999</del></span><span >{value.mainrate}</span></p>
              </Card.Text>
              <Button variant="dark" >Buy Now</Button>
              <Button variant="success">Add To Cart</Button>
            </Card.Body>
        </Card>
      </Col>
    ))}
       */}



          {/* {
            valued.map(pro=>(
                <Col lg={4} onClick={()=>goto('/ShopMen',{state:pro})} >
                <Card style={{ width: "18rem" }} lg={3}>
                <Card.Img variant="top" src={pro.img} />
                <Card.Body>
                  <Card.Title>{pro.name}</Card.Title>
                  <Card.Text>
                    {pro.name1}
                    <p>

                    <Button  >{pro.buyproduct}<Image src={pro.ratingimg} style={{width:17,marginLeft:"8px",marginBottom:'5px'}}/>|{pro.rating}</Button>
                    </p>
                    <p><span >&#8377;{pro.rate}</span><span><del>&#8377;999</del></span><span >{pro.mainrate}</span></p>
                  </Card.Text>
                  <Button variant="dark" >Buy Now</Button>
                  <Button variant="success">Add To Cart</Button>
                </Card.Body>
            </Card>
          </Col>
            ))
          } */}
        </Row>
      </Container>
    </>
  );
}
