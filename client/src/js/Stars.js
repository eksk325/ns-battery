import starImg from "../images/star.png";
import blankStarImg from "../images/emptystar.png";
import styles from "../styles/Reviews.module.css";

function Stars({ numStars }) {
  return (
    <div
      style={{
        display: "flex",
        width: "200px",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <img
        src={0 < numStars ? starImg : blankStarImg}
        className={styles.star}
        alt="star"
      ></img>
      <img
        src={1 < numStars ? starImg : blankStarImg}
        className={styles.star}
        alt="star"
      ></img>
      <img
        src={2 < numStars ? starImg : blankStarImg}
        className={styles.star}
        alt="star"
      ></img>
      <img
        src={3 < numStars ? starImg : blankStarImg}
        className={styles.star}
        alt="star"
      ></img>
      <img
        src={4 < numStars ? starImg : blankStarImg}
        className={styles.star}
        alt="star"
      ></img>
    </div>
  );
}

export default Stars;
