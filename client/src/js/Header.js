import styles from "../styles/Header.module.css";
import logo from "../images/century.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 620) {
      setIsMobile(false);
      setIsExpanded(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 620) {
      setIsMobile(false);
      setIsExpanded(false);
    } else {
      setIsMobile(true);
    }
  });

  const openMenu = function () {
    isExpanded ? setIsExpanded(false) : setIsExpanded(true);
  };

  const shutMenu = function () {
    setIsExpanded(false);
  };

  return (
    <div>
      <div className={styles.logo}>
        <Link to="/" onClick={shutMenu}>
          <img className={styles.image} src={logo} alt="logo" />
        </Link>
      </div>

      <nav className={styles.navBar}>
        {isMobile ? (
          <div>
            <div
              style={{ display: "flex" }}
              className={styles.menuLabel}
              onClick={openMenu}
            >
              <div style={{ fontSize: "18px", paddingRight: "15px" }}>Menu</div>
              <i
                className="fa-solid fa-bars"
                style={{ alignSelf: "center" }}
              ></i>
            </div>
          </div>
        ) : (
          <ul className={styles.navMenu}>
            <li>
              <Link
                to="/"
                style={{
                  color: location.pathname === "/" ? "yellow" : "white",
                }}
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
                  color:
                    location.pathname === "/contact-us" ? "yellow" : "white",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </nav>
      {isExpanded ? (
        <div>
          <ul className={styles.navExpanded}>
            <li>
              <Link
                to="/"
                style={{
                  color: location.pathname === "/" ? "yellow" : "white",
                }}
                onClick={shutMenu}
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
                onClick={shutMenu}
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
                onClick={shutMenu}
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
                onClick={shutMenu}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                style={{
                  color:
                    location.pathname === "/contact-us" ? "yellow" : "white",
                }}
                onClick={shutMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
