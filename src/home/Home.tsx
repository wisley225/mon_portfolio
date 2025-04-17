

import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Slide from './Slide';
import { RiStarSFill } from "react-icons/ri";
import { HiArrowSmRight } from "react-icons/hi";
import  GridTamplate from "./GridTamplate";
import { BsBriefcase } from "react-icons/bs";
import Work from "./Work";
import { FaArrowDown } from "react-icons/fa6"

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
        Bonjour je suis Guei Lewis,mais
         vous pouvez m'appeller Wisley
         </h1>
 
         <p className=' text-gray-400'> 
         Je suis développeur front-end et membre du jury Awwwards Young du Cameroun. Je
         </p>
 
         <p className=' text-gray-400'>
         développe lndev-ui et d'autres projets intéressants . Je suis passionné par la création de sites
         </p>
         <p className=' text-gray-400'>
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

  <div className=' border border-gray-600 p-1 rounded-3xl my-10'>
    <div className=' border border-gray-600 p-10 rounded-3xl'>
    <div className=' flex items-center '>
      <div className=' mr-2 size-12 p-2 bg-gray-200 rounded-full'>     <img src={`images/lemon.svg`} alt="" className='object-cover object-center size-full rounded-full' /></div>
<h1 className='text-sm font-semibold text-gray-100'>Indev/ui</h1>
    </div>
    <p className='py-5 text-gray-400'>Une collection amusante de petits composants bien codés pour rationaliser votre processus de développement.</p>
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
 <span className='text-gray-400'>Approuvé par davantage d'utilisateurs</span>
  </div>
 <p className={`font-medium ${textmode ? 'text-black':'text-white' } text-sm  my-5`}>Obtenez tous les composants pour seulement 59 $</p>
 
<div className="flex flex-wrap"> 
  <button className="flex items-center text-white bg-black font-medium  mr-4 px-5  rounded-lg py-2 "> Visite website <HiArrowSmRight className="ml-2" /></button> 
  <button className={`flex items-center ${ textmode ? 'text-black':'text-white'} border rounded-lg  px-5 font-medium py-2`} > Explore components <HiArrowSmRight className="ml-2" /></button> 
  </div>

  </div>

  </div>

  <div className="  grid grid-cols-2   gap-4 ">
    <div className=" ">
      <GridTamplate textode={textmode} />
      <GridTamplate textMode={textmode}/>
      <GridTamplate textMode={textmode}/>

      <a href="" className=" text-gray-500 hover:underline block "> view all articles ( 5 )</a>
    </div>


    <div className="  p-6 rounded-2xl border h-auto mb-10">
       <h1 className="flex  items-center font-semibold mb-5"> <BsBriefcase className="text-gray-400 text-xl mr-3"/>  Work</h1>
<Work  
      image='images/work_img1.svg'
      title='DotWorld'
      description=' Front-end developper'
      date='04/2024 present'
      textmode={textmode}
     />

<Work  
      image='images/work_img2.svg'
      title='Survaii'
      description=' Front-end developper'
      date='01/2024  04/2024'
      textmode={textmode}

      
     />


<Work  
      image='images/work_img3.svg'
      title='Dark Code'
      description='Collaborator'
      date='05/2024 present'
      textmode={textmode}


     />


<Work  
      image='images/work_img4.svg'
      title='LPI'
      description=' Front-end developper'
      date='04/2023 - 09/2024'
      textmode={textmode}

     />


<Work  
      image='images/work_img5.svg'
      title='Mbao Digital'
      description=' Front-end developper'
      date='06/2022 - 09/2023'
      textmode={textmode}

     />



<Work  
      image='images/work_img6.svg'
      title='Gloovee'
      description='Web Integrator'
      date='02/2023 - 01/2024'
      textmode={textmode}

     />



<Work  
      image='images/work_img7.svg'
      title='Freelancer'
      description=' Front-end developper'
      date='06/2023 present'
      textmode={textmode}

     />

    <button className=" flex justify-center items-center font-medium w-full py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-all"> Download CV <FaArrowDown /></button> 
    </div>
  </div>
    
        </>
    );
}

export default Home;
