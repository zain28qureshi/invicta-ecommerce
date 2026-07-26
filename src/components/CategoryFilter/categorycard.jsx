import { Link } from "react-router-dom";
import styles from "./card.module.css";

const Categorycard = ({ name, image }) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/category/${slug}`} className={styles.card}>
      <div className={styles.imagearea}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
    </Link>
  );
};

export default Categorycard;