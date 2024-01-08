import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './EventCard.module.css';

const EventCard = ({ event_id, start_date, title, event_image }) => {
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        // Function to update the width
        const updateWidth = () => {
          const width =window.innerWidth > 1000 ? (window.innerWidth - 40) / 3 : (window.innerWidth - 40) > 892 ? (window.innerWidth - 40) / 2 : window.innerWidth;
          setCardWidth(width);
        };
    
        // Set width on initial component mount
        updateWidth();
    
        // Add event listener for window resize
        window.addEventListener('resize', updateWidth);
    
        // Clean up event listener
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const formatDate = (date) => {
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
        const eventMonth = eventDate.getMonth()+1;
        const eventDayOfMonth = eventDate.getDate();
      
        if (dayDifference < 1) {
            return "Today";
        } else if (dayDifference < 7) {
            return eventDayOfWeek;
        } else {
            return `${eventMonth}/${eventDayOfMonth}`;
        }
    }

    const formatTime = (dateString) => {
        // Parse the date string into a Date object
        const date = new Date(dateString);

        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        // Convert 24-hour format to 12-hour format and determine the am/pm suffix
        const hour12 = hours % 12 || 12;
        const ampm = hours < 12 ? "AM" : "PM";
      
        // Format minutes to always have two digits
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
        // Construct the formatted date string
        return `${hour12}:${formattedMinutes} ${ampm}`;
    };

    const calculateFontSize = (text) => {
        if (text != "Today") return 28; // large font size for short titles
        return 22; // smaller font size for long titles
    };

    return (
        <Link className={styles.cardLink} style={{ width: `${cardWidth}px`}} href={`/event/${event_id}`} passHref>
            <div className={styles.card} style={{ backgroundImage: `url(${event_image})` }}>
                <div className={styles.cardTextContainer}>
                    <span className={styles.date} style={{ fontSize: calculateFontSize(formatDate(start_date))}}>{formatDate(start_date)}</span>
                    <div className={styles.details}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.time}>{formatTime(start_date)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
  
export default EventCard;