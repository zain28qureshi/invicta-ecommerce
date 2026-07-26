const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          style={{ color: num <= roundedRating ? "gold" : "lightgray", fontSize: "18px" }}
        >
          ★
        </span>
      ))}
      <span className="rating-number"> ({rating})</span>
    </div>
  );
};

export default RatingStars;