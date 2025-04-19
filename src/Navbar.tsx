import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TiWeatherSunny } from "react-icons/ti";
import { TbMoonStars } from "react-icons/tb";


type HandleBackground = {
    handlebackground: (value: boolean) => void;
}

const Navbar = ({ handlebackground }: HandleBackground) => {
    const [darkModeIcon, setDarkModeIcon] = useState(true);

    useEffect(() => {
        handlebackground(darkModeIcon);
    }, [darkModeIcon, handlebackground]);

    return (
        <nav className='flex w-4/6 ml-auto justify-between max-lg:m-auto max-lg:w-full max-lg:justify-center'>
            <ul className={`flex border max-lg:flex-col max-lg:items-center max-lg:w-64 max-lg:rounded-lg max-lg:justify-evenly mr-2 max-lg:h-64 w-96 font-semibold text-sm ${darkModeIcon ? `text-gray-900` : `text-white`} justify-around py-3 rounded-full shadow-lg`}>
                <Link to='About'><li className='max-lg:text-xl hover:text-orange-500 transition-all'>About</li></Link>
                <Link to='Articles'><li className='max-lg:text-xl hover:text-orange-500 transition-all'>Articles</li></Link>
                <Link to='Projects'><li className='max-lg:text-xl hover:text-orange-500 transition-all'>Projects</li></Link>
                <Link to='Speacking'><li className='max-lg:text-xl hover:text-orange-500 transition-all'>Speacking</li></Link>
            </ul>
            {darkModeIcon ? 
                <TiWeatherSunny
                    onClick={() => setDarkModeIcon(false)}
                    className='border text-3xl size-12 p-2 rounded-full cursor-pointer'
                /> :
                <TbMoonStars
                    className='border text-3xl size-12 p-2 rounded-full cursor-pointer text-blue-500 border-blue-500'
                    onClick={() => setDarkModeIcon(true)} />
            }
        </nav>
    );
}

export default Navbar;
