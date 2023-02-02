import styles from "../styles/Contact.module.css";
import map from "../images/map.png";

function ContactUs() {
  const date = new Date();
  const dayIndex = date.getDay();

  const submitMessage = () => {
    let formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNum: document.getElementById("phoneNum").value,
      message: document.getElementById("message").value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/send-msg");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(JSON.stringify(formData));
  };

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
          <i className="fa-solid fa-phone fa-2x"></i>
          <span style={{ userSelect: "text" }}>021 152 3789</span>
          <i className="fa-solid fa-envelope fa-2x"></i>
          <span style={{ userSelect: "text" }}>raehane@gmail.com</span>
        </div>
        <div className={styles.location}>
          <h3>How to get here</h3>
          <br />
          <span style={{ userSelect: "text" }}>
            8A Parity Place, Hillcrest, Auckland
          </span>
          <img src={map}></img>
        </div>
      </div>
      <form className={styles.message} onSubmit={submitMessage}>
        <h3>Send us a quick message</h3>
        <div className={styles.forms}>
          <div className={styles.details}>
            <input
              type="text"
              placeholder="Name"
              spellCheck="false"
              name="customerName"
              id="name"
              required
            ></input>
            <input
              type="email"
              placeholder="Email"
              spellCheck="false"
              name="customerEmail"
              id="email"
              required
            ></input>
            <input
              type="tel"
              placeholder="Phone number"
              spellCheck="false"
              name="customerNumber"
              id="phoneNum"
              required
            ></input>
          </div>
          <div className={styles.messagebox}>
            <textarea
              type="text"
              placeholder="Enter your message here"
              spellCheck="false"
              name="customerMessage"
              id="message"
              required
            ></textarea>
          </div>
        </div>
        <button className={styles.messageButton}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
