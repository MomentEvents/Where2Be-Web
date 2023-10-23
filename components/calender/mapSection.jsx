import React from "react";

const MapSection = () => {
  return (
    <div className="body__card-wrapper">
      <div className="map__wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233613.43676479085!2d90.43426044645838!3d23.811132204857916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1674730159777!5m2!1sen!2sbd"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
