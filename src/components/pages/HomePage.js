import React from 'react';

const HomePage = ({...otherProps}) => {


    return (
            <div className='absolute z-0 md:h-screen h-auto w-screen flex-wrap md:flex'>
                <div className=" pt-56 pb-36 md:w-1/2 flex-wrap">
                    <div className="animation3 text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</div>
                    <div  className="animation3 text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</div>
                </div>   
              
                <div className="md:w-1/2 md:h-screen bg-amber shadow-md">
                    <img className=" animation4 md:fixed z-0 bottom-0 md:overflow-hidden md:ml-20" src="/img/mw.png" alt="MW" width="460" ></img>
                </div>
            </div>
            )
}

export default HomePage;