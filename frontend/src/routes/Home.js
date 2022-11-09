import Header from "../js/Header";
import styles from "../styles/Home.module.css";
import century from "../images/centuryBattery.jpg";
import { useNavigate } from "react-router-dom";
import EnquiryForm from "../js/EnquiryForm";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.intro}>
        <h1>
          Great Deals on <br></br>Century Car Batteries
        </h1>
        <img src={century}></img>
      </div>
      <h3>Battery replacement services available</h3>
      <EnquiryForm />

      <div className={styles.best}>
        <label>Best Sellers</label>
        <ul className={styles.productGrid}>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
        <ul className={styles.productGrid}>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
