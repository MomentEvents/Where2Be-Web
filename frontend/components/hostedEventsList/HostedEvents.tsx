import Link from "next/link";
import pageOne from "../../data/schduleContentData/pageOne";
import SchduleCard from "./schudelCard";
import BreadcamMenu from "../common/breadcamMenu";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import showMessage from "../errorMessage/showMessage";
import index from "../../pages/dashboard";
import { COLORS } from "../../constants/colors";

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

  function formatISODateString(isoString) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(isoString);

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${month} ${day}, ${year} @ ${hours}:${formattedMinutes}${ampm}`;
  }

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
        page.current = page.current + 1;
        console.log(page.current);
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
    if (hasMoreRef.current && !loadingRef.current) {
      fetchEvents();
    }
  }, []);

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

        <div className="row">
          {events.map((event, index) => {
            const eventUrl = `/event/${event.event_id}`;
            const signups = 20;
            return (
              <div className="col-xxl-4 col-xl-6 col-12">
                <a href={eventUrl} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      backgroundColor: "#2D2D2D",
                      margin: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 10,
                      border: ".5px solid #3D3D3D",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Adds shadow
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: 600,
                        fontSize: 30,
                        color: COLORS.mainText,
                        marginBottom: 5,
                      }}
                    >
                      {event.title}
                    </h1>
                    <h3
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        color: COLORS.secondaryText,
                      }}
                    >
                      {formatISODateString(event.start_date)}
                    </h3>
                    <h3
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        color: COLORS.secondaryText,
                      }}
                    >
                      {signups} signups
                    </h3>
                    <img
                      src={event.image}
                      style={{
                        marginTop: 15,
                        borderRadius: 10,
                        height: "300px",
                        width: "100%", // Ensures the image covers the entire width of the container
                        objectFit: "cover", // Makes the image cover the entire area without stretching
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Adds shadow
                      }}
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        {/* <div ref={ref}>
          <div style={{ height: "40px" }}></div>
        </div> */}
      </div>
    </>
  );
};

export default HostedEvents;
