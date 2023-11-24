import React, { useContext, useEffect, useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import { COLORS } from "../../constants/colors";
import showMessage from "../errorMessage/showMessage";
import supabase from "../../lib/supabase";

import PhoneInput from "react-phone-number-input";
import { AppContext } from "../../context/AppContext";

const JoinModal = ({ isOpen, onClose, isDesktop }) => {
  if (!isOpen) return null;

  const inputStyle = {
    width: "100%",
    backgroundColor: "#121212", // Set background color
    border: "1px solid #232323", // Set border color
    color: "#FFF", // Set text color (optional)
    padding: "10px", // Add some padding (optional)
    borderRadius: "4px", // Round the corners (optional)
  };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [isVerifying, setIsVerifying] = useState(false);

  async function sendVerificationCode() {
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
      options: {
        data: { name: name },
      },
    });

    console.log(data, error);
    if (error) {
      showMessage("Error sending verification code:" + error, true);
      console.error(error);
    } else {
      showMessage("Verification code sent!", false);
      setIsVerifying(true);
    }
  }

  const onEnterInformation = () => {
    console.log(name);
    console.log(phoneNumber);
    if (name.length == 0 || phoneNumber.length == 0) {
      showMessage("Please enter your name and phone number.", true);
      return;
    }
    sendVerificationCode();
  };

  // Function to stop the click event from propagating to the parent elements
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: isOpen ? 1 : 0,
        zIndex: 10,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#222",
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 30,
          borderRadius: 5,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative", // For positioning the close button
          width: "80%", // Width in percentage
          maxWidth: "600px", // Maximum width limit
          margin: "auto", // Center the modal
        }}
        onClick={handleModalClick} // Prevents closing when clicking on the modal
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "none",
            cursor: "pointer",
            color: "#000",
          }}
        >
          <Close style={{ fontSize: 30, color: "#FFF" }} />
        </button>
        <h2
          style={{
            marginRight: 70,
            fontSize: isDesktop ? 40 : 30,
            fontWeight: 600,
            color: "#FFF",
          }}
        >
          Join Event
        </h2>
        <h3
          style={{
            fontSize: isDesktop ? 18 : 16,
            fontWeight: 300,
            marginTop: 30,
            marginBottom: 10,
            color: COLORS.secondaryText,
          }}
        >
          Name
        </h3>
        <input
          style={inputStyle}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jimmy Neutron"
        ></input>
        <h3
          style={{
            fontSize: isDesktop ? 18 : 16,
            fontWeight: 300,
            marginTop: 30,
            marginBottom: 10,
            color: COLORS.secondaryText,
          }}
        >
          Phone Number
        </h3>
        <PhoneInput
          placeholder="(123) 456-7890"
          country="US"
          defaultCountry="US"
          value={phoneNumber}
          onChange={setPhoneNumber}
          countries={["US", "CN", "IN", "CA"]}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically (optional, if you want it center vertically in the available space)
            marginTop: "40px", // Add some space above the button
          }}
        >
          <button
            onClick={onEnterInformation}
            style={{
              backgroundColor: COLORS.purple, // Assuming a black background from the image
              color: "#FFFFFF", // White text
              padding: "15px 30px", // Adjust padding to your preference
              fontSize: isDesktop ? 20 : 18, // Adjust font size to your preference
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
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
