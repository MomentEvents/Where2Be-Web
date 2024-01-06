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

const ExplorePageMain = () => {
    const { dark } = useContext(DarkModeContext);

    const events = [
        {
            event_id: '15dbdee8-2d1d-4777-9db4-75e4e0d01f7c',
            start_date: '2024-01-06 00:00:00+00',
            title: "Basic Data Structures Introduction",
            location: "Henry Booker Room, Jacobs Hall",
            event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
        },
        {
            event_id: '1f7e2ea3-df3a-458d-a6b3-14f0a4b88e0f',
            start_date: '2024-01-08 00:00:00+00',
            title: "Paris Test event really long title to test some things outttt if it gets really long long long long long long long long",
            location: "30261 Arolla Lane",
            event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
        },
        {
            event_id: 'a',
            start_date: '2024-01-09 00:00:00+00',
            title: "Paris Test event really long title to test some things outttt if it gets really long",
            location: "Henry Booker Room, Jacobs Hall",
            event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
        },
        {
            event_id: 'b',
            start_date: '2024-01-31 00:00:00+00',
            title: "Paris Test event really long title to test some things outttt if it gets really long long long long long long long long",
            location: "30261 Arolla Lane",
            event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
        },
        {
            event_id: 'c',
            start_date: '2024-01-31 00:00:00+00',
            title: "Basic Data Structures Introduction",
            location: "Henry Booker Room, Jacobs Hall",
            event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
        },
    ];

    // const featuredEvents = [
    //     {
    //         event_id: '15dbdee8-2d1d-4777-9db4-75e4e0d01f7c',
    //         start_date: '2024-01-24 00:00:00+00',
    //         title: "Basic Data Structures Introduction",
    //         location: "Henry Booker Room, Jacobs Hall",
    //         event_image: "https://i.imgur.com/QxtpgIP.png",
    //     },
    //     {
    //         event_id: '1f7e2ea3-df3a-458d-a6b3-14f0a4b88e0f',
    //         start_date: '2024-01-24 00:00:00+00',
    //         title: "Paris Test event really long title to test some things outttt if it gets really long",
    //         location: "30261 Arolla Lane",
    //         event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
    //     },
    //     {
    //         event_id: 'a',
    //         start_date: '2024-01-24 00:00:00+00',
    //         title: "Paris Test event really long title to test some things outttt if it gets really long",
    //         location: "Henry Booker Room, Jacobs Hall",
    //         event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
    //     },
    //     {
    //         event_id: 'b',
    //         start_date: '2024-01-24 00:00:00+00',
    //         title: "Paris Test event really long title to test some things outttt if it gets really long",
    //         location: "30261 Arolla Lane",
    //         event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
    //     },
    //     {
    //         event_id: 'c',
    //         start_date: '2024-01-24 00:00:00+00',
    //         title: "Basic Data Structures Introduction",
    //         location: "Henry Booker Room, Jacobs Hall",
    //         event_image: "https://wxpeyxiragxbvfqtqybw.supabase.co/storage/v1/object/public/event-pictures/event-pictures/1700860632843-72809e03-1967-44e0-b57c-d965794cd5e7",
    //     },
    // ];

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
                // query upcoming events
            } else if (option == eventFilters[1]){
                // query trending events
            } else if (option == eventFilters[2]){
                // query newest events
            }
        }
    };

    useEffect(() => {
        let i = Math.floor(Math.random() * events.length)
        setFeaturedEvents([events[i]]);
      }, []);

    const ImageContainer = styled.div`
      position: relative;
      width: 100%;
      justifyContent: center;
      alignItems: center;
      overflow: hidden;
    `;

    const BlurredBackground = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${(props) => props.src});
      background-size: cover;
      background-position: center; // Centers the image
      filter: blur(15px); // Increased blur effect
      transform: scale(1.1);
      &:before { // Pseudo-element for the darker overlay
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5); // Adjust the alpha for darkness
        z-index: -1; // Ensure the overlay is on top of the background image but behind content
    }
    `;


    return (
        <CirclingLightsBackground>
            <LandingSidemenu />
            <LandingHeader />
            <div className={styles.explore}>
                {   featuredEvents.length > 0 &&
                    <div className={styles.featured_events}>
                        {/* <ImageContainer>
                            <BlurredBackground src={featuredEvents[activeIndex].event_image} />
                            <FeaturedEventCard
                                key={featuredEvents[activeIndex].id}
                                event_id={featuredEvents[activeIndex].event_id}
                                start_date={featuredEvents[activeIndex].start_date}
                                title={featuredEvents[activeIndex].title}
                                location={featuredEvents[activeIndex].location}
                                event_image={featuredEvents[activeIndex].event_image}
                            />
                        </ImageContainer> */}
                        <FeaturedEventCard
                            key={featuredEvents[activeIndex].id}
                            event_id={featuredEvents[activeIndex].event_id}
                            start_date={featuredEvents[activeIndex].start_date}
                            title={featuredEvents[activeIndex].title}
                            location={featuredEvents[activeIndex].location}
                            event_image={featuredEvents[activeIndex].event_image}
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
                            host_picture={event.host_picture}
                            location={event.location}
                            event_image={event.event_image}
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