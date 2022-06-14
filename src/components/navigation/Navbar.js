import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [Active, setActive ] = useState(false);

    const onClick = () => {
        setActive(!Active)
    }  

    return (
            <nav className="navbarin z-30 shadow-xl md:pl-12 md:pr-12 fixed left-0 right-0 top-4 md:w-screen h-12">
                    <div className="flex justify-between">
                        <div className="pl-3 mb-auto">
                            <Link to='/'>
                                <span className="font-kolker text-4xl tracking-tight text-gray-600">Mike</span>
                                <span className="font-kolker text-4xl tracking-tight text-amber">W.</span>
                            </Link>
                        </div>    
                        <div onClick={onClick} className="flex justify-end px-4 cursor-pointer md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="gray">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <div className='md:block hidden -mt-1'>
                            <Link to='/aboutme'>
                                <button className="text-right font-body text-gray-600 px-4 py-2 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-110 ...">
                                    About me
                                </button>
                            </Link>    
                            <Link to='/projects'>
                                <button className="text-right font-body text-gray-600 px-4 py-2 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-110 ...">
                                    Projects
                                </button>
                            </Link>
                            <Link to='/resume'>
                                <button className="text-right font-body text-gray-600 px-4 py-2 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-110 ...">
                                    Work
                                </button>
                            </Link>
                            <Link to='/contacts'>
                                <button onClick={onClick} className="text-right font-body text-gray-600 px-4 py-2 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-110 ">
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="grid relative w-full pr-4">
                        <div className={`${Active && 'open'} menuUnhide md:hidden shadow-lg justify-self-end w-96 h-full`}>
                            <div className="flex-col shadow-xl bg-white h-full">
                            <Link to='/aboutme'>
                                <button className="block w-full font-body text-5xl border-gray-300 text-gray-600 mt-0 pt-10 px-4 py-6 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-105 ...">
                                    About me
                                </button>
                            </Link>    
                            <Link to='/projects'>
                                <button className="block w-full font-body text-5xl text-gray-600 mt-0 px-4 py-6 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-105 ...">
                                    Projects
                                </button>
                            </Link>
                            <Link to='/resume'>
                                <button className="block w-full font-body text-5xl text-gray-600 mt-0 px-4 py-6 transition duration-500 ease-in-out hover:text-blue-500 transform hover:-translate-y-1 hover:scale-105 ...">
                                    Work
                                </button>
                            </Link>
                            <Link to='/contacts'>
                                <button className="block w-full font-body text-5xl text-gray-600 mt-0 px-4 py-6 transition duration-500 ease-in-out  hover:text-blue-500 transform hover:-translate-y-1 hover:scale-105">
                                    Contact
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div> 
            </nav>
        )
}

export default Navbar;