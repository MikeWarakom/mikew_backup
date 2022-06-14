import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

const Projects = ({...otherProps}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const myProjects = [
        {id: 1, name: "Robofriends API", url: "https://mikewarakom.github.io/robofriends/", src: "/img/robofriends.png", alt: "Robofriends API"},
        {id: 2, name: "Face Recognition App", url: "https://mikewarakom.github.io/faceapp/", src: "/img/faceapp.png", alt: "Face Recognition App"},
        {id: 3, name: "MW Analytics page", url: "https://keen-taiyaki-0cdaec.netlify.app/", src: "/img/mwanalytics.png", alt: "MW Analytics"},
        {id: 4, name: "User panel", url: "https://stackblitz.com/edit/loginregister?file=src%2FApp.js", src: "/img/userpanel.png", alt: "User panel"},
        
    ]

    return (
        <section>
            <div className="md:flex hidden absolute z-0 pt-56 pb-36 md:w-1/2 flex-wrap">
                <h2 className="text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</h2>
                <h1  className="text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</h1>
            </div>  
            <div className="z-40 animationSlideInPage flex relative w-full md:h-full">
                <div className="animationLogo hidden md:block md:pt-4 md:pl-10 md:fixed md:visible md:w-44 md:h-full md:bg-white">
                    <span className="md:visible pl-5 font-kolker md:text-4xl tracking-tight text-gray-600">Mike</span>
                    <span className="md:visible font-kolker md:text-4xl text-amber">W.</span>
                </div>
                <div className=" md:ml-44 bg-amber flex-col shadow-xl md:w-4/5 w-full h-full">
                    <div className="animationLogo w-full h-full">
                        <h1 className="pl-5 text-gray-400 font-kolker md:text-8xl text-6xl flex justify-center pt-2  ">
                            PROJECTS
                        </h1>
                        <div className="md:grid md:grid-cols-3 md:m-auto flex-col justify-center md:mb-5 md:mt-5 mb-2 md:m-10">
                            {myProjects.map(({ id, name, url, src, alt }) => (
                                <div key={id} className="animation5 w-auto md:m-4 m-10 font-kolker flex content-center flex-col text-center text-gray-600 p-5 bg-amber h-auto shadow-lg">
                                    <a href={url} > 
                                        <img src={src} alt={alt} ></img>  
                                            <h2 className="text-4xl">{name}</h2>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>                              
            <div className="md:visible md:w-1/12 bg-white">
            </div>        
            <div className="animationLogo justify-end w-full md:flex fixed md:top-0 md:right-0 md:w-36">         
                <div  className="flex justify-end text-gray-400 font-body md:text-4xl text-3xl pt-5 pr-4 md:pr-14 "> 
                <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="save-button"
                        onClick={() => (modalOpen ? close() : open())}>
                        <Link to='/'>
                            X
                        </Link>
                </motion.button>  
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects;