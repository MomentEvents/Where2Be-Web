import React from 'react';

import Sidebar from '../common/sidebar';
import HeaderOne from '../../layout/headers/header';
import WrapCreateEvent from './wrapEvent';
import { useState } from 'react';
import BackToTopCom from '../common/scroll-to-top';
import DarkMode from '../common/dark-mode';
import OffCanvasArea from '../common/off-canvas';
import { useContext } from 'react';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';
const CreateEventMain = () => {
    const [collapse, setCollapse] = useState(false)
    const {dark} = useContext(DarkModeContext)
    const handleClick = () =>{
      setCollapse(!collapse)
    }
  
    return (
      <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <OffCanvasArea/>
        <div className='page__full-wrapper'>
          <Sidebar handleClick={handleClick} collapse={collapse}/>
           <div className='page__body-wrapper'>
             <HeaderOne handleClick={handleClick}/>
          <WrapCreateEvent/>
         </div>
      </div>
      
      <BackToTopCom/>
      
    </main>
    );
};

export default CreateEventMain;