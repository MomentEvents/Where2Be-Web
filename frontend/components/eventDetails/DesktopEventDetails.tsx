import React from "react";

import { COLORS } from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocationOnOutlined, AccessTimeOutlined } from "@mui/icons-material";

const DesktopEventDetails = ({ event, host }) => {
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
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
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

  return (
    <div style={{ paddingLeft: 60, paddingRight: 60, marginTop: 150 }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        {/* Event information on the left */}
        <div style={{ width: "50%", paddingRight: "20px" }}>
          {/* Add some spacing between the columns */}
          <h4
            style={{
              color: COLORS.secondaryText,
              fontSize: 30,
              fontWeight: 200,
              marginBottom: 10,
              marginRight: 30,
            }}
          >
            {host.name}
          </h4>
          <h1
            style={{
              color: COLORS.mainText,
              fontSize: 80,
              fontWeight: 700,
              marginBottom: 15,
            }}
          >
            {event.title}
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
              style={{ color: COLORS.purple, fontSize: 30, marginRight: 10 }}
            />
            <h3
              style={{ color: COLORS.mainText, fontSize: 20, fontWeight: 200 }}
            >
              {event.location}
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
            <AccessTimeOutlined
              style={{ color: COLORS.purple, fontSize: 30, marginRight: 10 }}
            />
            <h3
              style={{ color: COLORS.mainText, fontSize: 20, fontWeight: 200 }}
            >
              {formatDateString(event.start_date)}
            </h3>
          </div>
        </div>

        {/* Image on the right */}
        <div
          style={{
            width: "50%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={event.image}
            style={{
              width: "100%",
              maxHeight: "70vh",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            alt={event.title}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex", // Enable flex container
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically (optional, if you want it center vertically in the available space)
          marginTop: "40px", // Add some space above the button
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: COLORS.purple, // Assuming a black background from the image
            color: "#FFFFFF", // White text
            padding: "15px 30px", // Adjust padding to your preference
            fontSize: "20px", // Adjust font size to your preference
            fontWeight: "600", // Adjust font weight as needed
            border: "none",
            borderRadius: "10px", // Adjust border radius to match the button in the image
            cursor: "pointer",
            outline: "none", // Remove outline on focus for cleaner design
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
            letterSpacing: "0.5px", // Adjust letter spacing for aesthetic preference
            transition: "all 0.3s ease", // Smooth transition for hover effects
          }}
        >
          Signup for Event
        </button>
      </div>
      {/* Description */}
    </div>
  );
};

export default DesktopEventDetails;
