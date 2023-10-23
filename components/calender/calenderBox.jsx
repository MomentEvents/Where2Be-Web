import React, { useState,useEffect } from 'react';
import CardHeaderDropdown from '../home/cardheaderdropdown';

const CalendarComponent = () => {
   const [currentDate, setCurrentDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(currentDate.getFullYear());
  const [currMonth, setCurrMonth] = useState(currentDate.getMonth());
  const [calendarDays, setCalendarDays] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
   const newCurrYear = currYear;
   const newCurrMonth = currMonth;
 
   const firstDayOfMonth = new Date(newCurrYear, newCurrMonth, 1).getDay();
   const lastDateOfMonth = new Date(newCurrYear, newCurrMonth + 1, 0).getDate();
   const lastDayOfMonth = new Date(newCurrYear, newCurrMonth, lastDateOfMonth).getDay();
   const lastDateOfLastMonth = new Date(newCurrYear, newCurrMonth, 0).getDate();
 
   const updatedCalendarDays = [];
 
   for (let i = firstDayOfMonth; i > 0; i--) {
     updatedCalendarDays.push(
       <li key={`prev-${i}`} className="inactive">
         {lastDateOfLastMonth - i + 1}
       </li>
     );
   }
 
   for (let i = 1; i <= lastDateOfMonth; i++) {
     const isToday =
       i === currentDate.getDate() &&
       newCurrMonth === currentDate.getMonth() &&
       newCurrYear === currentDate.getFullYear();
 
     updatedCalendarDays.push(
       <li key={`curr-${i}`} className={isToday ? 'active' : ''}>
         {i}
       </li>
     );
   }
 
   for (let i = lastDayOfMonth; i < 6; i++) {
     updatedCalendarDays.push(
       <li key={`next-${i}`} className="inactive">
         {i - lastDayOfMonth + 1}
       </li>
     );
   }
 
   setCalendarDays(updatedCalendarDays);
 };
 
 
 
  const renderedCalendarDays = () => {
    
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    const updatedCalendarDays = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      updatedCalendarDays.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currMonth === currentDate.getMonth() &&
        currYear === currentDate.getFullYear();

      updatedCalendarDays.push(
        <li key={`curr-${i}`} className={isToday ? 'active' : ''}>
          {i}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      updatedCalendarDays.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>
      );
    }

    return updatedCalendarDays;
  };

  const handlePrevNextClick = (increment) => {
    const newMonth = currMonth + increment;
    if (newMonth < 0) {
      setCurrYear(currYear - 1);
      setCurrMonth(11); // December
    } else if (newMonth > 11) {
      setCurrYear(currYear + 1);
      setCurrMonth(0); // January
    } else {
      setCurrMonth(newMonth);
    }
  };

  useEffect(() => {
    renderCalendar();
  }, [currYear, currMonth]);

  return (
    <div className="calender__area mb-20">
      <div className="body__card-wrapper">
        <div className="card__header-top bb-0 pb-0">
          <div className="card__title-inner">
            <h4 className="event__information-title">Event Calendar</h4>
          </div>
          <CardHeaderDropdown />
          <div className="calendar__wrapper">
          
          <div className="calendar__header p-relative">
            <div className="calendar__month">
              <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
              <p className="current-date"></p>
            </div>
            <div className="calendar__navigation">
              <span id="prev" onClick={() => handlePrevNextClick(-1)} className="calendar__button prev">
                <i className="fa-regular fa-arrow-left"></i>
              </span>
              <span id="next" onClick={() => handlePrevNextClick(1)} className="calendar__button next">
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="calendar">
            <ul className="weeks">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul className="days">{renderedCalendarDays()}</ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
