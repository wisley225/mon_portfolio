
import About from './About,';
import Articles from './Articles';
import Projects from './Projects';
import Speacking from './speacking';
import Home from './home/Home';

import { Routes,Route, Navigate } from 'react-router-dom';
type TextMode={
textMode:boolean

}

const Section = ({textMode}:TextMode) => {
    return (
<div>
    <Routes>
   <Route path='/' element={<Navigate to="home"/>}/>
   <Route path='home' element={<Home textmode={textMode}/>} /> 
   <Route path='About' element={<About textmode={textMode} />}/> 
   <Route path='Articles' element={<Articles textmode={textMode}/>}/> 
   <Route path='Projects' element={<Projects textmode={textMode} />}/> 
   <Route path='Speacking' element={<Speacking textmode={textMode} />}/> 
    </Routes> 
</div>
    );
}

export default Section;

