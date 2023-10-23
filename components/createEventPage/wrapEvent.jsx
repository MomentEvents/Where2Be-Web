import React from "react";
import CardHeaderDropdown from "../../components/home/cardheaderdropdown";
import Link from "next/link";
const WrapCreateEvent = () => {
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
                          <Link href="/">
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
                          <input type="text" />
                        </div>
                        <div className="event__input mb-15">
                          <label className="input__field-text">
                            Event Details
                          </label>
                          <textarea placeholder=""></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="event__update-wrapper">
                      <span>Add Image</span>
                      <div className="event__update-file">
                        <div className="event__update-thumb">
                          <img
                            src="/assets/img/event/update/update-thumb-01.png"
                            alt="image not found"
                          />
                          <span className="update__thumb-close">
                            <i className="fa-regular fa-xmark"></i>
                          </span>
                        </div>
                        <div className="event__update-thumb">
                          <img
                            src="/assets/img/event/update/update-thumb-02.png"
                            alt="image not found"
                          />
                          <span className="update__thumb-close">
                            <i className="fa-regular fa-xmark"></i>
                          </span>
                        </div>
                        <div className="event__update-thumb">
                          <div className="box__input">
                            <input
                              type="file"
                              name="files[]"
                              id="file"
                              className="box__file"
                              data-multiple-caption="{count} files selected"
                              multiple
                            />
                            <label className="input__field-text" htmlFor="file">
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
                      </div>
                    </div>
                    <form action="#">
                      <div className="row g-20">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="singel__input-field is-color-change mb-15">
                            <label className="input__field-text">Date</label>
                            <input type="date" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="singel__input-field is-color-change  mb-15">
                            <label className="input__field-text">Time</label>
                            <input type="time" defaultValue="13:30" />
                          </div>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12">
                          <div className="singel__input-field mb-15">
                            <label className="input__field-text">
                              Venue / Address
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <label className="input__field-text">
                            Event Type
                          </label>
                          <div className="contact__select">
                            <select>
                              <option defaultValue="0">
                                Select the services
                              </option>
                              <option defaultValue="1">Free</option>
                              <option defaultValue="1">Paid</option>
                              <option defaultValue="3">Option</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="singel__input-field mb-15">
                            <label className="input__field-text">
                              Total Seat
                            </label>
                            <input type="number" defaultValue="1250" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className="singel__input-field">
                            <label className="input__field-text">
                              Ticket Price
                            </label>
                            <input type="text" defaultValue="$25.00" />
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <label className="input__field-text">
                            Event Status
                          </label>
                          <div className="contact__select">
                            <select>
                              <option defaultValue="0">Confirmed</option>
                              <option defaultValue="1">waiting</option>
                              <option defaultValue="1">confused</option>
                              <option defaultValue="3">Option</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="event__right-box">
                    <div className="create__input-wrapper">
                      <form action="#">
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">
                            Speaker Name
                          </label>
                          <input type="text" />
                        </div>
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">Email</label>
                          <input type="text" />
                        </div>
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">
                            Phone Number
                          </label>
                          <input type="text" />
                        </div>
                        <div className="singel__input-field mb-15">
                          <label className="input__field-text">
                            Designation
                          </label>
                          <input type="text" />
                        </div>
                        <div className="popup__update">
                          <label>Upload Image ( 200x200px )</label>
                          <input type="file" accept="image/*" />
                        </div>
                        <button
                          type="button"
                          className="unfield__input-btn w-100 mb-20"
                        >
                          <i className="fa-regular fa-plus"></i>Add More Speaker
                        </button>
                        <button className="input__btn w-100" type="submit">
                          Create Event
                        </button>
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
