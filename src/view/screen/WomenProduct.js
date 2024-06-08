
import { Row, Card, Image } from "react-bootstrap";
import { WomenProductPages } from "../data/womenProductdata";
import '../style/WomenProduct.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WomenProduct() {
  const [womenData, setWomenData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setWomenData(WomenProductPages);
  }, []);

  return (
    <div className="Women-page">

      
      <h4 className="Women-Heading">Clothing</h4>
   
      <Row className="Women-card-1">
        {womenData && womenData.map((value, index) => (
          <Card lg={4}
            key={index}
            style={{ width: '16rem' }} 
            className="women-multi" 
            onClick={() => navigate('/ProductDetailsWomen', { state: { product: value } })}
          >
            <Image src={value.img} className="Women-image" />
            <div className="Women-Details">
              <h5 className="Women-Name">{value.name}</h5>
              <p className="Women-Name-2"><span>{value.name2}</span></p>
              <button className="Women-rating">{value.rating} | {value.view}</button>
              <p className="Women-Prices">
                <span className="Women-newPrice">&#8377;{value.newPrice}</span> 
                <del className="Women-oldPrice" >&#8377;{value.oldPrice}</del>
                <span className="Women-offer">{value.offer}</span>
              </p>
              <h6 className="Women-saveprice">{value.savePrice}</h6>
            </div>
          </Card>
        ))}
      </Row>
  </div>
  );
}

