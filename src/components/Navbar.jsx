import './bootstrap.min.css';
import "./navbar.css";
import "../components/estilo.css"

import App from '../App.jsx'

import {Link, Outlet} from "react-router-dom"

import  logo from "../assets/logo.png";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary colorFondoNav ">

            <div className="w-100 text-bg-dark">

            <div className="container d-lg-flex   ">
                
                <div className=" d-lg-flex align-items-center ">

                <div className="d-flex justify-content-center">
                    <a href="" className="navbar-brand align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none text-white">
                    <img className="bi me-2 iconoZoom " width="32" height="32" src={logo}  alt="Logo" /> 
                                LedesmaPrints 3D
                            </a>
                </div>

                <div className="d-flex justify-content-center pb-4 ">

                    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            
                            </button>

                </div>
                
                </div>
                
                
                <div className="collapse navbar-collapse px-3 py-2  " id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end px-4 align-items-center" >
                    <li className="nav-item  px-1 iconoTransicion">
                    
                    
                    <Link to={"/"} className="nav-link text-white" > Inicio </Link>
                      
                    

                    </li>

                    <li className="nav-item px-1 iconoTransicion">

                    
                    <Link to={"/itemsProductos"} className="nav-link text-white" > Productos </Link>
                    
                      
                    
                    </li>

                    <li className="nav-item px-1 iconoTransicion">

                    <Link to={"/category/audio"} className="nav-link text-white" > Galeria </Link>
                    
                    </li>

                    <li className="nav-item px-1 iconoTransicion ">

                 
                        
                    <Link to={""} className="nav-link text-white" > Nosotros </Link>
                        
                    
                    
                    </li>

                    <li className="nav-item px-1 iconoTransicion">

                  
                        
                    <Link to={""} className="nav-link text-white" > Contacto </Link>
                        
                    
                    
                    </li>
                   

                </ul>
                <div className="carrito iconoTransicion" >
                <BsCart2 size="30px"/>
                <span className='badge'>2</span>

                </div>
     
    </div>

  </div>

</div>
      </nav>
      
    </>
  )
}
export default Navbar
