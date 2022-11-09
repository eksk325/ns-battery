import styles from "../styles/Header.module.css";
import logo from "../images/century.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [currentPage, setCurrentPage] = useState("home");

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
              style={{ fontWeight: currentPage == "home" ? "bold" : "normal" }}
              onClick={() => setCurrentPage("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{
                fontWeight: currentPage == "products" ? "bold" : "normal",
              }}
              onClick={() => setCurrentPage("products")}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/quote"
              style={{
                fontWeight: currentPage == "request" ? "bold" : "normal",
              }}
              onClick={() => setCurrentPage("request")}
            >
              Request Battery
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              style={{
                fontWeight: currentPage == "contact" ? "bold" : "normal",
              }}
              onClick={() => setCurrentPage("contact")}
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
