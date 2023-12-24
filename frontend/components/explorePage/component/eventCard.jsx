import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './EventCard.module.css';

const EventCard = ({ event_id, start_date, title, host_picture, location, event_image }) => {
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        // Function to update the width
        const updateWidth = () => {
          const width = window.innerWidth > 1400 ? (window.innerWidth - 40) / 4 : window.innerWidth > 1000 ? (window.innerWidth - 40) / 3 : (window.innerWidth - 40) > 650 ? (window.innerWidth - 40) / 2 : window.innerWidth;
          setCardWidth(width);
        };
    
        // Set width on initial component mount
        updateWidth();
    
        // Add event listener for window resize
        window.addEventListener('resize', updateWidth);
    
        // Clean up event listener
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    function formatDate(date) {
        // Parse the input date string
        const eventDate = new Date(date);
        const today = new Date();
        const UTCtoday = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
        UTCtoday.setHours(0, 0, 0, 0);
      
        // Calculate the time difference
        const dayDifference = (eventDate - UTCtoday) / (1000 * 3600 * 24);
      
        // Get day of the week for eventDate
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const eventDayOfWeek = daysOfWeek[eventDate.getDay()];
      
        // Get month and date for eventDate
        const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const eventMonth = monthsOfYear[eventDate.getMonth()];
        const eventDayOfMonth = eventDate.getDate();
      
        if (dayDifference < 0) {
            return "Past";
        } else if (dayDifference < 1) {
            return "Today";
        } else if (dayDifference < 7) {
            return eventDayOfWeek;
        } else {
            return `${eventMonth} ${eventDayOfMonth}`;
        }
    }

    return (
        <Link className={styles.cardLink} style={{ width: `${cardWidth}px`}} href={`/event/${event_id}`} passHref>
            <div className={styles.card} style={{ backgroundImage: `url(${event_image})` }}>
                <div className={styles.hostPicture} style={{ backgroundImage: `url(${host_picture})` }}></div>
                <div className={styles.cardTextContainer}>
                    <span className={styles.date}>{formatDate(start_date)}</span>
                    <div className={styles.details}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.location}>{location}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
  
export default EventCard;