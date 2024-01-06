import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../darkmode-provider/DarkModeProvider";
import EventCard from "./component/eventCard";
import FeaturedEventCard from "./component/featuredEventCard";
import styles from './explore.module.css';
import LandingHeader from "../landingPage/component/header";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import styled from "@emotion/styled";
import CirclingLightsBackground from "../Styles/CirclingLightsBackground";
import Footer from "../landingPage/component/footer";
import { COLORS } from "../../constants/colors";
import Link from "next/link";
import create from "../../public/assets/img/explore/plus-circle.png";

const ExplorePageMain = ({upcomingEvents, newestEvents, trendingEvents}) => {
    const { dark } = useContext(DarkModeContext);

    const [events, setEvents] = useState(upcomingEvents)
    const [featuredEvents, setFeaturedEvents] = useState([])

    const [activeIndex, setActiveIndex] = useState(0); // Start with the first event as active

    const handleDotClick = (index) => {
        setActiveIndex(index); // Update the active index
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedEventFilter, setSelectedEventFilter] = useState('Upcoming Events');
    const eventFilters = ['Upcoming Events', 'Trending Events', 'Newest Events'];

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleEventFilterClick = (option) => {
        setIsDropdownOpen(false);
        if (option != selectedEventFilter){
            setSelectedEventFilter(option);
            if (option == eventFilters[0]){
                setEvents(upcomingEvents);
            } else if (option == eventFilters[1]){
                setEvents(trendingEvents);
            } else if (option == eventFilters[2]){
                setEvents(newestEvents);
            }
        }
    };

    useEffect(() => {
        let i = Math.floor(Math.random() * events.length)
        setFeaturedEvents([events[i]]);
      }, []);

    return (
        <CirclingLightsBackground>
            <LandingSidemenu />
            <LandingHeader />
            <div className={styles.explore}>
                {   featuredEvents.length > 0 &&
                    <div className={styles.featured_events}>
                        <FeaturedEventCard
                            key={featuredEvents[activeIndex].id}
                            event_id={featuredEvents[activeIndex].event_id}
                            start_date={featuredEvents[activeIndex].start_date}
                            title={featuredEvents[activeIndex].title}
                            location={featuredEvents[activeIndex].location}
                            event_image={featuredEvents[activeIndex].image}
                        />
                        {
                            featuredEvents.length > 1 && 
                            <div className={styles.pagination}>
                                {featuredEvents.map((event, index) => (
                                    <span 
                                        key={index} 
                                        className={index === activeIndex ? styles.active : styles.dot}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                ))}
                            </div>
                        }
                    </div>
                }
                <div className={styles.filters}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                            <div className={styles.filter_events_text}>{selectedEventFilter}</div>
                        </button>
                        {isDropdownOpen && (
                            <ul className={styles.dropdownMenu}>
                            {eventFilters.map((option) => (
                                <li key={option} className={styles.dropdownItem} onClick={() => handleEventFilterClick(option)}>
                                    {option}
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                    <div className={styles.filter_text}> at </div>
                    <div className={styles.filter_school_text}>UCSD</div>
                </div>
                <div className={styles.eventCardContainer}>
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            event_id={event.event_id}
                            start_date={event.start_date}
                            title={event.title}
                            event_image={event.image}
                        />
                    ))}
                </div>
            </div>
            <Link legacyBehavior href="/dashboard/create-event">
                <img className={styles.create} src={create.src} alt="image not found"/>
            </Link>
            <Footer />
        </CirclingLightsBackground>
    );
};

export default ExplorePageMain;