import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from "../../../constants/colors";
import { LocationOnOutlined, AccessTimeOutlined } from "@mui/icons-material";
import JoinModal from "../../attendeeEVentDetails/JoinModal";
import styles from './FeaturedEventCard.module.css';

const FeaturedEventCard = ({ event_id, start_date, title, location, event_image }) => {
    const calculateFontSize = (title) => {
        if (title.length < 30) return 65; // large font size for short titles
        if (title.length < 40) return 50; // medium font size for medium-length titles
        return 40; // smaller font size for long titles
    };

    const formatDateString = (dateString) => {
        // Parse the date string into a Date object
        const date = new Date(dateString);
      
        // Define arrays for month names
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
      
        // Function to get the ordinal suffix for the day
        const getOrdinalSuffix = (day) => {
          if (day > 3 && day < 21) return 'th'; // covers 4th to 20th
          switch (day % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
          }
        };
      
        // Get day name, month name, date, hours, and minutes from the Date object
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const ordinalSuffix = getOrdinalSuffix(day);
        const hours = date.getHours();
        const minutes = date.getMinutes();
      
        // Convert 24-hour format to 12-hour format and determine the am/pm suffix
        const hour12 = hours % 12 || 12;
        const ampm = hours < 12 ? "AM" : "PM";
      
        // Format minutes to always have two digits
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
        // Construct the formatted date string
        return `${monthName} ${day}${ordinalSuffix} at ${hour12}:${formattedMinutes} ${ampm}`;
    };

    const GoToEvent = () => {

    }

    return (
        <div className={styles.featuredEventCardContainer}>
            {/* Image on the left */}
            <div className={styles.eventImageContainer}>
              <img
                src={event_image}
                className={styles.eventImage}
                alt={title}
              />
            </div>
            {/* Event information on the right */}
            <div className={styles.eventInfoContainer}>
              <h1
                style={{
                  color: COLORS.mainText,
                  fontSize: calculateFontSize(title),
                  fontWeight: 700,
                  marginBottom: 15,
                }}
              >
                {title}
              </h1>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <h3
                  style={{
                    color: COLORS.mainText,
                    fontSize: 20,
                    fontWeight: 200,
                  }}
                >
                  {formatDateString(start_date)}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically (optional, if you want it center vertically in the available space)
                  marginTop: "50px", // Add some space above the button
                }}
              >
                <button
                  onClick={GoToEvent}
                  style={{
                    backgroundColor: COLORS.purple, // Assuming a black background from the image
                    color: "#FFFFFF", // White text
                    padding: "15px 30px", // Adjust padding to your preference
                    fontSize: "20px", // Adjust font size to your preference
                    fontWeight: "600", // Adjust font weight as needed
                    border: "none",
                    fontFamily: "Poppins",
                    borderRadius: "10px", // Adjust border radius to match the button in the image
                    cursor: "pointer",
                    outline: "none", // Remove outline on focus for cleaner design
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
                    letterSpacing: "0.5px", // Adjust letter spacing for aesthetic preference
                    transition: "all 0.3s ease", // Smooth transition for hover effects
                  }}
                >
                  {"Check it out!"}
                </button>
              </div>
            </div>
          </div>
    );
};
  
export default FeaturedEventCard;