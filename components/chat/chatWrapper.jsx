import Link from "next/link";
import { useState } from "react";
import EditeIcon from "../../utils/SVG/edite-icon";
import SearchIcon from "../../utils/SVG/search-icon";
import LoveIcon from "../../utils/SVG/love-icon";
import BellIcon from "../../utils/SVG/bell-icon";
import MicroPhone from "../../utils/SVG/microphone";
import AttachFile from "../../utils/SVG/attachFile";
import InsertPhoto from "../../utils/SVG/insertPhoto";
import InsertEmoze from "../../utils/SVG/insertEmoze";
import MessageSend from "../../utils/SVG/messageSend";
import chatAuthor from "../../data/chatList";
import user_one from "../../public/assets/img/meta/chatbox/chat-1.png";
import user_two from "../../public/assets/img/meta/chatbox/chat2.png";

const ChatWrapper = () => {
  const [chatContent, setchatContent] = useState(null);
  const [active, setActive] = useState(null);
  const handleChatdata = (data) => {
    setchatContent(data);
  };
  const handleActiveClass = (id) => {
    setActive((prevState) => (prevState === id ? null : id));
  };
  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="breadcrumb__area">
          <div className="breadcrumb__wrapper mb-35">
            <div className="breadcrumb__main">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <Link legacyBehavior href="/">
                            <a> Home </a>
                          </Link>
                        </span>
                      </li>
                      <li className="active">
                        <span>Chatbox</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbox__area">
          <div className="chatbox__main-wrapper">
            {/* inbox wrapper start */}
            <div className="chatbox__inbox-wrapper">
              <div className="chatbox__inbox-inner">
                <div className="chatbox__author-item is-active">
                  <div className="chatbox__author-content">
                    <div className="chatbox__author-thumb">
                      <img src={user_one.src} alt="image not found" />
                    </div>
                    <div className="chatbox__author-info">
                      <h5>David Peters</h5>
                      <span>Senior Developer</span>
                    </div>
                  </div>
                  <div className="chatbox__edit">
                    <button>
                      <a>
                        <EditeIcon />
                      </a>
                    </button>
                  </div>
                </div>
                <div className="chatbox__inbox-search">
                  <form action="#">
                    <div className="chatbox__inbox-input">
                      <input type="search" placeholder="Search Here..." />
                      <button className="chatbox__inbox-btn" type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {chatAuthor.length > 0 &&
                  chatAuthor.map((chat, id) => (
                    <div
                      key={id}
                      onClick={() => handleActiveClass(id)}
                      className={`chatbox__author-item ${
                        active === id ? "active_chat" : ""
                      }`}
                    >
                      <button
                        onClick={() => handleChatdata(chat)}
                        type="button"
                        className="chatbox__author-content"
                      >
                        <div className="chatbox__author-thumb">
                          <img src={chat.thumbnail.src} alt="image not found" />
                        </div>
                        <div className="chatbox__author-info">
                          <h5>{chat.name}</h5>
                          <p>{chat.recentMessage}</p>
                        </div>
                      </button>
                      <div className="chatbox__notification">
                        <span className="time">{chat.time}</span>
                        <span className="text__number">{chat.active}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* inbox wrapper end */}

            {chatContent === null ? (
              <div className="chatbox__chatting-wrapper">
                <div className="chatbox__chatting-top">
                  <div className="chatbox__header">
                    <div className="chatting__user">
                      <div className="chatting__user-thumb">
                        <img src={user_two.src} alt="" />
                      </div>
                      <div className="chatting__user-content">
                        <h5 className="chatting__user-info">Lisa Roy</h5>
                      </div>
                    </div>
                    <div className="chatbox__header-notification">
                      <button type="button">
                        <a>
                          <SearchIcon />
                        </a>
                      </button>
                      <button type="button">
                        {/*love icon  */}
                        <a>
                          <LoveIcon />
                        </a>
                      </button>
                      <button type="button">
                        {/* bellIcon */}
                        <a>
                          <BellIcon />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="chatbox__chatting-body">
                    <div className="chat__message-item mt-30">
                      <div className="chat__message-thumb">
                        <img src={user_two.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Hi David, have you got the project <br /> report pdf?
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-20">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>NO. I did not get it</p>
                      </div>
                    </div>
                    <div className="chat__message-item is-time">
                      <span>Yesterday</span>
                    </div>
                    <div className="chat__message-item">
                      <div className="chat__message-thumb">
                        <img src={user_two.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ok, I will just sent it here. Plz be <br /> sure to
                          fill the details by today <br /> end of the day.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item mt-25">
                      <div className="chat__message-thumb">
                        <img src={user_two.src} alt="image not found" />
                      </div>
                      <div className="chat__message-item-pdf">
                        <img
                          src="/assets/img/message/text.png"
                          alt="image not found"
                        />
                        <div className="chat__message-title">
                          <p>project_report.pdf</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-30">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ok. Should I send it over <br /> email as well after
                          filling <br /> the details.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item mt-35">
                      <div className="chat__message-thumb">
                        <img src={user_two.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ya. I’ll be adding more team <br /> members to it.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-20">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>OK</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chatbox__chatting-footer">
                  <form action="#">
                    <div className="chatbox__footer-input">
                      <button type="button">
                        <a className="chatbox__input-voice">
                          {/* microphone icon */}
                          <MicroPhone />
                        </a>
                      </button>
                      <input type="text" placeholder="Write Something..." />
                      <button className="chatbox__submit-btn" type="button">
                        {/* message send Button */}
                        <MessageSend />
                      </button>
                      <div className="search__option">
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-attach-file"
                            id="type-attach-file"
                          />
                          <label htmlFor="type-attach-file">
                            {/* attach File */}
                            <AttachFile />
                            <span>attach file</span>
                          </label>
                        </div>
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-posts"
                            id="type-posts"
                          />
                          <label htmlFor="type-posts">
                            {/* insert Photo  */}
                            <InsertPhoto />
                            <span>insert photo</span>
                          </label>
                        </div>
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-emoji"
                            id="type-emoji"
                          />
                          <label htmlFor="type-emoji">
                            {/* insert Imogi */}
                            <InsertEmoze />
                            <span>insert emoji</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="chatbox__chatting-wrapper">
                <div className="chatbox__chatting-top">
                  <div className="chatbox__header">
                    <div className="chatting__user">
                      <div className="chatting__user-thumb">
                        <img src={chatContent.thumbnail.src} alt="" />
                      </div>
                      <div className="chatting__user-content">
                        <h5 className="chatting__user-info">
                          {chatContent.name}
                        </h5>
                      </div>
                    </div>
                    <div className="chatbox__header-notification">
                      <button type="button">
                        <a>
                          <SearchIcon />
                        </a>
                      </button>
                      <button type="button">
                        {/*love icon  */}
                        <a>
                          <LoveIcon />
                        </a>
                      </button>
                      <button type="button">
                        {/* bellIcon */}
                        <a>
                          <BellIcon />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="chatbox__chatting-body">
                    <div className="chat__message-item mt-30">
                      <div className="chat__message-thumb">
                        <img src={chatContent.thumbnail.src} alt="" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Hi David, have you got the project <br /> report pdf?
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-20">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>NO. I did not get it</p>
                      </div>
                    </div>
                    <div className="chat__message-item is-time">
                      <span>Yesterday</span>
                    </div>
                    <div className="chat__message-item">
                      <div className="chat__message-thumb">
                        <img src={chatContent.thumbnail.src} alt="" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ok, I will just sent it here. Plz be <br /> sure to
                          fill the details by today <br /> end of the day.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item mt-25">
                      <div className="chat__message-thumb">
                        <img src={chatContent.thumbnail.src} alt="" />
                      </div>
                      <div className="chat__message-item-pdf">
                        <img
                          src="/assets/img/message/text.png"
                          alt="image not found"
                        />
                        <div className="chat__message-title">
                          <p>project_report.pdf</p>
                        </div>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-30">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ok. Should I send it over <br /> email as well after
                          filling <br /> the details.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item mt-35">
                      <div className="chat__message-thumb">
                        <img src={chatContent.thumbnail.src} alt="" />
                      </div>
                      <div className="chat__message-title">
                        <p>
                          Ya. I’ll be adding more team <br /> members to it.
                        </p>
                      </div>
                    </div>
                    <div className="chat__message-item is-right mt-20">
                      <div className="chat__message-thumb">
                        <img src={user_one.src} alt="image not found" />
                      </div>
                      <div className="chat__message-title">
                        <p>OK</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chatbox__chatting-footer">
                  <form action="#">
                    <div className="chatbox__footer-input">
                      <button type="button">
                        <a className="chatbox__input-voice">
                          {/* microphone icon */}
                          <MicroPhone />
                        </a>
                      </button>
                      <input type="text" placeholder="Write Something..." />
                      <button className="chatbox__submit-btn" type="button">
                        {/* message send Button */}
                        <MessageSend />
                      </button>
                      <div className="search__option">
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-attach-file"
                            id="type-attach-file"
                          />
                          <label htmlFor="type-attach-file">
                            {/* attach File */}
                            <AttachFile />
                            <span>attach file</span>
                          </label>
                        </div>
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-posts"
                            id="type-posts"
                          />
                          <label htmlFor="type-posts">
                            {/* insert Photo  */}
                            <InsertPhoto />
                            <span>insert photo</span>
                          </label>
                        </div>
                        <div>
                          <input
                            name="type"
                            type="radio"
                            defaultValue="type-emoji"
                            id="type-emoji"
                          />
                          <label htmlFor="type-emoji">
                            {/* insert Imogi */}
                            <InsertEmoze />
                            <span>insert emoji</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWrapper;
