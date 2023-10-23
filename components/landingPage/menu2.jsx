import Link from "next/link";
import React, { useContext } from "react";
import mobileMenu from "../../data/mobile-menu";
import { AppContext } from "../../context/AppContext";

const Menu2 = () => {
  const {toggleSideMenu} = useContext(AppContext)
  return (
    <div className="mean-bar">
      <nav className="mean-nav">
        <ul>
          {mobileMenu.length > 0 &&
            mobileMenu.map((menuItem, index) => (
              <li onClick={toggleSideMenu} key={index}>
                <Link href={menuItem.link}>{menuItem.text}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu2;
