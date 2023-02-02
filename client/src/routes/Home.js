import styles from "../styles/Home.module.css";
import century from "../images/centuryBattery.jpg";
import EnquiryForm from "../js/EnquiryForm";

function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.intro}>
        <h1>
          Great Deals on <br></br>Century Car Batteries
        </h1>
        <img src={century} alt="battery front view"></img>
      </div>
      <h3>Battery replacement services available</h3>
      <EnquiryForm />
    </div>
  );
}

export default Home;
