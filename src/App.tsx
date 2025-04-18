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
    <div className= {`${boolColors ? `bg-gray-50`: ` bg-neutral-950`} px-16  max-[455px]:px-0`}>
    <div className= {`${boolColors ? `bg-white`:`bg-neutral-900`} max-[455px]:px-2   px-16 max-[541px]:px-0 pt-10`} >
    <Navbar handlebackground={handleBackground} />
    <Section  textmode={boolColors} />

    </div>

    <hr className=" border border-neutral-700" />
    <div className={`flex justify-between p-20 ${boolColors ?`bg-white`: 'bg-neutral-900'}`}>
     <ul className="flex  w-64 justify-evenly text-neutral-600  font-medium text-sm ">
      <li>About</li>
      <li>Projects</li>
      <li>Speacking</li>
     </ul>
      <p className={boolColors ? `text-black` : `text-neutral-600`}>© 2025 Leonel Ngoya. All rights reserved.</p>
    </div>
    </div>
  

    </>
  )
}

export default App
