
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
   <Route path='/' element={<Navigate to="/accueil"/>}/>
   <Route path='/accueil' element={<Home textmode={textMode}/>} /> 
   <Route path='About' element={<About/>}/> 
   <Route path='Articles' element={<Articles textmode={textMode}/>}/> 
   <Route path='Projects' element={<Projects/>}/> 
   <Route path='Speacking' element={<Speacking/>}/> 
    </Routes> 
</div>
    );
}

export default Section;

