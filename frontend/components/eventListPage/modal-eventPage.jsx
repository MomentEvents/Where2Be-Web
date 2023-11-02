import React from "react";
import Fix from "../common/fix";

const ModalEventPage = ({ openModal, handleopenModal }) => {
  return (
    <>
      <Fix />
      <div
        onClick={handleopenModal}
        className={`offcanvas__overlay ${openModal ? "overlay-open" : ""}`}
      ></div>
      <div className="offcanvas__overlay-white"></div>
      <section className={`speaker__popup-area ${openModal ? "open" : ""}`}>
        <div className="popup__wrapper">
          <div className="popup__title-wrapper">
            <h3 className="popup__title">Add Event Speaker</h3>
          </div>
          <div className="popup__input-wrapper">
            <form action="#">
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Speaker Name</label>
                <input type="text" />
              </div>
              <div className="singel__input-field mb-15">
                <label className="input__field-text">Email</label>
                <input type="text" />
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
                <label className="input__field-text">Designation</label>
                <input type="text" />
              </div>
              <div className="popup__update mb-15">
                <label className="input__field-text">
                  Upload Image ( 200x200px )
                </label>
                <input type="file" />
              </div>
              <button
                onClick={handleopenModal}
                className="input__btn w-100"
                type="submit"
              >
                <i className="fa-regular fa-plus"></i>Add Speaker
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModalEventPage;
