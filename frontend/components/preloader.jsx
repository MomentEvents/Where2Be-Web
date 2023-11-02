import React from 'react';

const Preloader = () => {
  return (
    <>
        <div id="preloader">
          <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
          </div>
      </div>
    </>
  );
};

export default Preloader;