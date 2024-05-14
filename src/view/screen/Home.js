import { useEffect, useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { Carousel as Banner } from 'react-bootstrap';
import { BannerImg, EveryDay, card2 ,card3, mainslider, offer, secondslider} from '../data/data'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Home() {
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

  const [everyone, setEvery] = useState('')

  useEffect(() => {
    setEvery(EveryDay);
    console.log(EveryDay)
  })


  return (
    <>
      <Row>
        <Col>
          <Banner>
            {
              mainslider.map(main =>(
                <Banner.Item>
              <Image src={main.img} style={{ width: '100%' }}></Image>
              
            </Banner.Item>
              ))
            }
            
          </Banner>
        </Col>
      </Row>


      <Row className='card1'>
        <Image src={require('../image/Home-page-img/Summer Specials_D.jpg')}></Image>
        {/* <Carousel responsive={responsive} >

        
        </Carousel> */}
        <Carousel responsive={responsive}>
        {
            EveryDay.map((d) => (
              <Card style={{ width: '18rem', marginLeft: 20, border: 'none' }} >
                <Card.Img variant="top" src={d.img} />

              </Card>
            ))
          }
          </Carousel>
      </Row>

      <Row>
        <Image src={require('../image/Home-page-img/slider2/M-1.0-UHP-18042024-DailyBanner-header.jpg')}></Image>




         <Image src={require('../image/Home-page-img/slider2/D-1.0-UHP-18042024-DB-header.jpg')}></Image>

         <Banner>
          {
            secondslider.map(second=>(
              <Banner.Item>
              <Image src={second.img} style={{width:'100%'}}></Image>
           
          </Banner.Item>
            ))
          }
     
    </Banner>
         
     
    



        <Image src={require('../image/Home-page-img/slider2/D-1.0-UHP-05042024-ajioexclusives-header.jpg')}></Image>
      </Row>

      <Row style={{ backgroundColor: 'lightblue' }}>
      <Carousel responsive={responsive} >
        {
          card2.map(a => (
            <Card style={{ width: '18rem', backgroundColor: '#B3D5E0', border: 'none',marginLeft:'30px'}}>
              <Card.Img variant="top" src={a.img} />

            </Card>
          ))
        }
  </Carousel>
      </Row>
      {/* <Image src={require('../image/Home-page-img/slider2/D-1.0-UHP-18042024-DB-header.jpg')}></Image> */}
      {/* ----------------------------------------------------------------------------------- */}





      
    
{/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Row>
        {/* Card3 Img are is */}
        <Image src={require('../image/Home-page-img/warm wear/D-1.0-UHP-05042024-bestsellers-header.jpg')}></Image>


        <Carousel responsive={responsive} >
        {
          card3.map(b => (
            <Card style={{ width: '28rem', border: 'none'}}>
              <Card.Img variant="top" src={b.img} style={{width:'45vw'}} />

            </Card>
          ))
        }
  </Carousel>
      </Row>


      
       
      

        <Row>
        <Banner>
          {
            offer.map(off =>(
              <Banner.Item>
              <Image src={off.img} style={{width:'100%'}}></Image>
                
              </Banner.Item>
            ))
          }

    </Banner>
        </Row>

    </>
  )
}

export default Home