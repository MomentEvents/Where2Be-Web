import React from "react";
import CardHeaderDropdown from "../../home/cardheaderdropdown";
import Link from "next/link";
import supabase from "../../../lib/supabase";

/**
 * AttendenceTable component.
 *
 * @param {Object} props - Props for AttendenceTable
 * @param {Array} props.attendenceData - Array of attendence data objects.
 * @param {string} props.attendenceData[].user - the user
 * @param {string} props.attendenceData[].user.user_id - user id of the user
 * @param {string} props.attendenceData[].user.picture - user picture directory in user-pictures bucket
 * @param {string} props.attendenceData[].user.name - the name of the user
 * @param {string} props.attendenceData[].user.signed_up - the date which the user signed up
 * @param {string} props.attendenceData[].event - the event
 * @param {string} props.attendenceData[].event.event_id - the event id of the event
 * @param {string} props.attendenceData[].event.title - the title of the event
 * @param {string} props.attendenceData[].event.start_date - the start date of the event
 * @param {string} props.attendenceData[].event.image - the image path of the image in event-pictures bucket
 */
const AttendenceTable = ({ attendenceData }) => {
  const getUserImageURL = (user) => {
    const { data } = supabase.storage
      .from("user-pictures")
      .getPublicUrl(user.picture);
    return data.publicUrl;
  };

  const getEventImageURL = (event) => {
    const { data } = supabase.storage
      .from("event-pictures")
      .getPublicUrl(event.image);
    return data.publicUrl;
  };
  return (
    <>
      {attendenceData.length > 0 &&
        attendenceData.map((item) => (
          <tr key={item.id}>
            {/* <td>
              <div className="attendant__serial">
                <span> {item.IdNo} </span>
              </div>
            </td> */}
            <td>
              <div className="attendant__user-item">
                <div className="registration__user-thumb">
                  <img src={getUserImageURL(item.user)} alt="image not found" />
                </div>
                <div className="attendant__user-title">
                  <span> {item.user.name} </span>
                </div>
              </div>
            </td>
            <td>
              <div className="attendant__seminer">
                <span>
                  <Link
                    legacyBehavior
                    href={"/event-details/" + item.event.event_id}
                  >
                    <a> {item.event.title} </a>
                  </Link>
                </span>
              </div>
            </td>
            {/* <td>
              <div className="attendant__time">
                <span>{item.SeminarTime}</span>
              </div>
            </td> */}
            <td>
              <div className="attendant__date">
                <span>
                  {new Date(item.user.signed_up).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) +
                    " " +
                    new Date(item.user.signed_up).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </span>
              </div>
            </td>
            <td>
              <div className="attendant__status">
                <span className="status__tag bg-green">Signed up</span>
              </div>
            </td>
            {/* <td>
              <div className="attendant__action">
                 
              </div>
            </td> */}
          </tr>
        ))}
    </>
  );
};

export default AttendenceTable;
