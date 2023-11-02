import React, { useState, useRef } from "react";
import CardHeaderDropdown from "../../components/home/cardheaderdropdown";
import Link from "next/link";
const WrapCreateEvent = () => {
  const [image, setImage] = useState(null);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

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
                      <form action="#">
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">
                            Event Title
                          </label>
                          <input type="text" placeholder="My event" />
                        </div>
                        <div className="event__input mb-15">
                          <label className="input__field-text">
                            Event Details
                          </label>
                          <textarea placeholder="Come join my fun event!"></textarea>
                        </div>
                      </form>
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
                    <form action="#">
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
                    </form>
                  </div>
                  <div className="event__right-box">
                    <div className="create__input-wrapper">
                      <form action="#">
                        <div className="row g-20">
                        <div className="singel__input-field mb-15">
                            <label className="input__field-text">
                              Location
                            </label>
                            <input type="text" placeholder="9500 Gilman Dr, La Jolla, CA 92093" />
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
                            <label className="input__field-text">
                              Event Status
                            </label>
                            <div className="contact__select">
                              <select>
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
                                onChange={(e) =>
                                  setSmsEnabled(e.target.value !== "No")
                                }
                              >
                                <option defaultValue="No">No</option>
                                <option defaultValue="0">
                                  30 minutes before
                                </option>
                                <option defaultValue="1">1 hour before</option>
                                <option defaultValue="2">2 hours before</option>
                                <option defaultValue="3">3 hours before</option>
                                <option defaultValue="3">4 hours before</option>
                                <option defaultValue="3">
                                  12 hours before
                                </option>
                                <option defaultValue="3">1 day before</option>
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
                              ></textarea>
                            </div>
                          )}
                          <div className="mb-80"></div>
                          <button className="input__btn w-100" type="submit">
                            Create Event
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapCreateEvent;
