import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
import SideBar from './SideBar';

export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className='fixed top-0 md:w-full md:flex justify-center items-center w-full h-14  bg-slate-900 p-1 z-1000 bg-opacity-70 shadow-xl'>
                {/* Desktop Menu */}
                <ul className='hidden md:flex justify-center items-center text-white space-x-20 font-bold'>
                    <li>
                        <Link to='home'
                            smooth={true}
                            duration={600}
                            className='text-white cursor-pointer transition hover:opacity-80 font-extralight'
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to='about'
                            smooth={true}
                            duration={600}
                            className='text-white cursor-pointer transition hover:opacity-80 font-extralight'
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to='portfolio'
                            smooth={true}
                            duration={600}
                            className='text-white cursor-pointer transition hover:opacity-80 font-extralight'
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link to='contact'
                           smooth={true}
                           duration={600}
                           className="text-white cursor-pointer transition hover:opacity-80 font-extralight"
                        >
                           Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex justify-end p-2 '>
                    <button onClick={() => setShowMenu(!showMenu)} className='border-2 border-solid border-cyan-500'>
                        {showMenu ? <FaTimes className='text-white' size={35} /> : <FaBars className='text-white' size={35}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {showMenu && <SideBar showMenu={showMenu} setShowMenu={setShowMenu}/>}
               
            </nav>
        </>
    );
}
