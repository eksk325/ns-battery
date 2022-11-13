import { useState } from "react";
import styles from "../styles/Enquiry.module.css";

import ImageUpload from "./ImageUpload";

function EnquiryForm() {
  const selectYes = function () {
    document.getElementById("idleText").value = "있음 (유)";
  };

  const selectNo = function () {
    document.getElementById("idleText").value = "없음 (무)";
  };

  return (
    <div className={styles.request}>
      <form
        className={styles.enquiryForm}
        encType="multipart/form-data"
        method="post"
        action="send-form"
      >
        <div className={styles.personal}>
          <label className={styles.sectionHeader}>Personal Details</label>
          <input
            type="text"
            placeholder="Name"
            spellCheck="false"
            id="customerName"
            name="name"
            required
            defaultValue="1"
          ></input>
          <input
            type="email"
            placeholder="Email"
            spellCheck="false"
            id="customerEmail"
            name="email"
            required
            defaultValue="lol@gmail.com"
          ></input>
          <input
            type="tel"
            placeholder="Phone number"
            spellCheck="false"
            id="customerPhone"
            name="phoneNum"
            required
            defaultValue="1"
          ></input>
        </div>

        <div className={styles.car}>
          <label className={styles.sectionHeader}>Car Details</label>
          <input
            type="text"
            placeholder="Car make"
            spellCheck="false"
            id="carMake"
            name="carMake"
            required
            defaultValue="1"
          ></input>
          <input
            type="text"
            placeholder="Car model"
            spellCheck="false"
            id="carModel"
            name="carModel"
            required
            defaultValue="1"
          ></input>
          <input
            type="number"
            placeholder="Car year"
            spellCheck="false"
            id="carYear"
            name="carYear"
            required
            defaultValue="1"
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
            <input
              type="radio"
              name="idle"
              value={"yes"}
              id="yes"
              required
              onChange={selectYes}
            />
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
            <input
              type="radio"
              name="idle"
              value={"no"}
              id="no"
              required
              onChange={selectNo}
            />
          </div>
        </div>
        <input
          type="text"
          style={{
            visibility: "hidden",
            padding: "0 0",
            margin: "0 0",
            height: "0",
          }}
          id="idleText"
          name="idleText"
        />

        <label className={styles.sectionHeader}>Battery Dimensions (mm)</label>
        <div className={styles.battery}>
          <input
            type="number"
            placeholder="Length"
            spellCheck="false"
            id="length"
            name="length"
            required
            defaultValue="1"
          ></input>
          <input
            type="number"
            placeholder="Width"
            spellCheck="false"
            id="width"
            name="width"
            required
            defaultValue="1"
          ></input>
          <input
            type="number"
            placeholder="Height"
            spellCheck="false"
            id="height"
            name="height"
            required
            defaultValue="1"
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
