import React, { useEffect, useState } from 'react'
import { Card,Col,Image } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function WomenDetails() {

  const [wopage, setWoPage]=useState('')
  const loc= useLocation('')
   useEffect(()=>{
    setWoPage(loc.state)
    
   },[])

  return (
    <Col>
    
    
        {/* {
         wopage&&wopage.map(value=>(
            <Card>
            <Image src={value}/>
            </Card>
          ))
        } */}
        </Col>
      
  )
}
