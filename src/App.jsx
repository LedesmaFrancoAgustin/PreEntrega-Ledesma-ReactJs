import { useState } from 'react'
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Ledesma Impresiones 3d"}/> 
    </>
  )
}

export default App
