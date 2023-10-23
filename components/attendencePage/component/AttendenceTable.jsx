import React from "react";
import CardHeaderDropdown from "../../home/cardheaderdropdown";
import Link from "next/link";

const AttendenceTable = ({ attendenceData }) => {
  return (
    <>
      {attendenceData.length > 0 &&
        attendenceData.map((item) => (
          <tr key={item.id}>
            <td>
              <div className="attendant__serial">
                <span> {item.IdNo} </span>
              </div>
            </td>
            <td>
              <div className="attendant__user-item">
                <div className="registration__user-thumb">
                  <img src={item.userImg.src} alt="image not found" />
                </div>
                <div className="attendant__user-title">
                  <span> {item.Name} </span>
                </div>
              </div>
            </td>
            <td>
              <div className="attendant__seminer">
                <span>
                  <Link href="/event-details">
                    <a> {item.eventDetails} </a>
                  </Link>
                </span>
              </div>
            </td>
            <td>
              <div className="attendant__time">
                <span>{item.SeminarTime}</span>
              </div>
            </td>
            <td>
              <div className="attendant__date">
                <span>{item.attendenceData}</span>
              </div>
            </td>
            <td>
              <div className="attendant__status">
                <span className={item.statusClass}>{item.status}</span>
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

export default AttendenceTable;
