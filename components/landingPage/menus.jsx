import Link from 'next/link';
import React from 'react';
import menuItems from '../../data/menu_data';

const Menus = () => {
  return (
    <ul>
      {menuItems.map((menuItem, index) => (
        <li key={index} className={menuItem.dropdown ? 'has-dropdown has-mega-menu' : ''}>
          <Link href={menuItem.link}>{menuItem.text}</Link>
          {menuItem.megaMenu && (
            <ul className="mega-menu">
              {menuItem.megaMenuItems.map((megaMenuItem, index) => (
                <li key={index}>
                  <Link href={megaMenuItem.link}>
                    <a
                      style={megaMenuItem.style}
                    ></a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;
