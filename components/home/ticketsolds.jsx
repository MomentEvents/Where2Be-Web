import React, { useEffect, useRef, useState } from "react";
import CardHeaderDropdown from "./cardheaderdropdown";

import schedules from "../../data/dashboardData/schduleEvent";
import Scrollbar from "smooth-scrollbar";
import TicketIcon from "../../utils/SVG/ticketIcon";
import Link from "next/link";

const TicketSolds = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination configuration
  const ticketsPerPage = 6;
  const totalPages = Math.ceil(schedules.length / ticketsPerPage);

  // Calculate current tickets to display based on the current page
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = schedules.slice(indexOfFirstTicket, indexOfLastTicket);

  // Change page
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1); // Update selected page

    // You can also add logic to update the active class manually
    const navTabs = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navTabs.length; i++) {
      navTabs[i].classList.remove("active");
    }
    navTabs[selected].classList.add("active");
  };

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollbar = Scrollbar.init(scrollContainerRef.current);

      return () => {
        scrollbar.destroy(); // Cleanup when the component is unmounted
      };
    }
  }, []);
  return (
    <div className="col-xxl-6">
      <div className="card__wrapper">
        {/* Card content */}
        {/* ... */}

        <div className="card__header">
          <div className="card__header-top">
            <div className="card__title-inner">
              <div className="card__header-icon">
                <TicketIcon />
              </div>
              <div className="card__header-title">
                <h4>Ticket Sold</h4>
              </div>
            </div>
            <div className="card__header-right">
              <div className="card__button">
                <div className="traffic__tab">
                  <nav>
                    {/* my pagination design */}
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className={`nav-link${
                          currentPage === 1 ? " active" : ""
                        }`}
                        id="tricke-1-tab"
                        type="button"
                        role="tab"
                        aria-controls="tricke-1"
                        aria-selected={currentPage === 2 ? "true" : "false"}
                        onClick={() => handlePageChange({ selected: 0 })}
                      >
                        This Week
                      </button>
                      <button
                        className={`nav-link${
                          currentPage === 2 ? " active" : ""
                        }`}
                        id="nav-tricke-2-tab"
                        type="button"
                        role="tab"
                        aria-controls="nav-tricke-2"
                        aria-selected={currentPage === 2 ? "true" : "false"}
                        onClick={() => handlePageChange({ selected: 1 })}
                      >
                        Previous Week
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              {/* card header dropdown */}
              <CardHeaderDropdown />
            </div>
          </div>
        </div>

        <div ref={scrollContainerRef} className="scroll-w-2 card__scroll">
          <div className="card__inner">
            {/* Ticket content */}
            {currentTickets.length > 0 &&
              currentTickets.map((ticket, index) => (
                <div key={index} className="tricket__sold-item">
                  {/* Ticket item content */}
                  {/* ... */}
                  <div className="news__item-inner bb-0">
                    <div className="news__thumb">
                      <Link href="/event-list">
                        <a>
                          <img src={ticket.userImg.src} alt="image not found" />
                        </a>
                      </Link>
                    </div>
                    <div className="news__content">
                      <h4 className="news__title">
                        <Link href="/schedule-list">
                          <a>{ticket.title}</a>
                        </Link>
                      </h4>
                      <div className="news__meta">
                        <div className="news__meta-status">
                          <span>
                            <i className={ticket.usericon}></i>
                          </span>
                          <span>{ticket.name}</span>
                        </div>
                        <div className="news__meta-status">
                          <span>
                            <i className={ticket.timeIcon}></i>
                          </span>
                          <span>{ticket.time}</span>
                        </div>
                        <div className="news__meta-status">
                          <span>
                            <i className={ticket.addressIcon}></i>
                          </span>
                          <span>{ticket.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sold__progress-item">
                    <div className="sold__bar-top">
                      <span>{ticket.progressLimit}</span>
                      <span className="devider">/</span>
                      <span className="active">{ticket.progress}</span>
                    </div>
                    <div className="sold__progress">
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay="0s"
                          data-wow-duration=".4s"
                          role="progressbar"
                          aria-label="Example with label"
                          style={{ width: "65%" }}
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSolds;
