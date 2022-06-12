import React from 'react';

const HomePage = ({...otherProps}) => {

    return (
            <section className='absolute z-0 md:h-screen h-auto w-screen flex-wrap md:flex'>
                <div className=" pt-56 pb-36 md:w-1/2 flex-wrap">
                    <h2 className="animationOpacity text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</h2>
                    <h1  className="animationOpacity text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</h1>
                </div>   
                <div className="md:w-1/2 md:h-screen bg-amber shadow-md">
                    <img className="animationImage md:fixed z-0 bottom-0 md:overflow-hidden md:ml-32 ml-10" src="/img/mw.png" alt="MW" width="380" ></img>
                </div>
            </section>
            )
}

export default HomePage;