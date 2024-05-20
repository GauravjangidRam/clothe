import { Row, Image, Col } from "react-bootstrap"
import { Carousel as MenData } from 'react-bootstrap';
import { Daily, mencard, mencard1, mensilder, mensilder2 } from "../data/data";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { click } from "@testing-library/user-event/dist/click";


function Men() {
      const nav1 = useNavigate('')
      const [click1, setClick1] = useState()

      useEffect(() => {
            setClick1(mencard1);

        

      }, [])


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

      const productPage = useNavigate('')


      const ProData=()=>{
            productPage('/Product')
      }

      return (
            <>
                  <Row>
                        <MenData>
                              {
                                    mensilder.map(firstslider => (
                                          <MenData.Item>
                                                <Image src={firstslider.img} style={{ width: "100%" }}></Image>

                                          </MenData.Item>
                                    ))
                              }


                        </MenData>
                  </Row>





                  {/* ------------------------------------------------------------------------ */}

                  <Row>
                        <Image src={require('../image/Home-page-img/Men/D-1.0-UHP-01022024-FREEDEL-above799.jpg')}></Image>
                  </Row>

                  {/* ----------------------------------------STYLE DRESS-------------------------------------------- */}
                  <Row>
                        <Image src={require('../image/Home-page-img/Men/style dress/D-1.0-MHP-18042024-Z2-topbannerbu-header.jpg')}></Image>

                        <MenData>
                              {
                                    mensilder2.map(second => (
                                          <MenData.Item>
                                                <Image src={second.img} style={{ width: "100%" }}></Image>

                                          </MenData.Item>
                                    ))
                              }


                        </MenData>
                  </Row>



                  <Row>
                        <Image src={require('../image/Home-page-img/Men/slider2/D-1.0-MHP-18042024-Z2-topbannermonitised-header.jpg')}></Image>
                        <Image src={require('../image/Home-page-img/Men/slider2/D-1.0-MHP-18042024-Z4-dailybannerbu-header.jpg')}></Image>
                        <Image src={require('../image/Home-page-img/Men/slider2/D-1.0-MHP-18042024-Z4-dailybannermonitised-header.jpg')}></Image>
                  </Row>
                  {/* --------------------------------------------Daily SHop------------------------------------------------------------ */}
                  <Row>
                        <MenData >
                              {
                                    Daily.map(image => (
                                          <MenData.Item>
                                                <Image src={image.img} style={{ width: '100%' }}></Image>
                                          </MenData.Item>
                                    ))
                              }
                        </MenData>

                  </Row>


                  <Row>
                        <Image src={require('../image/Home-page-img/Men/card slider/D-1.0-MHP-05042024-Z5-sunshinebrands-header.jpg')}></Image>

                        <Carousel responsive={responsive} >
                              {
                                    mencard.map(mencardfirst => (
                                          <Card style={{ width: '24rem', border: 'none' ,cursor:"pointer"}} onClick={ProData}>
                                                <Card.Img variant="top" src={mencardfirst.img} style={{ }} />

                                          </Card>
                                    ))
                              }
                        </Carousel>
                  </Row>


                  <Row>
                        <Image src={require('../image/Home-page-img/Men/Cards/D-1.0-MHP-18042024-Z6-closetclassics-header.jpg')}></Image>
                  </Row>
                  <Row style={{ marginLeft: 30 }} >

                        {
                              click1 && click1.map(MainShop => (
                                    <Col onClick={() => nav1('/Product', { state: MainShop })} >

                                          <Card onClick={ProData} style={{ width: '15rem', justifyContent: 'space-evenly', border: 'none', backgroundColor: '#FCE5B5',cursor:"pointer", marginLeft: 40, margin: 0, padding: 0 }} lg={3} md={3} sd={3} >
                                                <Card.Img variant="top" src={MainShop.img} />

                                          </Card>
                                    </Col>
                              ))
                        }
                  </Row>
            </>


      )
}

export default Men