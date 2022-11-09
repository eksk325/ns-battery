import styles from "../styles/Contact.module.css";
import map from "../images/map.png";

function ContactUs() {
  const date = new Date();
  const dayIndex = date.getDay();

  return (
    <div>
      <div className={styles.title}>
        <h1>Contact us</h1>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.container}>
        <div className={styles.open}>
          <h3>Open hours</h3>
          <br />
          <div className={styles.hours}>
            <div className={styles.days}>
              <span style={{ fontWeight: dayIndex == 1 ? "bold" : "normal" }}>
                Monday
              </span>
              <span style={{ fontWeight: dayIndex == 2 ? "bold" : "normal" }}>
                Tuesday
              </span>
              <span style={{ fontWeight: dayIndex == 3 ? "bold" : "normal" }}>
                Wednesday
              </span>
              <span style={{ fontWeight: dayIndex == 4 ? "bold" : "normal" }}>
                Thursday
              </span>
              <span style={{ fontWeight: dayIndex == 5 ? "bold" : "normal" }}>
                Friday
              </span>
              <span style={{ fontWeight: dayIndex == 6 ? "bold" : "normal" }}>
                Saturday
              </span>
              <span style={{ fontWeight: dayIndex == 0 ? "bold" : "normal" }}>
                Sunday
              </span>
            </div>
            <div className={styles.time}>
              <span style={{ fontWeight: dayIndex == 1 ? "bold" : "normal" }}>
                9:00am - 5:30pm
              </span>
              <span style={{ fontWeight: dayIndex == 2 ? "bold" : "normal" }}>
                10:00am - 5:30pm
              </span>
              <span style={{ fontWeight: dayIndex == 3 ? "bold" : "normal" }}>
                10:00am - 5:30pm
              </span>
              <span style={{ fontWeight: dayIndex == 4 ? "bold" : "normal" }}>
                10:00am - 5:30pm
              </span>
              <span style={{ fontWeight: dayIndex == 5 ? "bold" : "normal" }}>
                10:00am - 5:30pm
              </span>
              <span style={{ fontWeight: dayIndex == 6 ? "bold" : "normal" }}>
                10:00am - 2:00pm
              </span>
              <span style={{ fontWeight: dayIndex == 0 ? "bold" : "normal" }}>
                Closed
              </span>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact Details</h3>
          <br />
          <i class="fa-solid fa-phone fa-2x"></i>
          <span>021 152 3789</span>
          <i class="fa-solid fa-envelope fa-2x"></i>
          <span>raehane@gmail.com</span>
        </div>
        <div className={styles.location}>
          <h3>How to get here</h3>
          <br />
          <span>8A Parity Place, Hillcrest, Auckland</span>
          <img src={map}></img>
        </div>
      </div>
      <div className={styles.message}>
        <h3>Send us a quick message</h3>
        <div className={styles.forms}>
          <div className={styles.details}>
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
              name="customerNumber"
              required
            ></input>
          </div>
          <div className={styles.messagebox}>
            <textarea
              type="text"
              placeholder="Enter your message here"
              spellCheck="false"
              name="customerMessage"
              required
            ></textarea>
          </div>
        </div>
        <button className={styles.messageButton}>Send Message</button>
      </div>
    </div>
  );
}

export default ContactUs;
