
import { useEffect, useState } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import { Carousel as Banner } from 'react-bootstrap';
import {  EveryDay, card2, card3, mainslider, offer, secondslider } from '../data/data';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Home() {


  const nav = useNavigate('')

 
  const responsive = {
    superLargeDesktop: {
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


  const [everyone, setEvery] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setEvery(EveryDay);
        console.log(EveryDay);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    if (loading) {
        return <Loader />;
    }

 


  return (
    <Container fluid>
      <Row className="mb-3">
        <Col>
          <Banner>
            {mainslider.map((main, index) => (
              <Banner.Item key={index}>
                <Image src={main.img} style={{ width: '100%' }} />
              </Banner.Item>
            ))}
          </Banner>
        </Col>
      </Row>

      <Row className="mb-3">
        <Image src={require('../image/Home-page-img/Summer Specials_D.jpg')} fluid />
      </Row>

      <Row className="mb-3">
        <Carousel responsive={responsive}>
          {everyone.map((d, index) => (
            <Card key={index} style={{ width: '18rem', marginLeft: 20, border: 'none' }} onClick={()=>nav("/Product")}>
              <Card.Img variant="top" src={d.img} />
            </Card>
          ))}
        </Carousel>
      </Row>

      <Row className="mb-3">
        <Image src={require('../image/Home-page-img/slider2/M-1.0-UHP-18042024-DailyBanner-header.jpg')} fluid />
        <Image src={require('../image/Home-page-img/slider2/D-1.0-UHP-18042024-DB-header.jpg')} fluid />
      </Row>

      <Row className="mb-3">
        <Col>
          <Banner>
            {secondslider.map((second, index) => (
              <Banner.Item key={index}>
                <Image src={second.img} style={{ width: '100%' }} />
              </Banner.Item>
            ))}
          </Banner>
        </Col>
      </Row>

      <Row className="mb-3">
        <Image src={require('../image/Home-page-img/slider2/D-1.0-UHP-05042024-ajioexclusives-header.jpg')} fluid />
      </Row>

      <Row className="mb-3" style={{ backgroundColor: 'lightblue' }}>
        <Carousel responsive={responsive}>
          {card2.map((a, index) => (
            <Card key={index} style={{ width: '18rem', backgroundColor: '#B3D5E0', border: 'none', marginLeft: '30px' }}  onClick={()=>nav("/Product")}>
              <Card.Img variant="top" src={a.img} />
            </Card>
          ))}
        </Carousel>
      </Row>

      <Row className="mb-3">
        <Image src={require('../image/Home-page-img/warm wear/D-1.0-UHP-05042024-bestsellers-header.jpg')} fluid />
      </Row>

      <Row className="mb-3">
        <Carousel responsive={responsive}>
          {card3.map((b, index) => (
            <Card key={index} style={{ width: '28rem', border: 'none' }}  onClick={()=>nav("/Product")}>
              <Card.Img variant="top" src={b.img} style={{ width: '45vw' }} />
            </Card>
          ))}
        </Carousel>
      </Row>

      <Row className="mb-3">
        <Col>
          <Banner>
            {offer.map((off, index) => (
              <Banner.Item key={index}>
                <Image src={off.img} style={{ width: '100%' }} />
              </Banner.Item>
            ))}
          </Banner>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
