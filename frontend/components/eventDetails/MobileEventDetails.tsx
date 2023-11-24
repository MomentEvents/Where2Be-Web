import React from "react";

import { COLORS } from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocationOnOutlined, AccessTimeOutlined } from "@mui/icons-material";
import Footer from "../landingPage/component/footer";
import CirclingLightsBackground from "../Styles/CirclingLightsBackground";

const MobileEventDetails = ({ event, host }) => {
  function formatDateString(dateString) {
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Define arrays for day names and month names
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
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
    return `${dayName} ${monthName} ${day}, ${hour12}:${formattedMinutes}${ampm}`;
  }

  return (
    <CirclingLightsBackground>
      <div>
        <img
          src={event.image}
          style={{
            width: "100%", // Limits the width to the parent container's width
            height: "400px",
            objectFit: "cover", // Ensures the entire image is visible
          }}
          alt={event.title}
        />
        <div style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
          {/* <h4
            style={{
              color: COLORS.secondaryText,
              fontSize: 20,
              fontWeight: 200,
              marginRight: 30,
            }}
          >
            {host.name}
          </h4> */}
          <h1
            style={{
              color: COLORS.mainText,
              fontSize: 40,
              fontWeight: 700,
              marginBottom: 5,
            }}
          >
            {event.title}
          </h1>
          <h3
            style={{
              color: COLORS.mainText,
              fontSize: 18,
              fontWeight: 300,
            }}
          >
            {formatDateString(event.start_date)}
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <LocationOnOutlined
              style={{ color: COLORS.purple, fontSize: 25, marginRight: 10 }}
            />
            <h3
              style={{
                color: COLORS.secondaryText,
                fontSize: 15,
                fontWeight: 300,
              }}
            >
              {event.location}
            </h3>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <button
              style={{
                backgroundColor: COLORS.purple, // Assuming a black background from the image
                color: "#FFFFFF", // White text
                padding: "15px 30px", // Adjust padding to your preference
                fontSize: "18px", // Adjust font size to your preference
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
              Signup for Event
            </button>
          </div>
          <hr
            style={{
              width: "100%",
              border: ".5px solid #E0E0E0",
              marginTop: "50px",
            }}
          />
          <h3
            style={{
              color: COLORS.mainText,
              fontSize: 25,
              fontWeight: 200,
              marginBottom: 30,
            }}
          >
            About this event
          </h3>
          <h3
            style={{
              color: COLORS.secondaryText,
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            {event.description}
          </h3>
          <hr
            style={{
              width: "100%",
              border: ".5px solid #E0E0E0",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          />
        </div>
        <Footer />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 10,
            paddingBottom: 60,
          }}
        >
          <a
            href={"/create-event"}
            style={{
              backgroundColor: "#FFFFFF", // Assuming a black background from the image
              color: "#000000", // White text
              padding: "15px 30px", // Adjust padding to your preference
              fontSize: "18px", // Adjust font size to your preference
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
            Create an Event
          </a>
        </div>
      </div>
    </CirclingLightsBackground>
  );
};

export default MobileEventDetails;
