import Link from "next/link";
import React from "react";
import ProfileIcon from "../../utils/SVG/profile/profile";
import Chaticon from "../../utils/SVG/profile/chaticon";
import InboxIcon from "../../utils/SVG/profile/inboxIcon";
import AddAccountIcon from "../../utils/SVG/profile/addAccountIcon";
import LoginIcon from "../../utils/SVG/profile/loginIcon";

const ProfileLinks = () => {
  return (
    <>
      <li>
        <Link href="/profile">
          <a>
            <ProfileIcon />
            Profile
          </a>
        </Link>
      </li>
      <li>
        <Link href="/signin">
          <a>
            <LoginIcon />
            Log Out
          </a>
        </Link>
      </li>
    </>
  );
};

export default ProfileLinks;
