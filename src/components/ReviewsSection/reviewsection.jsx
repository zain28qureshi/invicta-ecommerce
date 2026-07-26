import { Star } from "lucide-react";
import { generateReviews } from "../../utils/reviewGenereator.js";
import styles from "./reviews.module.css";

const ReviewsSection = ({ product }) => {
  const reviews = generateReviews(product, 3);
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>
        Customer Reviews <span>({reviews.length})</span>
      </h3>

      <div className={styles.summary}>
        <span className={styles.avgNumber}>{avg.toFixed(1)}</span>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={16}
              fill={n <= Math.round(avg) ? "#d8a84e" : "none"}
              color="#d8a84e"
            />
          ))}
        </div>
      </div>

      <div className={styles.list}>
        {reviews.map((review, i) => (
          <div key={i} className={styles.review}>
            <div className={styles.reviewHeader}>
              <span className={styles.reviewerName}>{review.name}</span>
              <span className={styles.reviewDate}>{review.date}</span>
            </div>
            <div className={styles.reviewStars}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={13}
                  fill={n <= review.rating ? "#d8a84e" : "none"}
                  color="#d8a84e"
                />
              ))}
            </div>
            <p className={styles.reviewComment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;