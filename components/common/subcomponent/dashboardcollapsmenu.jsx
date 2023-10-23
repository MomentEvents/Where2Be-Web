import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Link from 'next/link';

const DashboardCollapseMenu = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const liClassName = isExpanded ? 'mm-active' : '';

  return (
    <li className={liClassName}>
      <Link href="#">
        <a className="has-arrow" {...getToggleProps({ onClick: handleClick })}>
          <i className="flaticon-home"></i>
          <span className="nav-text">Dashboard</span>
        </a>
      </Link>

      <ul {...getCollapseProps()} className="metismenu">
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Landing Page</a>
          </Link>
        </li>
        <li>
          <Link href="/element">
            <a>UI Elements</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default DashboardCollapseMenu;
