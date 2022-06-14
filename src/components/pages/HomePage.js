import React from 'react';

const HomePage = ({...otherProps}) => {

    return (
            <section className='absolute z-0 md:h-screen md:w-screen h-max w-max inset-0 flex-wrap md:flex'>
                <div className="pt-36 pb-20 md:pt-56 md:pb-36 md:w-1/2 flex-wrap">
                    <h2 className="animationOpacity text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</h2>
                    <h1  className="animationOpacity text-3xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL</h1>
                    <h1  className="animationOpacity text-3xl md:text-7xl text-gray-600 font-body flex ml-10 ">WARAKOMSKI</h1>
                </div>   
                <div className="md:w-1/2 md:h-screen h-max w-full bg-amber shadow-md">
                    <img className="animationImage md:fixed max-w-xs md:max-w-sm z-0 bottom-0 md:overflow-hidden md:ml-32 ml-1" src="/img/mw.png" alt="MW" ></img>
                </div>
            </section>
            )
}

export default HomePage;