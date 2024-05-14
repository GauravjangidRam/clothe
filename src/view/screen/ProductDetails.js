import { Card, Container, Image, Col, Row } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import '../style/AddToCart.css'


 
function ProductDetails(){



  
  // ---------Men Data Coming-----------------------------------------------------

    const loc = useLocation('')
    const navigation = useNavigate('')

    const [detaisl1,setDetails]=useState('')

    useEffect(()=>{
        // console.log(loc.state);
        setDetails(loc.state);
     
    },[])


    function AddTo(){
     navigation('/AddToCart',detaisl1);
    }

    const BuyNow=()=>{
      navigation('/AddToCart  ')
    }
    return(
        <>
       <Container >
        <div className="heading">

        <h1 className="heading-add">Product Details </h1>
        <hr className="heading-line" />
        </div>
       <Row>
        <div className="image-section">

        <div className="left-img">

       <Col>

        {
            detaisl1&&detaisl1.sideimg.map(value=>(
                <Card style={{width:'6rem',marginBottom:'10px',border:'none'}}>
                  <Image src={value} className="left-img-style"/>
                  
                </Card>
            ))
        }
     
        
          </Col>
        </div>
            <div className="main-img">

          <Col>
            <Image className="img-style" src={detaisl1.img} ></Image>
          
          </Col>
            </div>
        
       

            <Col className="right-details">
            <div className="right-box">

                <h3>{detaisl1.name}</h3>
                <h5 className="name1">{detaisl1.name1}</h5>
                <p className="rating"> <button>{detaisl1.rating}<span>/{detaisl1.view}</span> Rating</button></p>
                <h4>&#8377;{detaisl1.newPrice}</h4>
                <p className="mrp">MRP <del>&#8377;{detaisl1.oldPrice}</del> {detaisl1.offer}</p>
                <p>Price inclusive of all taxes</p>

                <p className="size-section"><h5>Select Size</h5></p>
                <div className="size-btn">

               {
                 detaisl1&&detaisl1.size.map(value=>(
                   <button className="size-btn1">{value}</button>
                  ))
                }
                </div>
               <h5 className="text-color">Color Chooses</h5>
               <div className="color-btn">

                {
                  detaisl1&&detaisl1.color.map(color=>(
                    <button style={{backgroundColor:`${color}` , width:30, height:30 , marginLeft:10}}></button>
                  ))
                }
              
                </div>
                <div className="buy-add">
               
                    <button type="button" onClick={BuyNow} > Buy Now</button>
                    <button type="button" onClick={AddTo}> Add to Cart</button>
                
                </div>
                   
                </div>
            </Col>
                </div>
        </Row> 
       
       </Container>
        </>
    )
}
export default ProductDetails