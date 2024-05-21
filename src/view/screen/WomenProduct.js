
// import { Container, Row,Card,Image } from "react-bootstrap";
// import { WomenProductPages } from "../data/womenProductdata";
// import '../style/women.css'
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


//  export default function WomenProduct()
// {


//     const [womenData, setWomenData]=useState('')
//     const nav2 = useNavigate('')    
//     useEffect(()=>{
//         setWomenData(WomenProductPages);
//         console.log(WomenProductPages);
//     },[])
// return(<>

//     <Container className="women-Product">
//         <h4>Clothung</h4>
//         <Row className="product">
//             {
//                 womenData&&womenData.map(value=>(
//                     <Card style={{width:'22rem'}} className="card" onClick={()=>nav2('/ProductDetials',{state:value})}>
//                               <Image src={value.img}className="img1" ></Image>
//                               <div className="details">

//                               <h5 className="brown-text">{value.name}</h5>
//                               <p><span>{value.name2}</span></p>
//                               <button className="rat">{value.rating}|{value.view}</button>
//                               <p className="price"><span>&#8377;{value.newPrice}</span> <del>&#8377;{value.oldPrice}</del><span className="off">{value.offer}</span></p>
//                               <h6>{value.savePrice}</h6>
//                               </div>
                             
//                     </Card>
                    

                    
                
                    
//                 ))
//             }
//         </Row>
       
//     </Container>
// </>


// )

// }




// import { Container, Row, Card, Image } from "react-bootstrap";
// import { WomenProductPages } from "../data/womenProductdata";
// import '../style/women.css'
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function WomenProduct() {
//     const [womenData, setWomenData] = useState([]);
//     const nav2 = useNavigate();
    
//     useEffect(() => {
//         setWomenData(WomenProductPages);
//         console.log(WomenProductPages);
//     }, []);

//     return (
//         <Container className="women-Product">
//             <h4>Clothing</h4>
//             <Row className="product">
//                 {womenData && womenData.map((value, index) => (
//                     <Card 
//                         key={index}
//                         style={{ width: '22rem' }} 
//                         className="card" 
//                         onClick={() => nav2('/ProductDetails', { state: { product: value } })}
//                     >
//                         <Image src={value.img} className="img1" />
//                         <div className="details">
//                             <h5 className="brown-text">{value.name}</h5>
//                             <p><span>{value.name2}</span></p>
//                             <button className="rat">{value.rating} | {value.view}</button>
//                             <p className="price">
//                                 <span>&#8377;{value.newPrice}</span> 
//                                 <del>&#8377;{value.oldPrice}</del>
//                                 <span className="off">{value.offer}</span>
//                             </p>
//                             <h6>{value.savePrice}</h6>
//                         </div>
//                     </Card>
//                 ))}
//             </Row>
//         </Container>
//     );
// }




// import { Container, Row, Card, Image } from "react-bootstrap";
// import { WomenProductPages } from "../data/womenProductdata";
// import '../style/women.css'
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function WomenProduct() {
//   const [womenData, setWomenData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setWomenData(WomenProductPages);
//   }, []);

//   return (
//     <Container className="women-Product">
//       <h4>Clothing</h4>
//       <Row className="product">
//         {womenData && womenData.map((value, index) => (
//           <Card 
//             key={index}
//             style={{ width: '22rem' }} 
//             className="card" 
//             onClick={() => navigate('/ProductDetails', { state: { product: value } })}
//           >
//             <Image src={value.img} className="img1" />
//             <div className="details">
//               <h5 className="brown-text">{value.name}</h5>
//               <p><span>{value.name2}</span></p>
//               <button className="rat">{value.rating} | {value.view}</button>
//               <p className="price">
//                 <span>&#8377;{value.newPrice}</span> 
//                 <del>&#8377;{value.oldPrice}</del>
//                 <span className="off">{value.offer}</span>
//               </p>
//               <h6>{value.savePrice}</h6>
//             </div>
//           </Card>
//         ))}
//       </Row>
//     </Container>
//   );
// }



import { Container, Row, Card, Image } from "react-bootstrap";
import { WomenProductPages } from "../data/womenProductdata";
import '../style/women.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WomenProduct() {
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    setWomenData(WomenProductPages);
  }, []);

  return (
    <Container className="women-Product">
      <h4>Clothing</h4>
      <Row className="product">
        {womenData && womenData.map((value, index) => (
          <Card key={index} style={{ width: '22rem' }} className="card">
            <Link 
              to={{
                pathname: '/ProductDetails',
                state: { product: value }
              }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Image src={value.img} className="img1" />
              <div className="details">
                <h5 className="brown-text">{value.name}</h5>
                <p><span>{value.name2}</span></p>
                <button className="rat">{value.rating} | {value.view}</button>
                <p className="price">
                  <span>&#8377;{value.newPrice}</span> 
                  <del>&#8377;{value.oldPrice}</del>
                  <span className="off">{value.offer}</span>
                </p>
                <h6>{value.savePrice}</h6>
              </div>
            </Link>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
