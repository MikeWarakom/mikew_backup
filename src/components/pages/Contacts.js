import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Result = () => {
    return (
        <p className="pl-2 text-sm md:text-l text-blue-500">
            Your message has been succesfully sent.
        </p>
    )
    }
    const verifier = process.env.REACT_APP_EMAILJS_API
    const template = process.env.REACT_APP_EMAILJS_TEMPLATE
    const service = process.env.REACT_APP_EMAILJS_SERVICE

const Contacts = ({...otherProps}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const [result, showResult] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(service, template, form.current, verifier)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        form.current.reset();
        showResult(true);
        }
              
    return (
        <section>
            <div className="md:block hidden absolute z-0 pt-56 pb-36 md:w-1/2 flex-wrap">
                <h2 className=" text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</h2>
                <h1  className="text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</h1>
            </div>  
            <div className="z-40 animationSlideInPage flex relative w-full  h-screen md:h-max">
                <div className="animationLogo hidden md:block md:pt-4 md:pl-10 md:fixed md:visible md:w-44 md:h-full md:bg-white">
                    <span className="md:visible pl-5 font-kolker md:text-4xl tracking-tight text-gray-600">Mike</span>
                    <span className="md:visible font-kolker md:text-4xl text-amber">W.</span>
                </div>
                <div className=" md:ml-44 bg-amber flex-col shadow-xl h-max md:w-4/5 w-full">
                        <div className="animationLogo w-full">
                            <h1 className="pl-5 text-gray-400 font-kolker text-6xl md:text-8xl flex justify-center pt-2  ">
                                CONTACT
                            </h1>
                            <div className="flex justify-center md:mb-5 md:mt-5 mb-2 w-full">
                                <div className="flex justify-center w-max font-kolker  text-gray-600  p-10 pb-5 md:space-y-4 md:mt-5 h-auto shadow-lg">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="formword">
                                            <span className="md:text-4xl text-3xl">
                                                Full Name
                                            </span>
                                            <br/>
                                            <input className="md:w-72 w-56 h-10 mb-2" type="text" name="fullName" required />
                                            <br/>
                                            <span className="md:text-4xl text-3xl">
                                                Enter email 
                                            </span>
                                            <br/>
                                            <input className="md:w-72 w-56 h-10 mb-2" type="text" name="email" required />
                                            <br/>
                                        </div>
                                        <div className="md:text-4xl text-3xl">
                                            <span>
                                                Message
                                            </span>
                                            <br/>
                                            <textarea className="md:text-2xl md:w-72 w-56 h-32" name="message" required />
                                            <br/>
                                            <div className="flex">
                                                <button className="button hover:text-blue-500 flex">
                                                    Submit
                                                </button>
                                                <div className="flex flex-wrap">{result ? <Result/> : null }</div>  
                                            </div>                   
                                        </div>
                                    </form>                          
                                </div>
                            </div>
                        </div>
                    </div>                              
            <div className="md:visible md:w-1/12 bg-white">
            </div>        
            <div className="animationLogo justify-end w-full md:flex fixed md:top-0 md:right-0 md:w-36">         
                <div  className="flex justify-end text-gray-400 font-body md:text-4xl text-3xl pt-5 pr-4 md:pr-14 md:bg-white"> 
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

export default Contacts;