import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home'
import Header from '../component/Header'
import Men from '../screen/Men';
import ShopMen from '../screen/ShopMen';
import Login  from '../screen/Login';
import Register from '../screen/Register'
import Product from '../screen/Product';
import Women from '../screen/Women';
import Footer from '../component/Footer';
import WomenProduct from '../screen/WomenProduct';
import { useEffect, useState } from 'react';
import Logout from '../screen/Logout';
import ProductDetails from '../screen/ProductDetails';
import AddToCart from '../screen/AddToCart';
import Kids from '../screen/Kids';
import WomenDetails from '../screen/WomenDetails';








export default function RouterName(){
    const [userdata ,setUserData]=useState('');

    useEffect(()=>{
        setUserData(localStorage.getItem("user"))
    },[])
    return(

        <>
            <Routes>
                <Route path='/Header' Component={Header}/>


           
            {/* Men Section location */}
            <Route path='/Men' Component={Men}/>
            <Route path='/ShopMen' Component={ShopMen}/>
            <Route path='/Product' Component={Product}/>


          
            {/* Women Section Location */}
            <Route path='/Women' Component={Women}/>
            <Route path='/WomenProductPage' Component={WomenProduct}/>
            <Route path='/WomenDetails' Component={WomenDetails}/>
            <Route path='/Kids' Component={Kids}/>

            {/* BuySection OF Product */}
          <Route path='/ProductDetails'Component={ProductDetails}/>
          <Route path='/AddToCart'Component={AddToCart}/>



          {/* Login And Register  Section  */}

          {
            userdata!==null?
            <>
             <Route path='/' Component={Home}/>
            </>:
            <>
          <Route path='/Login' Component={Login}/>
          <Route path='/' Component={Home}/>

          <Route path='/Register' Component={Register}/>
            </>
          }

         <Route path='/Logout' Component={Logout}/>
         
            <Route path='/Footer'Component={Footer}/>

            </Routes>
        </>
    )
}