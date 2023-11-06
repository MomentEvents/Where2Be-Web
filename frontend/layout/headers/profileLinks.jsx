import Link from "next/link";
import React from "react";
import ProfileIcon from "../../utils/SVG/profile/profile";
import Chaticon from "../../utils/SVG/profile/chaticon";
import InboxIcon from "../../utils/SVG/profile/inboxIcon";
import AddAccountIcon from "../../utils/SVG/profile/addAccountIcon";
import LoginIcon from "../../utils/SVG/profile/loginIcon";
import supabase from "../../lib/supabase";
import showMessage from "../../components/errorMessage/showMessage";
import { useRouter } from "next/router";
import { deleteSupabaseCookies } from "../../lib/cookies";

const ProfileLinks = () => {
  const router = useRouter();

  const handleSignOut = async (e) => {
    e.preventDefault(); // Prevent default action
    const { error } = await supabase.auth.signOut();
    if (error) {
      showMessage(error);
      return;
    }

    deleteSupabaseCookies();
    router.push("/");
  };

  return (
    <>
      <li>
        <Link legacyBehavior href="/profile">
          <a>
            <ProfileIcon />
            Profile
          </a>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="">
          <a onClick={handleSignOut}>
            <LoginIcon />
            Log Out
          </a>
        </Link>
      </li>
    </>
  );
};

export default ProfileLinks;
