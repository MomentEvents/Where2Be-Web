import React, { useState, useEffect } from "react";
import LandingSidemenu from "../common/sidemenu-landing/landingSidemenu";
import LandingHeader from "../landingPage/component/header";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { COLORS } from "../../constants/colors";
import { LocationOnOutlined, AccessTimeOutlined } from "@mui/icons-material";
import Footer from "../landingPage/component/footer";
import CirclingLightsBackground from "../Styles/CirclingLightsBackground";
import JoinModal from "./JoinModal";
import styled from "@emotion/styled";

const EventDetailsMain = ({ event, host }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const { isDesktop } = useContext(AppContext);

  const DesktopView = () => {
    const calculateFontSize = (title) => {
      if (title.length < 30) return 65; // large font size for short titles
      if (title.length < 40) return 50; // medium font size for medium-length titles
      return 40; // smaller font size for long titles
    };

    const toggleModal = () => {
      setModalOpen(!isModalOpen);
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

    return (
      <CirclingLightsBackground>
        <div style={{ paddingLeft: 60, paddingRight: 60, paddingTop: 150 }}>
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
                  fontSize: calculateFontSize(event.title),
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
                  {event.location}
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
                  {formatDateString(event.start_date)}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically (optional, if you want it center vertically in the available space)
                  marginTop: "100px", // Add some space above the button
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
                  Signup for Event
                </button>
              </div>
            </div>

            {/* Image on the right */}
            <div
              style={{
                width: "50%",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={event.image}
                style={{
                  maxWidth: "100%", // Limits the width to the parent container's width
                  height: "auto", // Maintains the aspect ratio
                  maxHeight: "60vh",
                  objectFit: "contain", // Ensures the entire image is visible
                  borderRadius: "10px",
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Add this line for shadow
                }}
                alt={event.title}
              />
            </div>
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
              fontSize: 30,
              fontWeight: 200,
              marginBottom: 30,
            }}
          >
            About this event
          </h3>
          <h3
            style={{
              color: COLORS.secondaryText,
              fontSize: 20,
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

  const MobileView = () => {
    const ImageContainer = styled.div`
      position: relative;
      width: 100%;
      height: 400px;
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
    `;

    const StyledImage = styled.img`
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: contain;
    `;

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
          <ImageContainer>
            <BlurredBackground src={event.image} />
            <StyledImage src={event.image} alt={event.title} />
          </ImageContainer>
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
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <button
                onClick={toggleModal}
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

  // Render based on the state
  return (
    <div>
      <LandingSidemenu />
      <LandingHeader disableLogo={!isDesktop} breadcrumb_shadow={undefined} />
      <JoinModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        isDesktop={isDesktop}
      />
      {isDesktop ? <DesktopView /> : <MobileView />}
    </div>
  );
};

export default EventDetailsMain;
