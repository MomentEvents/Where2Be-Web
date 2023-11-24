import Link from "next/link";
import React, { useContext } from "react";
import mobileMenu from "../../data/mobile-menu";
import { AppContext } from "../../context/AppContext";

const Menu2 = () => {
  const { toggleSideMenu } = useContext(AppContext);
  return (
    <div className="mean-bar">
      <nav className="mean-nav">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {mobileMenu.length > 0 &&
            mobileMenu.map((menuItem, index) => (
              <li
                onClick={toggleSideMenu}
                key={index}
                style={{
                  textAlign: "right",
                }}
              >
                <Link legacyBehavior href={menuItem.link}>
                  <a style={{ textDecoration: "none" }}>
                    {menuItem.text}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu2;
