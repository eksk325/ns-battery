import { useEffect } from "react";
import styles from "../styles/Enquiry.module.css";

import ImageUpload from "./ImageUpload";

function EnquiryForm() {
  document.addEventListener("submit", function (e) {
    const name = document.getElementById("customerName");
    const email = document.getElementById("customerEmail");
    const phoneNum = document.getElementById("customerPhone");

    const carMake = document.getElementById("carMake");
    const carModel = document.getElementById("carModel");
    const carYear = document.getElementById("carYear");

    const idle = document.getElementsByName("idle")[0];

    const length = document.getElementById("length");
    const width = document.getElementById("width");
    const height = document.getElementById("height");

    let formData = {
      name: name.value,
      email: email.value,
      phoneNum: phoneNum.value,
      carMake: carMake.value,
      carModel: carModel.value,
      carYear: carYear.value,
      idle: idle.checked,
      dimensions: [length.value, width.value, height.value],
    };

    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      console.log(xhr.responseText);

      if (xhr.responseText == "success") {
        alert("Email sent");
      } else {
        alert("Something went wrong...");
      }
    };

    xhr.send(JSON.stringify(formData));
  });

  return (
    <div className={styles.request}>
      <form className={styles.enquiryForm}>
        <div className={styles.personal}>
          <label className={styles.sectionHeader}>Personal Details</label>
          <input
            type="text"
            placeholder="Name"
            spellCheck="false"
            id="customerName"
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            spellCheck="false"
            id="customerEmail"
            required
          ></input>
          <input
            type="tel"
            placeholder="Phone number"
            spellCheck="false"
            id="customerPhone"
            required
          ></input>
        </div>

        <div className={styles.car}>
          <label className={styles.sectionHeader}>Car Details</label>
          <input
            type="text"
            placeholder="Car make"
            spellCheck="false"
            id="carMake"
            required
          ></input>
          <input
            type="text"
            placeholder="Car model"
            spellCheck="false"
            id="carModel"
            required
          ></input>
          <input
            type="number"
            placeholder="Car year"
            spellCheck="false"
            id="carYear"
            required
          ></input>
        </div>

        <label className={styles.sectionHeader}>
          Does your car have idle start-stop?
        </label>
        <div className={styles.idleBox}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
            }}
          >
            <label style={{ fontSize: "16px" }}>Yes</label>
            <input type="radio" name="idle" value={"yes"} id="yes" required />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
            }}
          >
            <label style={{ fontSize: "16px" }}>No</label>
            <input type="radio" name="idle" value={"no"} id="no" required />
          </div>
        </div>

        <label className={styles.sectionHeader}>Battery Dimensions (mm)</label>
        <div className={styles.battery}>
          <input
            type="number"
            placeholder="Length"
            spellCheck="false"
            id="length"
            required
          ></input>
          <input
            type="number"
            placeholder="Width"
            spellCheck="false"
            id="width"
            required
          ></input>
          <input
            type="number"
            placeholder="Height"
            spellCheck="false"
            id="height"
            required
          ></input>
        </div>
        <div className={styles.batteryImage}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <label className={styles.sectionHeader}>Battery Photo</label>
          </div>
          <ImageUpload />
        </div>
        <button className={styles.sendButton} type="submit">
          Send Request
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
