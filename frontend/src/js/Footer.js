import styles from "../styles/Footer.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/century.jpg";

function Footer() {
  const navigate = useNavigate();
  const requestNow = () => {
    navigate("/quote");
  };

  return (
    <div>
      <nav className={styles.footerBar}>
        <div className={styles.footer}>
          <div className={styles.information}>
            <div className={styles.address}>
              <i class="fa-solid fa-location-dot fa-2x"></i>
              <label>
                8A Parity Place<br></br>Hillcrest<br></br>Auckland
              </label>
            </div>
            <div className={styles.email}>
              <i class="fa-solid fa-envelope fa-2x"></i>
              <label>raehane@gmail.com</label>
            </div>
          </div>

          <ul className={styles.links}>
            <li>
              <h2>Quick Links</h2>
            </li>
            <li>
              <Link to="/about-us">
                <label>About Us</label>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <label>Our products</label>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <label>Contact Us</label>
              </Link>
            </li>
          </ul>

          <div className={styles.action}>
            <h2>Need a battery replacement?</h2>
            <button onClick={requestNow}>Request Now</button>
          </div>
        </div>

        <hr></hr>
        <div className={styles.under}>
          <img src={logo} alt="footerLogo"></img>
          <label className={styles.copyright}>
            Northshore Battery &copy; 2022. All rights reserved.
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
