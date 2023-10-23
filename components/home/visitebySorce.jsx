import React from "react";
import CardHeaderDropdown from "./cardheaderdropdown";
import PieChart from "../elementPage/pieChart";
import EarthIcon from "../../utils/SVG/earthIcon";

const VisitebySorce = () => {
  return (
    <>
      <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
        <div className="card__wrapper total__seat-wapper">
          <div className="card__header mb-35">
            <div className="card__header-top">
              <div className="card__title-inner">
                <div className="card__header-icon">
                  <EarthIcon />
                </div>
                <div className="card__header-title">
                  <h4>Visits by Source</h4>
                </div>
              </div>
              <div className="card__header-right">
                <CardHeaderDropdown />
              </div>
            </div>
          </div>
          <div className="total__seat-progress">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitebySorce;
