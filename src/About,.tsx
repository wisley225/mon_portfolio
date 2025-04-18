

import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { RiBlueskyLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const About = () => {
    return (

<div  className="grid grid-cols-2  gap-20 mt-20 ">
  <div className=" ">
    <h1 className=" text-5xl font-bold ">
      Je m'appelle Leonel Ngoya, j'habite à Douala Cameroun.
     </h1>
         <p className=" text-gray-700 mt-10 ">
         Je travaille actuellement chez dotworld, où je suis responsable de la création et de l'optimisation des interfaces
         utilisateur pour nos applications Web, dans le but d'offrir une expérience utilisateur remarquable.
         </p>   

         <p className=" text-gray-700 my-10">
         Je partage une grande partie de mon travail sur X, LinkedIn, 
         Threads et GitHub. Je suis toujours à la recherche de nouvelles façons d'échanger avec d'autres développeurs et designers, alors n'hésitez 
         4pas à me contacter !

         </p>


         <p className=" text-gray-700">

         Je suis passionné de photographie et j'aime immortaliser le monde qui m'entoure.
          Je suis toujours à la recherche de nouvelles façons d'exprimer ma créativité et 
          de partager mon point de vue avec les autres.

         </p>
   </div>

<div  className="flex  flex-col  ">
<div className=" mb-5  self-center w-10/12 h-[500px] hover:rotate-0 cursor-pointer rotate-12 transition-all duration-1000 ease-in-out  ">
    <img src={`images/portrait.webp`} alt="un portrait" 
    className=" object-cover object-center size-full rounded-3xl" />
</div>

<ul className=" leading-9 mb-10">
    <li className="flex items-center font-semibold text-neutral-600 "><BsTwitterX className=" text-xl mr-5" /> Follow on X </li>
    <li className="flex items-center font-semibold text-neutral-600 "> <FaGithub className=" text-xl mr-5" /> Follow on gitHub </li>
    <li className="flex items-center font-semibold text-neutral-600 "> <FaLinkedin className=" text-xl mr-5" /> Follow on LinkedIn </li>
    <li className="flex items-center font-semibold text-neutral-600 "> <FaThreads className=" text-xl mr-5" /> Follow on Threads</li>
    <li className="flex items-center font-semibold text-neutral-600 "> <RiBlueskyLine className=" text-xl mr-5" /> Follow on BlueSky</li>
    <li className="flex items-center font-semibold text-neutral-600 "><FaYoutube className=" text-xl mr-5" /> Follow on YouTube</li>
</ul>
<hr />
<div className="flex items-center my-14 hover:text-blue-500 cursor-pointer"> <FaEnvelope className="mr-4"/> lewisguei67@gmail.com </div>

</div>



</div>

    );
}

export default About;
