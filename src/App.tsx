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
    <div className= {   `${boolColors ? `bg-gray-50`: ` bg-neutral-950`} px-16 border`}>
    <div className= {` ${boolColors? `bg-white`:`bg-neutral-900`}  bg-white px-16 pt-10`} >
    <Navbar handlebackground={handleBackground} />
    <Section  textMode={boolColors} />





    </div>

    <hr />
    <div className=" flex justify-between p-20 bg-white">
     <ul className="flex  w-64 justify-evenly text-gray-800  font-medium text-sm ">
      <li>About</li>
      <li>Projects</li>
      <li>Speacking</li>
     </ul>
      <p>© 2025 Leonel Ngoya. All rights reserved.</p>
    </div>
    </div>
  

    </>
  )
}

export default App
