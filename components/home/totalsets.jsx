import React from "react";
import CardHeaderDropdown from "./cardheaderdropdown";
import RadialBarChart from "./radialbox";

const ToalSeats = () => {
  return (
    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
      <div className="card__wrapper total__seat-wapper">
        <div className="card__header mb-35">
          <div className="card__header-top">
            <div className="card__title-inner">
              <div className="card__header-icon">
                <i className="flaticon-chair-2"></i>
              </div>
              <div className="card__header-title">
                <h4>Total Seats</h4>
              </div>
            </div>
            <div className="card__header-right">
              <CardHeaderDropdown />
            </div>
          </div>
        </div>
        <div className="total__seat-progress">
          <RadialBarChart />
          <div className="redialchart__content">
            <div className="redialchart__info">
              <span>Total Seats</span>
              <h4>$5500.00</h4>
            </div>
            <div className="redialchart__info">
              <span>Sold Seats</span>
              <h4>$4500.00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToalSeats;
