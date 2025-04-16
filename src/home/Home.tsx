

import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Slide from './Slide';
import { RiStarSFill } from "react-icons/ri";


type TextMode={
  textmode:boolean

}
const Home = ({textmode}:TextMode) => {





    return (
        <>
         <div className=' w-7/12  '>
         <div className=' size-16 rounded-full'>
                <img src={`images/profile.jpeg`} alt="photo de profile" 
                className='  size-full object-center object-cover rounded-full'
                />
         </div>
         <h1 className= {`py-10 text-5xl  font-bold ${ textmode ?  `text-gray-900`:`text-white`} `} >
        Bonjour je suis Guei Lewis, mais
         vous pouvez m'appeller Wisley
         </h1>
         <p className=' text-gray-600'> 
         Je suis développeur front-end et membre du jury Awwwards Young du Cameroun. Je
         </p>
         <p className=' text-gray-600'>
         développe lndev-ui et d'autres projets intéressants . Je suis passionné par la création de sites
         </p>
         <p className=' text-gray-600'>
         web esthétiques, intuitifs et réactifs.   
        
         </p>

          <ul className=' flex w-2/5 my-10 justify-around text-gray-500'>
        <BsTwitterX className=' text-xl'/>
        <FaGithub className=' text-xl' />
        <FaLinkedin className=' text-xl' />
        <FaThreads className=' text-xl' />
        <RiBlueskyLine className=' text-xl' />
        <FaYoutube className=' text-xl' />
          </ul>

         </div>
      <Slide/>

  <div className=' border p-1 rounded-3xl'>
    <div className=' border p-10 rounded-3xl'>
    <div className=' flex items-center '>
      <div className=' mr-2 size-12 p-2 bg-gray-200 rounded-full'>     <img src={`images/lemon.svg`} alt="" className='object-cover object-center size-full rounded-full' /></div>
<h1 className='text-sm font-semibold'>Indev/ui</h1>
    </div>
    <p className='py-5 '>Une collection amusante de petits composants bien codés pour rationaliser votre processus de développement.</p>
  <div className=' w-48 flex '>
 <div className=' border border-white rounded-full bg-gray-200 relative'> <img src={`src/images/memo_1.png`} alt="" /></div>
 <div className=' border border-white rounded-full bg-gray-200 relative right-2 '> <img src={`images/memo_2.png`} alt="" /></div>
 <div className=' border border-white rounded-full bg-gray-200 relative right-4 '> <img src={`images/memo_3.png`} alt="" /></div>
 <div className=' border border-white rounded-full bg-gray-200 relative right-6 '> <img src={`images/memo_4.png`} alt="" /></div>
 <div className=' border border-white rounded-full bg-gray-200 relative right-8 '> <img src={`images/memo_5.png`} alt="" /></div>
   </div>
  
  
<div className='flex my-2 items-center'> 
  <RiStarSFill className='text-yellow-500 text-xl ' />
  <RiStarSFill className='text-yellow-500 text-xl ' />
  <RiStarSFill className='text-yellow-500 text-xl ' />
  <RiStarSFill className='text-yellow-500 text-xl ' />
  <RiStarSFill className='text-yellow-500 text-xl ' />
 <span className='text-gray-600'>Approuvé par davantage d'utilisateurs</span> </div>
 <p className='font-medium text-gray-900 text-sm'>Obtenez tous les composants pour seulement 59 $</p>
  </div>
  </div>




         
        </>
    );
}

export default Home;
