import React, { useEffect, useState } from "react";
import styles from "../styles/Enquiry.module.css";

function TimeSlot() {
  const [dateArray, setDateArray] = useState([]);
  const [timeArray, setTimeArray] = useState([]);

  const currentDate = new Date();

  useEffect(() => {
    // Geting the date array ready
    let newArray = [];
    for (let i = 0; i < 14; i++) {
      const newDate = new Date();
      newDate.setDate(currentDate.getDate() + i);
      newArray.push(newDate);
    }

    setDateArray(newArray);

    newArray = [];

    // Getting the time array ready
    const timeHours = [
      "10",
      "11",
      "12",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
    ];
    const timeMinutes = ["00", "30"];
    let i = 0;
    let minuteStr = "";

    timeHours.forEach((hour) => {
      const amPm = i > 1 ? "PM" : "AM";

      for (let j = 0; j < 2; j++) {
        minuteStr = timeMinutes[j];

        const finalString = hour + ":" + minuteStr + " " + amPm;

        newArray.push(finalString);
      }

      i++;
    });

    setTimeArray(newArray);

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.request}>
      <label className={styles.sectionHeader}>
        Choose a time slot for pickup
      </label>

      <select className={styles.dropDown} id="pickupDate" required>
        {dateArray.map((date, key) => (
          <option key={key} value={date.toDateString()}>
            {date.toDateString().slice(0, -4)}
          </option>
        ))}
      </select>

      <select className={styles.dropDown} id="pickupTime" required>
        {timeArray.map((time, key) => (
          <option key={key} value={time}>
            {time}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimeSlot;
