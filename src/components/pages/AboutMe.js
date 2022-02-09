import React from 'react';
import {Link} from 'react-router-dom';

const AboutMe = ({...otherProps}) => {
    return (
            <div>
                <div className="absolute z-0 pt-56 pb-36 md:w-1/2 flex-wrap">
                    <div className="text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</div>
                    <div  className="text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</div>
                </div>   

            <div className="z-40 animation flex relative w-full h-max md:h-screen md:overflow-hidden">


                <div className="animation2 hidden md:block md:pt-4 md:pl-10 md:fixed md:visible md:w-44 md:h-full md:bg-white">
                    <span className="md:visible pl-5 font-kolker md:text-4xl tracking-tight text-gray-600">Mike</span>
                    <span className="md:visible font-kolker md:text-4xl text-amber">W.</span>
                </div>
                <div className=" md:ml-44 bg-amber flex-col shadow-xl h-full md:w-4/5 w-full">
                        <div className="animation2 w-full">
                            <div className="pl-5 text-gray-400 font-kolker text-8xl flex justify-center pt-2  ">
                                ABOUT ME
                            </div>
                            <div className="flex gap-2 md:mb-5 md:mt-5 mb-2">
                                <div className="w-2/3 ml-2 font-kolker text-gray-600 p-10 py-10 md:mt-20 h-auto shadow-lg">
                                <img className="" src="/img/mw2.png" alt="MW" width="450" ></img>     
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 pt-10 pb-10 md:space-y-4 md:mt-20 m-2 h-auto shadow-lg">
                                    <p className="md:text-2xl text-xl pr-5">
                                        Life is about balance, that is why I am very passionate about technology, It makes our lives easier and better. Someone once said that
                                        everyone should know how to do programming. I want to create something creative and breathtaking in my life, I learn to code
                                        every day and try to keep up with newest technologies. In my day to day work I maximize data modeling and automatization with VBA,
                                        SQL and JavaScript for better decision making. I focus my management to create fun, automated and yet professional work environment. My 
                                        ultimate goal is to get out the best versions of ourselves to have extraordinary and balances lives.  

                                    </p>                      
                                </div>
                            </div>
                        </div>
                    </div>                                     
            <div className="md:visible md:w-1/12 bg-white">
            </div>        
            <div className="animation2 justify-end w-full md:flex fixed md:top-0 md:right-0 md:w-36">         
                <div  className="flex justify-end text-gray-400 font-body md:text-4xl text-3xl pt-5 pr-4 md:pr-14"> 
                    <button className="button z-50">
                        <Link to='/'>
                            X
                        </Link>
                    </button>       
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;