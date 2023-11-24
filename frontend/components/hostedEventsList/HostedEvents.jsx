import Link from "next/link";
import pageOne from "../../data/schduleContentData/pageOne";
import SchduleCard from "./schudelCard";
import BreadcamMenu from "../common/breadcamMenu";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import showMessage from "../errorMessage/showMessage";
import index from "../../pages/dashboard";

const HostedEvents = ({ user }) => {
  const [events, setEvents] = useState([]);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);
  const [isFuture, setIsFuture] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const fetchEvents = async () => {
    if (!hasMoreRef.current || loadingRef.current) return;

    setLoading(true);
    loadingRef.current = true;
    try {
      const eventResponse = await fetch(
        `/api/event/host/${user.user_id}?future=${isFuture}&page=${page.current}`
      );
      const newEvents = await eventResponse.json();
      if (newEvents.error) {
        throw new Error(newEvents.error);
      }
      if (newEvents.length === 0) {
        hasMoreRef.current = false;
      } else {
        setEvents((prevEvents) => [...prevEvents, ...newEvents]);
        page.current= page.current + 1;
        console.log(page.current)
      }
    } catch (e) {
      showMessage("Error pulling events: " + e.message, true);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    setEvents([]);
    hasMoreRef.current = true;
    page.current = 1;
    fetchEvents();
  }, [isFuture]);

  useEffect(() => {
    if (inView && hasMoreRef.current && !loadingRef.current) {
      fetchEvents();
    }
  }, [inView]);

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
                <BreadcamMenu title="Events" />
              </div>
              <div className="breadcrumb__tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${isFuture ? "active" : ""}`}
                      onClick={() => setIsFuture(true)}
                      id="day-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab-1-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab-1-pane"
                      aria-selected="true"
                    >
                      Upcoming
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${!isFuture ? "active" : ""}`}
                      onClick={() => setIsFuture(false)}
                      id="day-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#day-tab-2-pane"
                      type="button"
                      role="tab"
                      aria-controls="day-tab-2-pane"
                      aria-selected="false"
                    >
                      Previous
                    </button>
                  </li>
                </ul>
              </div>
              <div className="breadcrum__button">
                <Link legacyBehavior href="/create-event">
                  <a className="breadcrum__btn">
                    Create Event
                    <i className="fa-regular fa-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {events.map((event, index) => {
          return (
            <div>
              <div style={{ height: "70vh" }}>
                {index + 1}. {event.title}
              </div>
              <div>{event.start_date}</div>
            </div>
          );
        })}
        <div ref={ref} style={{ height: "20px" }}></div>
      </div>
    </>
  );
};

export default HostedEvents;
