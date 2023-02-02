import styles from "../styles/Reviews.module.css";
import React, { useEffect, useState } from "react";
import Stars from "../js/Stars";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("api/reviews");
      const json = await response.json();

      if (response.ok) {
        setReviews(json);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div style={{ paddingTop: "15px", textAlign: "center" }}>
      <h1>Reviews</h1>

      <div className={styles.container}>
        {reviews.map((review) => (
          <div className={styles.box} key={review._id}>
            <div className={styles.name}>{review.name}</div>
            <Stars numStars={review.stars} />
            <div className={styles.comment}>{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
