import React from 'react';
import { Link } from 'react-router-dom';
import { TiWeatherSunny } from "react-icons/ti";
import { TbMoonStars } from "react-icons/tb";
import { useState } from 'react';

// typage de la function en props
type HandleBackground={
    handlebackground:(value:boolean)=>void

}

const Navbar = ({handlebackground }:HandleBackground) => {
    const [darkModeIcon, setDarkModeIcon] = useState(true)

handlebackground(darkModeIcon)


    return (
        <nav className='  flex w-4/6 ml-auto justify-between   '>


            <ul className={`flex border  w-96 font-semibold text-sm ${ darkModeIcon? `text-gray-900`:  `text-white`} justify-around py-3 rounded-full shadow-lg`}  >

                <Link to='About'><li className=' hover:text-orange-500 transition-all'>About</li></Link>
                <Link to='Articles'> <li className=' hover:text-orange-500 transition-all'> Articles</li></Link>
                <Link to='Projects'> <li className=' hover:text-orange-500 transition-all'> Projects</li></Link>
                <Link to='Speacking'> <li className=' hover:text-orange-500 transition-all'>Speacking</li></Link>


            </ul>
            {darkModeIcon ?
                <TiWeatherSunny
                    onClick={() => setDarkModeIcon(false)}
                    className='border text-3xl size-12 p-2 rounded-full cursor-pointer'
                /> :
                <TbMoonStars
                    className='border text-3xl size-12 p-2 rounded-full cursor-pointer text-blue-500  border-blue-500'
                    onClick={() => setDarkModeIcon(true)} />

            }


        </nav>
    );
}

export default Navbar;
