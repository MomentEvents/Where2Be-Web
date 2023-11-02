import React from "react";
import English from "../../utils/SVG/language-icons/english";
import ArabixIcon from "../../utils/SVG/language-icons/arabixIcon";
import ChainisIcon from "../../utils/SVG/language-icons/chainisIcon";
import Deutsch from "../../utils/SVG/language-icons/deutsch";
import FrancaisIcon from "../../utils/SVG/language-icons/francais";

const Languages = () => {
  return (
    <>
      <li>
        <a className="lang__item" href="#">
          <div className="lang__icon">
            <English />
          </div>
          <div className="lang__country">
            <span>English</span>
          </div>
        </a>
      </li>
      <li>
        <a className="lang__item" href="#">
          <div className="lang__icon">
            <ArabixIcon />
          </div>
          <div className="lang__country">
            <span>لعربية</span>
          </div>
        </a>
      </li>
      <li>
        <a className="lang__item" href="#">
          <div className="lang__icon">
            <ChainisIcon />
          </div>
          <div className="lang__country">
            <span>简体中文</span>
          </div>
        </a>
      </li>
      <li>
        <a className="lang__item" href="#">
          <div className="lang__icon">
            <Deutsch />
          </div>
          <div className="lang__country">
            <span>Deutsch</span>
          </div>
        </a>
      </li>
      <li>
        <a className="lang__item" href="#">
          <div className="lang__icon">
            <FrancaisIcon />
          </div>
          <div className="lang__country">
            <span>Français</span>
          </div>
        </a>
      </li>
    </>
  );
};

export default Languages;
