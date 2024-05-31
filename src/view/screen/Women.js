import { Row,Image, Card } from "react-bootstrap";
import {Carousel as WomenPage} from 'react-bootstrap';
import React from 'react';
import '../style/women.css'
import { womencards, womencards2, womencards3, womenslider, womenslider2, womenslider3 } from "../data/Womendata";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

export default function Women() {
    const navPage= useNavigate('')
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      function goto(){
        navPage('/WomenProductPage')
      }  
    return (

        <>
     
        <Row>
            <WomenPage className="main-slider-img" style={{width:"100%"}}>
                {womenslider.map((value, index) => (
                    <WomenPage.Item key={index}> {/* Add key here */}
                        <Image src={value.img} style={{width:"100%"}} />
                    </WomenPage.Item>
                ))}
            </WomenPage>
        </Row>
        <Row>
            <Image src={require('../image/Home-page-img/Women/Women Main Card Section/D-1.0-WHP-060424-TOPBRANDS-header.jpg')} style={{width:"100%"}} />
            <Carousel responsive={responsive}>
                {womencards.map((value, index) => (
                    <Card key={index} lg={4} style={{width:"25rem" ,marginBottom:0 ,cursor:"pointer"}} onClick={goto}>
                        <Image src={value.img}/>
                    </Card>
                ))}
            </Carousel>
            <Carousel responsive={responsive}>
                {womencards2.map((value, index) => (
                    <Card key={index} lg={4} style={{width:"26rem",marginTop:'1px'}} onClick={goto}>
                        <Image src={value.img}/>
                    </Card>
                ))}
            </Carousel>
        </Row>
        <Row>
            <Image src={require('../image/Home-page-img/Women/Women Second Slider/D-1.0-WHP-060424-TOPBANNER-HEADER.jpg')} />
            <Image src={require('../image/Home-page-img/Women/Women Second Slider/d-1.0-WHP-180424-SPONSOREDCAROUSEL-HEADER.jpg')} />
            <WomenPage>
                {womenslider2.map((value, index) => (
                    <WomenPage.Item key={index}>
                        <Image src={value.img} style={{width:"100%"}} />
                    </WomenPage.Item>
                ))}
            </WomenPage>
        </Row>
        <Row>
            <Image src={require('../image/Home-page-img/Women/Women Card/D-1.0-WHP-060424-SPONSORBRANDTILES-header.jpg')} />
            {womencards3.map((value, index) => (
                <Card key={index} style={{width:'22rem',marginLeft:'10px',cursor:"pointer"}} lg={3} onClick={goto}>
                    <Image src={value.img}/>
                </Card>
            ))}
        </Row>
        <Row>
            <Image src={require('../image/Home-page-img/Women/Women Jwaller/D-1.0-WHP-280424-AKSHAYATRITYA-header.jpg')} />
            <WomenPage>
                {womenslider3.map((value, index) => (
                    <WomenPage.Item key={index}>
                        <Image src={value.img} style={{width:"100%"}} />
                    </WomenPage.Item>
                ))}
            </WomenPage>
        </Row>
    </>
    
    )
}