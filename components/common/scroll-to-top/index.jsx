import React, { useEffect } from "react";
import BackToTop from "../../../lib/back-to-top";

function BackToTopCom({ className }) {
  useEffect(() => {
    BackToTop(".active-progress");
  },[]);
  return (
    <div className={` progress-wrap active-progress ${className || ""}`}>
      <button id="back_to_top" type="button" className="back-to-top-btn">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      </button>
    </div>
  );
}

export default BackToTopCom;
