import styles from "../styles/Enquiry.module.css";

import ImageUpload from "./ImageUpload";

function EnquiryForm() {
  return (
    <div className={styles.request}>
      <form className={styles.enquiryForm}>
        <div className={styles.personal}>
          <label className={styles.sectionHeader}>Personal Details</label>
          <input
            type="text"
            placeholder="Name"
            spellCheck="false"
            name="customerName"
            required
          ></input>
          <input
            type="email"
            placeholder="Email"
            spellCheck="false"
            name="customerEmail"
            required
          ></input>
          <input
            type="tel"
            placeholder="Phone number"
            spellCheck="false"
            name="customerPhone"
            required
          ></input>
        </div>

        <div className={styles.car}>
          <label className={styles.sectionHeader}>Car Details</label>
          <input
            type="text"
            placeholder="Car make"
            spellCheck="false"
            name="carBrand"
            required
          ></input>
          <input
            type="text"
            placeholder="Car model"
            spellCheck="false"
            name="carModel"
            required
          ></input>
          <input
            type="text"
            placeholder="Car year"
            spellCheck="false"
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
            <label htmlFor="yes" style={{ fontSize: "16px" }}>
              Yes
            </label>
            <input type="radio" name="idle" value={"yes"} id="yes" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "40%",
            }}
          >
            <label htmlFor="no" style={{ fontSize: "16px" }}>
              No
            </label>
            <input type="radio" name="idle" value={"no"} id="no" />
          </div>
        </div>

        <label className={styles.sectionHeader}>Battery Dimensions (mm)</label>
        <div className={styles.battery}>
          <input
            type="number"
            placeholder="Length"
            spellCheck="false"
            name="carBrand"
            required
          ></input>
          <input
            type="number"
            placeholder="Width"
            spellCheck="false"
            name="carModel"
            required
          ></input>
          <input
            type="number"
            placeholder="Height"
            spellCheck="false"
            name="carYear"
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
      </form>

      <button className={styles.sendButton}>Send Request</button>
    </div>
  );
}

export default EnquiryForm;
