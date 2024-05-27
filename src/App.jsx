import { useState } from 'react'

import {BrowserRouter,Route,Routes} from "react-router-dom"

import Index from "./components/paginas/Index"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/paginas/ItemListContainer";
import ItemDetailContainer from "./components/paginas/ItemDetail";

import BuyProduct from './components/paginas/BuyProduct';

import PageNotFound from "./components/paginas/PageNotFound"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkeCt4mLXXnzA5u02rUI8mSiS7s8BFaw",
  authDomain: "coderhouse-ecommerce-291cc.firebaseapp.com",
  projectId: "coderhouse-ecommerce-291cc",
  storageBucket: "coderhouse-ecommerce-291cc.appspot.com",
  messagingSenderId: "232101529614",
  appId: "1:232101529614:web:4145292d8ceb852a90145f"
};

// Initialize Firebase
initializeApp(firebaseConfig);



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route exact path="/" element={<Index/>} /> 
          <Route exact path="/itemsProductos" element={<ItemListContainer greeting={"Productos"}/> }/>
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Productos"}/> }/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/BuyProduct" element={<BuyProduct />} />
          <Route path="*" element={<PageNotFound/>} />
  

      </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App

// <ItemListContainer greeting={"Ledesma Impresiones 3d"}/> 