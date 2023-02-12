import React from "react";
import styles from "../styles/Faq.module.css";

function Qna({ question, answer, code }) {
  const toggleHeight = function () {
    const e = document.getElementById(code);

    if (e.style.maxHeight === "0px") {
      e.style.maxHeight = "250px";
      console.log(e.textContent.length);
    } else {
      e.style.maxHeight = "0px";
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <hr style={{ width: "100%", marginTop: "20px" }}></hr>
        <div className={styles.question} onClick={toggleHeight}>
          <button className={styles.openButton}>+</button>
          <label>{question}</label>
        </div>
        <div className={styles.answer} id={code} style={{ maxHeight: "0px" }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Qna;
