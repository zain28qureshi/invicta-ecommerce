import styles from "./category.module.css";
import Categorycard from "./categorycard";
import Categories from "../../data/categoriesdata.js";

const CategoryFilter = () => {
  return (
    <section id="categories">
    <div className={styles.title}>
      <div className={styles.shoptitle}>
        <p className={styles.shop}>SHOP BY CATEGORY</p>
      </div>
      <p className={styles.find}>Find what you need</p>

      <div className={styles.grid}>
        {Categories.map((cat) => (
          <Categorycard key={cat.id} name={cat.name} image={cat.image} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default CategoryFilter;

