import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Resume = ({...otherProps}) => {
   
    const myWork = [
        { id: 1, work: "LOGISTICS MANAGEMENT" },
        { id: 2, work: "DATA MODELING, ANALYSIS & REPORTING" },
        { id: 3, work: "LIVE DASHBOARDS" },
        { id: 4, work: "DATA AUTOMATIZATION" },
        { id: 5, work: "SQL SERVER ADMIN" },
        
    ];

    const mySkills = [
        { id: 1, skills: "VBA", level: 100, years: 2017 },
        { id: 2, skills: "SQL", level: 90, years: 2020 },
        { id: 3, skills: "HTML & CSS", level: 70, years: 2021 },
        { id: 4, skills: "JavaScript", level: 65, years: 2021  },
        { id: 5, skills: "Python", level: 20, years: 2020}
    ];

    const myTools = [
        { id: 1, tools: "Excel", level: 100, years: 2011 },
        { id: 2, tools: "VS Code", level: 90, years: 2020 },
        { id: 3, tools: "SAP LE", level: 80, years: 2013 },
        { id: 4, tools: "Power BI", level: 80, years: 2021 },
        { id: 5, tools: "Tailwind", level: 80, years: 2021 },
        { id: 6, tools: "React.JS", level: 70, years: 2021 },
        { id: 7, tools: "Github & Bash", level: 70, years: 2021 }, 
        { id: 8, tools: "Azure studio", level: 70, years: 2021 },
        { id: 9, tools: "SSMS", level: 60, years: 2021 },
        { id: 10, tools: "SQL Server", level: 50, years: 2021 }
    ];

    const myEducation = [
        { id: 1, major: "LOGISTICS MANAGEMENT", school: "WSL POZNAN", degree: "MASTER'S DEGREE"},
        { id: 2, major: "BUSINESS COMMUNICATION", school: "ECONOMICS UNIVERSITY IN POZNAN", degree: "DIPLOMA"},
        { id: 3, major: "TRANSPORT ENGINEERING", school: "ZUT SZCZECIN", degree: "ENGINEER'S DEGREE"},
        
    ];

    const myCertificates = [
        { id: 1, name: "The Complete Web Developer in 2021", url: "/img/zero_to_hero_web_developer.jpg", pic: "zero_to_hero_web_developer.jpg"},
        { id: 2, name: "Statistics for Data Science and Business Analysis", url: "/img/data_science.jpg", pic: "data_science.jpg"},
        { id: 3, name: "Leadership & Management Skills", url: "/img/team_leadership.jpg", pic: "team_leadership.jpg"}
        ];

    const experienceYears = (b, c) =>{
        let today = new Date()
        if (((today.getFullYear()-b)<2) && c > 30) {
            return '(' + (today.getFullYear()-b) + ' year)'
        } else if (((today.getFullYear()-b)>2) || c > 30)  {
            return '(' + (today.getFullYear()-b) + ' years)'
        } else {
            return ''
        }
    }

    const barWidth = (level) => {
        let widthStyle = {
            width: level + "%"
        }
        return  widthStyle
    }

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    
    return (
        <section>
            <div className="absolute z-0 pt-56 pb-36 md:w-1/2 flex-wrap">
                <h1 className="text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</h1>
                <h1  className="text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</h1>
            </div>  
            <div className="animationSlideInPage z-40 animationSlideInPage scroll-smooth flex relative w-full h-max">
                <div className="animationLogo hidden md:block md:pt-4 md:pl-10 md:fixed md:visible md:w-44 md:h-full md:bg-white">
                    <span className="md:visible pl-5 font-kolker md:text-4xl tracking-tight text-gray-600">Mike</span>
                    <span className="md:visible font-kolker md:text-4xl text-amber">W.</span>
                </div>
                <div className=" md:ml-44 bg-amber flex-col shadow-xl h-full md:w-4/5 w-full">
                        <div className="animationLogo w-full">
                            <h1 className="pl-5 mr-2 text-gray-400 font-kolker text-8xl flex justify-center pt-2  ">
                                MY WORK EXPERIENCES
                            </h1>
                            <Zoom>
                            <div className="flex gap-2 ml-2 md:mb-10 md:mt-10 mb-2">
                                <div className="md:w-2/3 w-56 font-kolker text-gray-600 md:p-10 py-10 md:mt-20  h-auto shadow-lg">
                                    <label className="md:text-4xl text-3xl pl-4 md: md:pl-16">
                                        2013-Now
                                    </label>
                                    <label className="md:text-4xl text-3xl">
                                        Samsung Electronics
                                    </label>              
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 mr-2 pt-10 pb-10 md:space-y-4 md:mt-20  h-auto shadow-lg">
                                    {myWork.map(({ work, id }) => (
                                    <p className="md:text-6xl text-3xl" key={id}> {work} </p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-2 ml-2 md:mb-10 md:mt-10 mb-2">
                                <div className="md:w-2/3 w-56 font-kolker text-gray-600 md:p-10 md:mt-20  h-auto shadow-lg">
                                    <label className="md:text-4xl text-3xl pl-4 md: md:pl-16">
                                        My Skills
                                    </label>
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 mr-2 pt-10 pb-10 md:mt-20 md:space-y-4  h-auto shadow-lg">
                                    {mySkills.map(({ skills, id, level, years }) => (                
                                        <div key={id}>
                                            <div className="flex justify-between">
                                                <p className="md:text-6xl text-3xl flex">
                                                    {skills}
                                                </p>
                                            <div className="mt-1 md:mt-2 mr-2 md:mr-2 bg-gray-500 h-5 md:h-10 shadow-xl w-48 md:w-72">
                                                <div style={barWidth(level)} className="bg-blue-500 text-2xl md:font-medium text-gray-400 text-center md:p-2 leading-none h-full"> {level}% {experienceYears(years, level)}</div>
                                                </div>
                                            </div>                          
                                        </div>
                                    ))}
                            </div>        
                            </div>
                            <div className="flex gap-2 ml-2 md:mb-10 md:mt-10 mb-2">
                                <div className="md:w-2/3 w-56 font-kolker text-gray-600 md:p-10 md:mt-20  h-auto shadow-lg">
                                    <label className="md:text-4xl text-3xl pl-4 md: md:pl-16">
                                        Tools
                                    </label>
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 mr-2 pt-10 pb-10 md:space-y-4 md:mt-20  h-auto shadow-lg">
                                    {myTools.map(({ tools, id, level, years }) => (                
                                        <div key={id}>
                                            <div className="flex justify-between">
                                                <p className="md:text-6xl text-3xl flex">
                                                    {tools}
                                                </p>
                                            <div className="mt-1 md:mt-2 mr-2 md:mr-2 bg-gray-500 h-5 md:h-10 shadow-xl w-48 md:w-72">
                                                <div style={barWidth(level)}  className="bg-blue-500 text-2xl font-sm md:font-medium text-gray-400 text-center md:p-2 leading-none h-full"> {level}% {experienceYears(years, level)}</div>
                                                </div>
                                            </div>                          
                                        </div>
                                    ))}                       
                                </div>
                            </div>
                            <div className="flex gap-2 ml-2 md:mb-10 md:mt-10 mb-2">
                                <div className="md:w-2/3 w-56 font-kolker text-gray-600 md:p-10 py-10 md:mt-20  h-auto shadow-lg">
                                    <label className="md:text-4xl text-3xl pl-4 md: md:pl-16">
                                        Education
                                    </label>              
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 mr-2 pt-10 pb-10  md:mt-20 space-y-6 h-auto shadow-lg">
                                {myEducation.map(({ major, id, school, degree }) => (
                                    <div key={id}>
                                        <p className="md:text-6xl text-3xl">
                                            {major}
                                        </p>
                                        <p className="md:text-4xl text-1xl">
                                            {school}
                                        </p>
                                        <p className="md:text-4xl text-1xl">
                                            {degree}
                                        </p>
                                    </div>
                                    ))}          
                                </div>
                            </div>
                            <div className="flex gap-2 ml-2 md:mt-5 md:mb-20">
                                <div className="md:w-2/3 w-56 font-kolker text-gray-600 md:p-10 py-10 md:mt-20  h-auto shadow-lg">
                                    <label className="md:text-4xl text-3xl pl-4 md: md:pl-16">
                                        CERTIFICATES
                                    </label>              
                                </div>
                                <div className="w-full font-kolker  text-gray-600 pl-5 mr-2 pt-10 pb-10 md:space-y-6 md:mt-20  h-auto shadow-lg">
                                {myCertificates.map(({ id, name, pic, url }) => (
                                    <p key={id} className="md:text-6xl text-3xl">    
                                        <a download={pic} href={url}>
                                            {name}
                                        </a>
                                    </p>
                                    ))}                  
                                </div>
                            </div>  
                         </Zoom>        
                        </div>
                    </div>
            <div className="md:visible md:w-1/12 bg-white">
            </div>        
            <div className="animationLogo justify-end w-full md:flex fixed md:top-0 md:right-0 md:w-36">         
                <div  className="flex justify-end text-gray-400 font-body md:text-4xl text-3xl pt-5 pr-4 md:pr-14"> 
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

export default Resume;