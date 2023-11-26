import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Link from 'next/link';

const Profile = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const liClassName = isExpanded ? 'mm-active' : '';

  return (
    <li className={liClassName}>
      
        <a className="has-arrow" {...getToggleProps({ onClick: handleClick })}>
          <i className="flaticon-user-1"></i>
          <span className="nav-text">Profile</span>
        </a>
      

      <ul {...getCollapseProps()} aria-expanded={isExpanded}>
  <li>
    <Link legacyBehavior href="/dashboard/profile">
      <a>Profile</a>
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/setting">
      <a>Setting</a>
    </Link>
  </li> 
  <li>
    <Link legacyBehavior href="/chat">
      <a>Chatbox</a>
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/signin">
      <a>Sign in</a>
    </Link>
  </li>
  <li>
    <Link legacyBehavior href="/signup">
      <a>Sign up</a>
    </Link>
  </li>
</ul>

    </li>
  );
};

export default Profile;
