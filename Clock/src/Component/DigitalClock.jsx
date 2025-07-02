import { useEffect } from "react";
import { useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervaliId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervaliId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${meridiem}`;
  }

  function formatDate() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = time.getDay();
    let dayName = days[day];
    let month = time.getMonth();
    let date = time.getDate();
    const year = time.getFullYear();
    return `${dayName} ${padZero(date)}-${padZero(month)}-${year}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
        <br />
      </div>
      <span className="date-info">{formatDate()}</span>
    </div>
  );
}

export default DigitalClock;
