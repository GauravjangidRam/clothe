import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "../../App.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ShopMen() {
  const [item, setItem] = useState("");

  const loc = useLocation("");

  useEffect(() => {
    setItem(loc.state);
    console.log(loc.state)
  }, []);



  // const [img, setImg]=useState('')

  // const[productDetails,SetProductDetails]=useState('')
  // const loc = useLocation('')

  // useEffect(()=>{
  //     console.log(loc.state)
  //     SetProductDetails(loc.state)
  // },[])

  // function ImageChange(img)
  // {
  //     setImg(img);
  // }

  // const cloth =[
  //     {
  //         id:1,
  //         img:require('../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL.jpg'),
  //         rating:5
  //     },

  //     {
  //         id:1,
  //         img:require('../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL2.jpg'),
  //         rating:4.5
  //     },
  //     {
  //         id:1,
  //         img:require('../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL3.jpg'),
  //         rating:4
  //     },
  //     {
  //         id:1,
  //         img:require('../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL4.jpg'),
  //         rating:4.8
  //     },
  // ]

  return (
    <>
      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>Hello SHop</h1>
        </Row>
        <Row>
          <div className="leftstyle">
            <Col className="left-img">



              {
               item&&item.sideimg.map(value=>(
                  <Card>
                  <Image src={value}/>
                </Card> 
                ))
               
              }
                            {/* <Image
                src={require("../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL2.jpg")}
                width={100}
                style={{ marginTop: 10 }}
              ></Image>
              <Image
                src={require("../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL3.jpg")}
                width={100}
                style={{ marginTop: 10 }}
              ></Image>
              <Image
                src={require("../image/Home-page-img/Men/Shop/Men Clothes/-473Wx593H-466817674-seagreen-MODEL4.jpg")}
                width={100}
                style={{ marginTop: 10 }}
              ></Image>  */}
            </Col>
          </div>

         


          <Carousel style={{ width: 450 }}>
            <Col>
            {/* {
              item&&item.map(d1=>(
                <Card>
                  <Image src={d1.img}/>
                </Card>
              ))
            } */}
            </Col>
          </Carousel>

          {/* ---------------------------------------------------------------------------------          */}

          <Col className="right-box">
            <h3 style={{ color: "brown" }}> WUXI</h3>
            <h5>Cuban Collar Shirt with Short Sleeves</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ShopMen;
