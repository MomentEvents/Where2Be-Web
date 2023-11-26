import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Link from 'next/link';

const UpcommingEvents = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const liClassName = isExpanded ? 'mm-active' : '';

  return (
    <li className={liClassName}>
     
        <a className="has-arrow" {...getToggleProps({ onClick: handleClick })}>
          <i className="flaticon-reminder"></i>
          <span className="nav-text">Upcoming Event</span>
        </a>
      

      <ul {...getCollapseProps()} aria-expanded={isExpanded}>
        <li>
          <Link legacyBehavior href="/dashboard/create-event">
            <a>Create Event</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/event-list">
            <a>Event List</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/event-details">
            <a>Event Details</a>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default UpcommingEvents;
