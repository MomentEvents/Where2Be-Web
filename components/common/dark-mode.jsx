import React, { useState } from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../darkmode-provider/DarkModeProvider';

const DarkMode = () => {
  const { dark, setDark } = useContext(DarkModeContext);
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleDark = () => {
    localStorage.removeItem('darkMode');
    setDark(!dark);
  };
  const handleSetOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`bd-theme-settings-area transition-3 ${openMenu ? 'settings-opened' : ''}`}>
      <div className={`bd-theme-wrapper ${dark ? 'bd-theme-dark' : 'bd-theme-light'}`}>
        <div className="bd-theme-header text-center">
          <h4 className="bd-theme-header-title">Template Settings</h4>
        </div>

        <div className={`bd-theme-toggle mb-20 d-block`}>
          <label className="bd-theme-toggle-main" htmlFor="bd-theme-toggler">
            <span className={`bd-theme-toggle-dark ${dark ? 'active' : ''}`}>
              <i className="fa-light fa-moon"></i> Dark
            </span>
            <input type="checkbox" id="bd-theme-toggler" checked={dark} onChange={handleToggleDark} />
            <i className="bd-theme-toggle-slide"></i>
            <span className={`bd-theme-toggle-light ${!dark ? 'active' : ''}`}>
              <i className="fa-light fa-sun-bright"></i> Light
            </span>
          </label>
        </div>

        <div className="bd-theme-settings">
          <div className="bd-theme-settings-wrapper">
            <div className="bd-theme-settings-open">
              <button onClick={handleSetOpenMenu} className="bd-theme-settings-open-btn">
                <span className="bd-theme-settings-gear">
                  <i className="fa-light fa-gear"></i>
                </span>
                <span className="bd-theme-settings-close">
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
