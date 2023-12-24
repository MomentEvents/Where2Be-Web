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

    function formatDateString(dateString) {
        // Parse the date string into a Date object
        const date = new Date(dateString);
  
        // Define arrays for day names and month names
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
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
  
        // Get day name, month name, date, hours, and minutes from the Date object
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
  
        // Convert 24-hour format to 12-hour format and determine the am/pm suffix
        const hour12 = hours % 12 || 12;
        const ampm = hours < 12 ? "am" : "pm";
  
        // Format minutes to always have two digits
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
        // Construct the formatted date string
        return `${dayName}, ${monthName} ${day} @ ${hour12}:${formattedMinutes}${ampm}`;
    }


    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const [signedUp, setSignedUp] = useState(false);

    return (
        <>
        <JoinModal
            isOpen={isModalOpen}
            onClose={toggleModal}
            isDesktop={true}
            eventID={event_id}
            signedUp={signedUp}
            setSignedUp={setSignedUp}
        />
        <div className={styles.featuredEventCardContainer}>
            {/* Image on the right */}
            <div className={styles.eventImageContainer}>
              <img
                src={event_image}
                className={styles.eventImage}
                alt={title}
              />
            </div>
            {/* Event information on the left */}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <LocationOnOutlined
                  style={{
                    color: COLORS.purple,
                    fontSize: 30,
                    marginRight: 10,
                  }}
                />
                <h3
                  style={{
                    color: COLORS.mainText,
                    fontSize: 20,
                    fontWeight: 200,
                  }}
                >
                  {location}
                </h3>
              </div>
              <div
                style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
              >
                <AccessTimeOutlined
                  style={{
                    color: COLORS.purple,
                    fontSize: 30,
                    marginRight: 10,
                  }}
                />
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
                  onClick={toggleModal}
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
                  {signedUp ? "Already Signed Up!" : "Signup for Event"}
                </button>
              </div>
            </div>
          </div>
        </>
    );
};
  
export default FeaturedEventCard;