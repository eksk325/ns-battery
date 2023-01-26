import styles from "../styles/Header.module.css";
import logo from "../images/century.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.image} src={logo} alt="logo" />
        </Link>
      </div>

      <nav className={styles.navBar}>
        <ul className={styles.navMenu}>
          <li>
            <Link
              to="/"
              style={{ color: location.pathname === "/" ? "yellow" : "white" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              style={{
                color: location.pathname === "/about-us" ? "yellow" : "white",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/quote"
              style={{
                color: location.pathname === "/quote" ? "yellow" : "white",
              }}
            >
              Request Battery
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              style={{
                color: location.pathname === "/reviews" ? "yellow" : "white",
              }}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              style={{
                color: location.pathname === "/contact-us" ? "yellow" : "white",
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
