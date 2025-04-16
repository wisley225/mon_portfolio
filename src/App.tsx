import Navbar from "./Navbar"
import Section from "./Section"
import { useState } from "react"

function App() {
// je veux recuperer ma valeur
const [boolColors , setBoolColors]=useState(true)

const handleBackground=(newColorsBool:boolean)=>{
setBoolColors(newColorsBool)
}


  return (
    <>
    <div className= {   `${boolColors ? `bg-gray-50`: ` bg-neutral-950`} px-16`}>
    <div className= {` ${boolColors? `bg-white`:`bg-neutral-900`}  bg-white px-16 pt-10`} >
    <Navbar handlebackground={handleBackground} />
    <Section  textMode={boolColors} /> 
    </div>
    </div>
 

    </>
  )
}

export default App
