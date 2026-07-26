import ProductCard from "../../components/ProductCard/ProductCard.jsx"
import products from '../../data/products';

import HeroSection from "../../components/HeroSection/herosection.jsx"
import Categories from "../../components/CategoryFilter/categoryfilter.jsx"

const Home = () => {
    return (
      <>
        <HeroSection />
        <Categories />
        <div className="parent">
          {products.map((elem) => (
            <ProductCard key={elem.id} product={elem} />
          ))}
        </div>
      </>
    )
}

export default Home;