import React, { useContext, useEffect, useRef, useState } from "react";
import { Close } from "@mui/icons-material";
import { COLORS } from "../../constants/colors";
import showMessage from "../errorMessage/showMessage";
import supabase from "../../lib/supabase";

import PhoneInput from "react-phone-number-input";
import { AppContext } from "../../context/AppContext";
import DEBUG from "../../constants/debug";
import { setSupabaseCookies } from "../../lib/cookies";
import NProgress from "nprogress";
import { last } from "lodash";

export default function JoinModal({
  isOpen,
  onClose,
  isDesktop,
  eventID,
  signedUp,
  setSignedUp,
}) {
  const inputStyle = {
    width: "100%",
    backgroundColor: "#121212", // Set background color
    border: "1px solid #232323", // Set border color
    color: "#FFF", // Set text color (optional)
    padding: "10px", // Add some padding (optional)
    borderRadius: "4px", // Round the corners (optional)
  };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<any>(
    DEBUG.disableSMS ? "19498877545" : ""
  );

  const { showLoading, hideLoading } = useContext(AppContext);

  const [isVerifying, setIsVerifying] = useState(false);

  const [verificationCode, setVerificationCode] = useState("");

  const lockRef = useRef(false);
  const lastSentCodeDateRef = useRef<Date>();
  const resentCodeSecondsLimit = 40;

  const onVerifyCode = async () => {
    if (verificationCode.length == 0) {
      showMessage("Please enter a verification code.", true);
      return;
    }

    if (lockRef.current) return;
    showLoading();
    lockRef.current = true;

    console.log("VERIFYING CODE");

    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: verificationCode,
      type: "sms",
    });

    if (error) {
      showMessage("Error verifying code: " + error, true);
      console.error(error);
      hideLoading();
      lockRef.current = false;
      return;
    }

    setSupabaseCookies(session.access_token, session.refresh_token);

    // Add user to event

    NProgress.start();

    try {
      const response = await fetch(`/api/event/join/${eventID}`, {
        method: "PUT",
      });
      console.log(response + " HAS BEEN RETURNED");
      const responseJSON = await response.json();
      console.log(responseJSON);
      if (responseJSON.error) {
        showMessage("Failed to join event. Error: " + responseJSON.error, true);
        hideLoading();
        lockRef.current = false;
        NProgress.done();
        return;
      } else {
        showMessage(responseJSON.message, false);
        hideLoading();
        lockRef.current = false;
        NProgress.done();

        setIsVerifying(false);
        setVerificationCode("");
        setName("");
        setPhoneNumber("");
        setSignedUp(true);
        onClose();
      }
    } catch (error) {
      console.error(error);
      showMessage("Failed to join event. Error: " + error.message, true);
      hideLoading();
      lockRef.current = false;
      NProgress.done();
    }
  };

  async function sendVerificationCode() {
    if (
      lastSentCodeDateRef.current &&
      lastSentCodeDateRef.current.getTime() + resentCodeSecondsLimit * 1000 >
        new Date().getTime()
    ) {
      showMessage(
        "Please wait " +
          Math.ceil(
            (lastSentCodeDateRef.current.getTime() +
              resentCodeSecondsLimit * 1000 -
              new Date().getTime()) /
              1000
          ) +
          " seconds before sending a code again",
        true
      );
      return;
    }

    if (lockRef.current) return;
    showLoading();
    lockRef.current = true;

    if (!DEBUG.disableSMS) {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber,
        options: {
          data: { name: name.trim() },
        },
      });

      console.log(data, error);
      if (error) {
        hideLoading();
        lockRef.current = false;
        showMessage("Error sending verification code:" + error, true);
        console.error(error);
        return;
      }
    }
    hideLoading();
    lockRef.current = false;
    showMessage("Verification code sent!", false);
    lastSentCodeDateRef.current = new Date();
    setIsVerifying(true);
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

  if (!isOpen) return null;

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
            marginBottom: signedUp ? 10 : 30,
          }}
        >
          Join Event
        </h2>
        {signedUp && !isVerifying && (
          <h2
            style={{
              fontSize: isDesktop ? 18 : 16,
              fontWeight: 300,
              marginBottom: 20,
              color: COLORS.secondaryText,
            }}
          >
            You already signed up, but you can add another attendee.
          </h2>
        )}
        {!isVerifying ? (
          <div>
            <h3
              style={{
                fontSize: isDesktop ? 18 : 16,
                fontWeight: 300,
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
        ) : (
          <div>
            <h3
              style={{
                fontSize: isDesktop ? 18 : 16,
                fontWeight: 400,
                marginBottom: 10,
                color: COLORS.secondaryText,
              }}
            >
              A verification code has been sent to {phoneNumber}
            </h3>
            <input
              style={inputStyle}
              maxLength={10}
              value={verificationCode}
              onChange={(e) => {
                const val = e.target.value;
                // Allow only numeric input
                if (/^[0-9]*$/.test(val)) {
                  setVerificationCode(val.trim());
                }
              }}
              placeholder="Type your code here"
              type="tel"
            ></input>
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                flexWrap: "wrap", // Enable wrapping
                gap: "22px", // Space between buttons
                marginTop: "40px", // Add some space above the buttons
              }}
            >
              <button
                onClick={sendVerificationCode}
                style={{
                  backgroundColor: "#FFF", // Assuming a black background from the image
                  color: "#000", // White text
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
                  transition: "all 0.3s ease", // Smooth transition for hover effectsß
                }}
              >
                Resend Code
              </button>
              <button
                onClick={onVerifyCode}
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
                Join Event
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
