import React from "react";
import CardHeaderDropdown from "../home/cardheaderdropdown";
import Link from "next/link";

const SingleTableData = ({ envetList }) => {
  return (
    <>
      {envetList.length > 0 &&
        envetList.map((data, index) => (
          <tr key={index}>
            <td>
              <div className="attendant__serial">
                <span>{data.idNo}</span>
              </div>
            </td>
            <td>
              <div className="attendant__seminer">
                <span>
                  <Link legacyBehavior href="/event-details">
                    <a>{data.envetName}</a>
                  </Link>
                </span>
              </div>
            </td>
            <td>
              <div className="attendant__speakers">
                <div className="attendant__speakers-thumb">
                  <img src="/assets/img/meta/01.png" alt="image not found" />
                  <img src="/assets/img/meta/02.png" alt="image not found" />
                  <img src="/assets/img/meta/03.png" alt="image not found" />
                  <img src="/assets/img/meta/04.png" alt="image not found" />
                  <div className="attendant__count-inner">
                    <span className="attendant__meta-count">02+</span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="attendant__time">
                <span>{data.time}</span>
              </div>
            </td>
            <td>
              <div className="attendant__date">
                <span>{data.date}</span>
              </div>
            </td>
            <td>
              <div className="attendant__location">
                <span>{data.location}</span>
              </div>
            </td>
            <td>
              <div className="attendant__action">
                 
              </div>
            </td>
          </tr>
        ))}
    </>
  );
};

export default SingleTableData;
