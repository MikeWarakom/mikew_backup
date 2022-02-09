import React, { useState } from 'react';
import './Style.css';
import { useLocation, Routes, Route  } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Header from './Header';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contacts from '../pages/Contacts';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {

  const location = useLocation();
  
  const [Active, setActive ] = useState(false);

  const ifHomeActive = () => {
    if (location.pathname.length > 1) {
      setActive(Active)
    } else {
      setActive(!Active)
    }  
  }

 const homeTimeOut = setTimeout(ifHomeActive, 1000);

  return ( 

        <div className=" justify-between ">
                  <Header/>
                <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='/aboutme' element={<AboutMe />}/>
                  <Route path='/projects' element={<Projects />}/>
                  <Route path='/resume' element={<Resume />}/>
                  <Route path='/contacts' element={<Contacts />}/>
                </Routes>
              <div className={`${homeTimeOut && 'hidden overflow-hidden'}`}>
                <HomePage/>
              </div>
                </AnimatePresence>
            <div className='fixed flex justify-end mb-4 mr-2 w-screen bottom-0 right-0'>
              <Footer />
            </div>
        </div>
  );
}

export default AnimatedRoutes;
