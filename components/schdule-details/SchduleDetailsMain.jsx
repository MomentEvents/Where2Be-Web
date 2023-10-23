import React from 'react';
import Sidebar from '../common/sidebar';
import HeaderOne from '../../layout/headers/header';
import DarkMode from '../common/dark-mode';
import BackToTopCom from '../common/scroll-to-top';
import { useState } from 'react';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';
import { useContext } from 'react';
import SchduleDetailsContent from './SchduleDetailsContent';

const SchduleDetailsMain = ({schduleItem}) => {
    const [collapse, setCollapse] = useState(false)
  const {dark} = useContext(DarkModeContext)
  const handleClick = () =>{
    setCollapse(!collapse)
  }
    return (
        <main className={`body-area ${dark ? "bd-theme-dark" : "bd-theme-light"}`}>
        <div className='page__full-wrapper'>
          <Sidebar handleClick={handleClick} collapse={collapse}/>
           <div className='page__body-wrapper'>
             <HeaderOne handleClick={handleClick}/>
              <SchduleDetailsContent schduleItem={schduleItem}/>
               </div>
            </div>
            <DarkMode/>
            <BackToTopCom/>
          </main>
    );
};

export default SchduleDetailsMain;