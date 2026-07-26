import { useParams } from "react-router-dom";
import products from "../../data/products.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import styles from "./categorypage.module.css";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filtered = products.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, "-") === categoryName
  );

  return (
    <div>
      <p className={styles.categoryname}>{categoryName.replace(/-/g, " ")}</p>
      <div className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;