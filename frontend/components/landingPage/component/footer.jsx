import Link from "next/link";
import React from "react";
import footer1 from "../../../public/assets/img/shape/footer/footer-1.png";
import footer2 from "../../../public/assets/img/shape/footer/footer-2.png";
import footer3 from "../../../public/assets/img/shape/footer/footer-3.png";
import footer4 from "../../../public/assets/img/shape/footer/footer-4.png";
import footer_logo from "../../../public/assets/img/logo/logo.svg";
import heart from "../../../public/assets/img/index/heart-icon.png"
import email from "../../../public/assets/img/index/email-icon.png"
import instagram from "../../../public/assets/img/index/instagram-icon.png"
import discord from "../../../public/assets/img/index/discord-icon.png"
import LINKS from "../../../constants/links";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div
            className="footer__text"
          >
            <p>
              {"Made with "}
              <img
                src={heart.src}
                alt="image not found"
              />
              {" by students"}
            </p>
          </div>
          <div className="footer__social">
            <Link legacyBehavior href={LINKS.Email} target="_blank">
              <img
                src={email.src}
                alt="image not found"
              />
            </Link>
            <Link legacyBehavior href={LINKS.Instagram} target="_blank">
              <img
                src={instagram.src}
                alt="image not found"
              />
            </Link>
            <Link legacyBehavior href={LINKS.Discord} target="_blank">
              <img
                src={discord.src}
                alt="image not found"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
