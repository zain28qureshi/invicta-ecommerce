import styles from "./herosection.module.css"
const HeroSection = () => {
   const scrollToCategories = () => {
  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
};
    return(
        <div className={styles.parent}>
          
            <div className={styles.hero}>
              <p className={styles.newcoll}>* New Collection 2026 *</p>
              <p className={styles.timeless}>Timeless Elegance.</p>
              <p className={styles.timeless}>Crafted for You.</p>
              <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerDot}></span>
              <span className={styles.dividerLine}></span>
              </div>
              <p className={styles.freshdrops}>Fresh drops every week, free shipping over Rs. 3000</p>
              <div className={styles.buttons}>
                
                <button className={styles.button1} onClick={scrollToCategories}>Shop Now</button>
                <button className={styles.button2} onClick={scrollToCategories}>Explore Collection</button>
              </div>
            </div>
            <div className={styles.image}>
            
            </div>
        </div>
    )
}
export default HeroSection;



