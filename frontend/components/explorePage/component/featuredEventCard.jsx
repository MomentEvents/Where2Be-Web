import React, { useState, useEffect } from "react";
import Link from "next/link";
import { COLORS } from "../../../constants/colors";
import { LocationOnOutlined, AccessTimeOutlined } from "@mui/icons-material";
import styles from "./featuredEventCard.module.css";

const FeaturedEventCard = ({
  event_id,
  start_date,
  title,
  location,
  event_image,
}) => {
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
      if (day > 3 && day < 21) return "th"; // covers 4th to 20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
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

  return (
    <div className={styles.featuredEventCardContainer}>
      {/* Image on the left */}
      <Link href={`/event/${event_id}`} className={styles.eventImageContainer}>
        <img src={event_image} className={styles.eventImage} alt={title} />
      </Link>
      {/* Event information on the right */}
      <div className={styles.eventInfoContainer}>
        <h1
          style={{
            color: COLORS.mainText,
            fontSize: calculateFontSize(title),
            fontWeight: 700,
            marginBottom: 15,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: `calc(${calculateFontSize(title)} * 1.2 * 4)`,
          }}
        >
          {title}
        </h1>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <h3
            style={{
              color: COLORS.mainText,
              fontSize: 28,
              fontWeight: 200,
            }}
          >
            {formatDateString(start_date)}
          </h3>
        </div>
        <Link href={`/event/${event_id}`}>
          <div className="flex justify-start items-center mt-8 ml-12">
            <button className="bg-purple-600 text-white py-3 px-6 text-lg font-semibold border-none rounded-lg cursor-pointer focus:outline-none shadow-md hover:bg-purple-700 transition-all duration-300 ease-in-out tracking-wider">
              Check it out!
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEventCard;
