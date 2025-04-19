
import About from './About,';
import Articles from './Articles';
import Projects from './Projects';
import Speacking from './speacking';
import Home from './home/Home';

import { Routes,Route, Navigate } from 'react-router-dom';


const Section = ({textmode}:{textmode:boolean}) => {
    return (
<div>
    <Routes>
   <Route path='/' element={<Navigate to="home"/>}/>
   <Route path='home' element={<Home textModeHome={textmode}/>} /> 
   <Route path='About' element={<About textmode={textmode} />}/> 
   <Route path='Articles' element={<Articles textmode={textmode}/>}/> 
   <Route path='Projects' element={<Projects textmode={textmode} />}/> 
   <Route path='Speacking' element={<Speacking textmode={textmode} />}/> 
    </Routes> 
</div>
    );
}

export default Section;

