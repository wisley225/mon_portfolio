
import { MdNavigateNext } from "react-icons/md";

type ModeText={
    textmode:boolean 
}


const GridTamplate = ({textmode}:ModeText) => {

    return ( 
<div  className={`p-5  rounded-lg  ${ textmode ?`hover:bg-neutral-50`:" hover:bg-neutral-900 transition-all "} cursor-pointer transition-all`}>
<span className='border-l-2 text-sm border-gray-500 pl-2 font-medium text-gray-500 '> May 20, 2024</span>
<h1 className={`font-semibold  my-2 ${textmode ? 'text-black': `text-white`} `}> Grid Template Areas</h1>
<p className=' text-gray-500 text-sm mb-1 '> Dans set article , nous allons voir comment utiliser la proprité grid-template-areas</p>
<p className=' text-gray-500 text-sm'> pour creer des mises en page complexes</p>
<a href="" className=' text-blue-400 flex  items-center mt-2   font-semibold text-sm '> Read article <MdNavigateNext  /> </a>
</div>
);
}
export default GridTamplate;




