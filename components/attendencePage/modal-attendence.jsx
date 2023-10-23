import React from "react";
import Fix from "../common/fix";

const ModalAttendence = ({ openModal, handleopenModal }) => {
  return (
    <>
      <Fix />
      <div
        onClick={handleopenModal}
        className={`offcanvas__overlay ${openModal ? "overlay-open" : ""}`}
      ></div>
      <div className="offcanvas__overlay-white"></div>
      <section className={`event__popup-area ${openModal ? "open" : ""}`}>
        <div className="popup__wrapper">
          <div className="popup__title-wrapper">
            <h3 className="popup__title">Add Event Attendant</h3>
          </div>
          <div className="popup__input-wrapper">
            <form action="#">
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Email</label>
                <input type="email" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Phone Number</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Organization Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Ticket ID No</label>
                <input type="text" />
              </div>
              <div className="popup__update">
                <label className="input__field-text">
                  Upload Image ( 200x200px )
                </label>
                <input type="file" name="img" accept="image/*" />
              </div>
              <button
                onClick={handleopenModal}
                className="input__btn w-100"
                type="submit"
              >
                <i className="fa-regular fa-plus"></i>Add Attendant
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalAttendence;
