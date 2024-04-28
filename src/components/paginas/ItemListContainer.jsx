import React from 'react';
import { useEffect,useState } from 'react';

import { Link } from 'react-router-dom';

import getProducts from "../data/getProducts"

import {useParams} from "react-router-dom"
import ItemList from './ItemList';
 function ItemListContainer({greeting}) {

  const [products,setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    getProducts 
    .then((respuesta) => {

      if(idCategory ){
        const newProducts = respuesta.filter((producto) => producto.category === idCategory)
        setProducts(newProducts)
      }else{
        setProducts(respuesta)
      }
    })
    .catch(error => console.log(error))
  },[idCategory])
  return (
   <>  
        <div className="col-md-10 p-lg-2 mx-auto py-2 my-3 my-xl-3 text-bg-dark text-center">
          <h1 className="fw-bold">{greeting}</h1>
       </div>

        <div class="col-md-10 p-lg-2 mx-auto py-1 my-2 my-xl-3 text-bg-dark text-center">

            <ul class="list-inline text-bg-dark text-center">
              <li class="list-inline-item mr-3 mx-3  nav-item  px-1 iconoTransicion">
                <Link to={"/category/munecos"} className="nav-link text-white" > Muñecos </Link>
              </li>
              <li class="list-inline-item mx-3 mr-3 nav-item  px-1 iconoTransicion">
                <Link to={"/category/soportes"} className="nav-link text-white" > Soportes </Link>
              </li>
              <li class="list-inline-item mr-3 mx-3 nav-item  px-1 iconoTransicion">
                <Link to={"/category/mates"} className="nav-link text-white" > Mates </Link>
              </li>

            </ul>
        </div>
        <div className='container'>
          <div className='row'>   
          <ItemList  products={products}/> 
        </div>
        </div>
    </>
  )
}

export default ItemListContainer