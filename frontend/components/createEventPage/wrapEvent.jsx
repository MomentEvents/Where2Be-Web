import React, { useState, useRef } from "react";
import CardHeaderDropdown from "../../components/home/cardheaderdropdown";
import Link from "next/link";
import showMessage from "../errorMessage/showMessage";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const WrapCreateEvent = () => {
  const debug = true; // Debug to prefill fields if needed for easier event creation

  const [image, setImage] = useState(null);
  const [smsEnabled, setSmsEnabled] = useState(debug ? true : false);
  const [dateValue, setDateValue] = useState(debug ? "2021-05-01" : "");
  const [timeValue, setTimeValue] = useState(debug ? "12:00" : "");
  const [eventTitle, setEventTitle] = useState(debug ? "My event" : "");
  const [eventDetails, setEventDetails] = useState(debug ? "Come join my fun event!" : "");
  const [location, setLocation] = useState(debug ? "9500 Gilman Dr, La Jolla, CA 92093" : "");
  const [eventStatus, setEventStatus] = useState("Open");
  const [smsMessage, setSmsMessage] = useState(debug ? "Come to my event!" : "");
  const [smsMinutesBefore, setSmsMinutesBefore] = useState(debug ? "30" : "0");  

  const Router = useRouter();

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    fileInputRef.current.value = null; // Step 2: Reset file input after image upload
  };

  const handleDeleteImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form behavior

    // 1. Check for empty fields
    if (
      !eventTitle ||
      !eventDetails ||
      !dateValue ||
      !timeValue ||
      !location ||
      !eventStatus
    ) {
      showMessage("All fields must be filled out.", true);
      return;
    }

    if(smsEnabled && !smsMessage) {
      showMessage("SMS Message must be filled out.", true);
      return;
    }

    // 2. Validate image type
    if (image) {
      const fileType = image.split(";")[0].split("/")[1];
      if (!["jpeg", "jpg", "png", "gif"].includes(fileType)) {
        showMessage(
          "Please select a valid image format (JPEG, JPG, PNG, GIF).",
          true
        );
        return;
      }
    } else {
      showMessage("An image must be selected.", true);
      return;
    }

    // If all validations pass, create event and reroute
    const eventData = {
      title: eventTitle,
      description: eventDetails,
      start_date: dateValue,
      image: image,
      location: location,
      is_open: eventStatus === "Open",
      do_sms_reminder: smsEnabled,
      sms_reminder_minutes_before: parseInt(smsMinutesBefore),
      sms_reminder_message: smsMessage,
    };

    console.log(eventData)

    NProgress.start();

    fetch("/api/event/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
    .then((response) => {
      return response.json(); // Parse the JSON of the response
    })
    .then((data) => {
      NProgress.done();
      if (data.error) {
        showMessage(data.error, true);
      } else {
        showMessage("Event created successfully!", false);
        console.log(data)
        Router.push(`/event/${data.event_data.event_id}`)
      }
    })
    .catch((error) => {
      // Handle network error, json parsing error, or manual error thrown from response status
      console.error(error);
      showMessage("Failed to create event. Error: " + error.message, true);
      NProgress.done();
    });
  };

  return (
    <>
      <div className="body__overlay"></div>
      <div className="app__slide-wrapper">
        <div className="breadcrumb__area">
          <div className="breadcrumb__wrapper mb-35">
            <div className="breadcrumb__main">
              <div className="breadcrumb__inner">
                <div className="breadcrumb__icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <Link legacyBehavior href="/">
                            <a>Home</a>
                          </Link>
                        </span>
                      </li>
                      <li className="active">
                        <span>Create Event</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start full page content */}

        <div className="row">
          <div className="col-xxl-12">
            <div className="create__event-area">
              <form onSubmit={handleSubmit}>
                <div className="body__card-wrapper">
                  <div className="card__header-top">
                    <div className="card__title-inner">
                      <h4 className="event__information-title">
                        Event Information
                      </h4>
                    </div>
                    {/* card header top componet  */}
                  </div>

                  {/* create event form  */}

                  <div className="create__event-main pt-25">
                    <div className="event__left-box">
                      <div className="create__input-wrapper">
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">
                            Event Title
                          </label>
                          <input
                            type="text"
                            placeholder="My event"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                          />
                        </div>
                        <div className="event__input mb-15">
                          <label className="input__field-text">
                            Event Details
                          </label>
                          <textarea
                            placeholder="Come join my fun event!"
                            value={eventDetails}
                            onChange={(e) => setEventDetails(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="event__update-wrapper">
                        <span>Add Image (select 1)</span>
                        <div className="event__update-file">
                          {image && (
                            <div className="event__update-thumb">
                              <img src={image} alt="Uploaded preview" />
                              <span
                                className="update__thumb-close"
                                onClick={handleDeleteImage}
                              >
                                <i className="fa-regular fa-xmark"></i>
                              </span>
                            </div>
                          )}
                          {!image && (
                            <div className="event__update-thumb">
                              <div className="box__input">
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  name="file"
                                  id="file"
                                  className="box__file"
                                  onChange={handleImageUpload}
                                  accept=".jpg, .jpeg, .png, .gif"
                                />
                                <label
                                  className="input__field-text"
                                  htmlFor="file"
                                >
                                  <span>
                                    <i className="fa-regular fa-plus"></i>
                                  </span>
                                  <span>Add Image</span>
                                </label>
                                <button
                                  type="submit"
                                  className="box__button"
                                ></button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row g-20">
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                          <div className="singel__input-field is-color-change mb-15">
                            <label className="input__field-text">Date</label>
                            <input
                              type="date"
                              value={dateValue}
                              onChange={(e) => setDateValue(e.target.value)}
                              className={dateValue ? "has-value" : ""}
                            />
                          </div>

                          <div className="singel__input-field is-color-change mb-15">
                            <label className="input__field-text">Time</label>
                            <input
                              type="time"
                              value={timeValue}
                              onChange={(e) => setTimeValue(e.target.value)}
                              className={timeValue ? "has-value" : ""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="event__right-box">
                      <div className="create__input-wrapper">
                        <div className="row g-20">
                          <div className="singel__input-field mb-15">
                            <label className="input__field-text">
                              Location
                            </label>
                            <input
                              type="text"
                              placeholder="9500 Gilman Dr, La Jolla, CA 92093"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                            <label className="input__field-text">
                              Event Status
                            </label>
                            <div className="contact__select">
                              <select
                                value={eventStatus}
                                onChange={(e) => setEventStatus(e.target.value)}
                              >
                                <option defaultValue="0">Open</option>
                                <option defaultValue="1">Closed</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                            <label className="input__field-text">
                              SMS Reminder
                            </label>
                            <div className="contact__select">
                              <select
                                onChange={(e) => {
                                  setSmsEnabled(e.target.value !== "0");
                                  setSmsMinutesBefore(e.target.value);
                                }}
                              >
                                <option defaultValue="0">No</option>
                                <option defaultValue="30">
                                  30 minutes before
                                </option>
                                <option defaultValue="60">1 hour before</option>
                                <option defaultValue="120">2 hours before</option>
                                <option defaultValue="180">3 hours before</option>
                                <option defaultValue="240">4 hours before</option>
                                <option defaultValue="720">
                                  12 hours before
                                </option>
                                <option defaultValue="1440">1 day before</option>
                              </select>
                            </div>
                          </div>

                          {smsEnabled && (
                            <div className="event__input">
                              <label className="input__field-text">
                                SMS Message
                              </label>
                              <textarea
                                disabled={!smsEnabled}
                                maxLength={160}
                                placeholder="Come to my event!"
                                value={smsMessage}
                                onChange={(e) => setSmsMessage(e.target.value)}
                              ></textarea>
                            </div>
                          )}
                          <div className="mb-80"></div>
                          <button className="input__btn w-100" type="submit">
                            Create Event
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapCreateEvent;
