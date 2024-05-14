import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import RouterName from './router';
import Header from './component/Header';
import Footer from './component/Footer';


export default function Clothe(){
    return(
        <>
        
        <BrowserRouter>
        <Header/>
<RouterName/>
<Footer/>
        </BrowserRouter>
        
        </>
    )
}