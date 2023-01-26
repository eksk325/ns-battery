import React from "react";
import star from "../images/star.png";
import styles from "../styles/Reviews.module.css";

function Stars({ numStars }) {
  return (
    <div
      style={{
        display: "flex",
        width: "200px",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <img src={star} className={styles.star}></img>
      <img src={star} className={styles.star}></img>
      <img src={star} className={styles.star}></img>
      <img src={star} className={styles.star}></img>
      <img src={star} className={styles.star}></img>
    </div>
  );
}

export default Stars;
