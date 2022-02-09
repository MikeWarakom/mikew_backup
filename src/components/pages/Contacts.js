import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="pl-2 text-sm md:text-l text-blue-500">
            Your message has been succesfully sent.
        </p>
    )
}

const Contacts = ({...otherProps}) => {

    const [result, showResult] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fjsq0jv', 'template_jtbogma', form.current, 'user_FeMBBQ6DnYfXchet3UB1j')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        form.current.reset();
        showResult(true);
        }
              
    return (
        <div>
            <div className="absolute z-0 pt-56 pb-36 md:w-1/2 flex-wrap">
                <div className="text-xl text-gray-500 font-body flex ml-10">Data Analyst, Web Developer</div>
                <div  className="text-6xl md:text-7xl text-gray-600 font-body flex ml-10">I AM MICHAL WARAKOMSKI</div>
            </div>  
            <div className="z-40 animation flex relative w-full  h-screen md:h-max">
                <div className="animation2 hidden md:block md:pt-4 md:pl-10 md:fixed md:visible md:w-44 md:h-full md:bg-white">
                    <span className="md:visible pl-5 font-kolker md:text-4xl tracking-tight text-gray-600">Mike</span>
                    <span className="md:visible font-kolker md:text-4xl text-amber">W.</span>
                </div>
                <div className=" md:ml-44 bg-amber flex-col shadow-xl h-full md:w-4/5 w-full">
                        <div className="animation2 w-full">
                            <div className="pl-5 text-gray-400 font-kolker text-8xl flex justify-center pt-2  ">
                                CONTACT
                            </div>
                            <div className="flex justify-center md:mb-5 md:mt-5 mb-2 w-full">
                                <div className="flex justify-center w-max font-kolker  text-gray-600  p-10 pb-5 md:space-y-4 md:mt-5 h-auto shadow-lg">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="formword">
                                            <span className="md:text-4xl text-3xl">
                                                Full Name
                                            </span>
                                            <br/>
                                            <input className="w-72 h-10 mb-2" type="text" name="fullName" required />
                                            <br/>
                                            <span className="md:text-4xl text-3xl">
                                                Enter email 
                                            </span>
                                            <br/>
                                            <input className="w-72 h-10 mb-2" type="text" name="email" required />
                                            <br/>
                                        </div>
                                        <div className="md:text-4xl text-3xl">
                                            <span>
                                                Message
                                            </span>
                                            <br/>
                                            <textarea className="md:text-2xl w-72 h-32" name="message" required />
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
            <div className="animation2 justify-end w-full md:flex fixed md:top-0 md:right-0 md:w-36">         
                <div  className="flex justify-end text-gray-400 font-body md:text-4xl text-3xl pt-5 pr-4 md:pr-14 md:bg-white"> 
                    <button className="button">
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

export default Contacts;