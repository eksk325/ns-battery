import styles from "../styles/Footer.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/century.jpg";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const requestNow = () => {
    location.pathname === "/quote" ? refresh() : moveToQuote();
  };

  const refresh = () => {
    window.scrollTo(0, 0);
  };

  const moveToQuote = () => {
    navigate("/quote");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <nav className={styles.footerBar}>
        <div className={styles.footer}>
          <div className={styles.information}>
            <div className={styles.icons}>
              <i className="fa-solid fa-location-dot fa-2x"></i>
              <i className="fa-solid fa-envelope fa-2x"></i>
            </div>
            <div className={styles.infos}>
              <label style={{ paddingBottom: "20px" }}>
                8A Parity Place <br></br>Hillcrest <br></br>Auckland
              </label>
              <label style={{ padding: "20px" }}>raehane@gmail.com</label>
            </div>
          </div>

          <ul className={styles.links}>
            <li>
              <h2>Quick Links</h2>
            </li>
            <li>
              <Link to="/about-us" onClick={refresh}>
                <label>About Us</label>
              </Link>
            </li>
            <li>
              <Link to="/reviews" onClick={refresh}>
                <label>Reviews</label>
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={refresh}>
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
