import { useState } from "react";
import styles from "../styles/Enquiry.module.css";

import ImageUpload from "./ImageUpload";

function EnquiryForm() {
  // If the user hasn't selected anything, then -1.
  // If the user knows their model name then 1, if not then 0.
  const [knowModel, setKnowModel] = useState(-1);

  const selectYes = function () {
    document.getElementById("idleText").value = "있음 (유)";
  };

  const selectNo = function () {
    document.getElementById("idleText").value = "없음 (무)";
  };

  const modelYes = function () {
    setKnowModel(1);
  };

  const modelNo = function () {
    setKnowModel(0);
  };

  // Display information to the user when they submit
  const displayInfo = function () {
    let formData = {
      name: document.getElementById("customerName").value,
      email: document.getElementById("customerEmail").value,
      phoneNum: document.getElementById("customerPhone").value,
      carMake: document.getElementById("carMake").value,
      carModel: document.getElementById("carModel").value,
      carYear: document.getElementById("carYear").value,
      idle: `${document.getElementById("yes").checked ? "yes" : "no"}`,
      length: document.getElementById("length").value,
      width: document.getElementById("width").value,
      height: document.getElementById("height").value,
    };

    sessionStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div className={styles.request}>
      <form
        className={styles.enquiryForm}
        encType="multipart/form-data"
        method="post"
        action="send-form"
        onSubmit={displayInfo}
        id="enquiryForm"
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
          ></input>
          <input
            type="email"
            placeholder="Email"
            spellCheck="false"
            id="customerEmail"
            name="email"
            required
          ></input>
          <input
            type="tel"
            placeholder="Phone number"
            spellCheck="false"
            id="customerPhone"
            name="phoneNum"
            required
          ></input>
        </div>

        <label className={styles.sectionHeader}>
          Do you know the model name of your battery?
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
              name="model"
              value={"yes"}
              id="yes"
              required
              onChange={modelYes}
            ></input>
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
              name="model"
              value={"no"}
              id="no"
              required
              onChange={modelNo}
            ></input>
          </div>
        </div>

        {knowModel === 0 ? (
          <div className={styles.request}>
            <div className={styles.car}>
              <label className={styles.sectionHeader}>Car Details</label>
              <input
                type="text"
                placeholder="Car make"
                spellCheck="false"
                id="carMake"
                name="carMake"
                required
              ></input>
              <input
                type="text"
                placeholder="Car model"
                spellCheck="false"
                id="carModel"
                name="carModel"
                required
              ></input>
              <input
                type="number"
                placeholder="Car year"
                spellCheck="false"
                id="carYear"
                name="carYear"
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

            <label className={styles.sectionHeader}>
              Battery Dimensions (mm)
            </label>
            <div className={styles.battery}>
              <input
                type="number"
                placeholder="Length"
                spellCheck="false"
                id="length"
                name="length"
                required
              ></input>
              <input
                type="number"
                placeholder="Width"
                spellCheck="false"
                id="width"
                name="width"
                required
              ></input>
              <input
                type="number"
                placeholder="Height"
                spellCheck="false"
                id="height"
                name="height"
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
                <label className={styles.sectionHeader}>
                  Battery Photo (optional)
                </label>
              </div>
              <ImageUpload />
            </div>
          </div>
        ) : (
          <div>
            {knowModel === 1 ? (
              <div>
                <label className={styles.sectionHeader}>Model Name</label>
                <input
                  type="text"
                  placeholder="e.g. NS60LMF"
                  spellCheck="false"
                  id="modelName"
                  name="modelName"
                  required
                ></input>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}

        <button className={styles.sendButton} type="submit">
          Send Request
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
