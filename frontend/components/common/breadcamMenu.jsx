import Link from 'next/link';
import React from 'react';

const BreadcamMenu = ({title}) => {
    return (
      <div className="breadcrumb__menu">
      <nav>
        <ul>
          <li>
            <span>
              <Link legacyBehavior href="/dashboard">
                <a> Home </a>
              </Link>
            </span>
          </li>
          <li className="active">
            <span> {title} </span>
          </li>
        </ul>
      </nav>
    </div>
    );
};

export default BreadcamMenu;