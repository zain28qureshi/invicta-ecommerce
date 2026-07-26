// productCopy.js
// Generates a realistic-sounding description + 5 highlight bullets
// for any product, based on its existing name/category/price/rating.
// Save this file to: src/utils/productCopy.js

const CATEGORY_COPY = {
  phones: {
    intro: (n) =>
      `The ${n} blends flagship-level performance with an all-day battery and a camera system built for anyone who refuses to compromise on quality.`,
    highlights: (n, price, rating) => [
      "Vivid, color-accurate display built for streaming, gaming, and everyday browsing",
      "Pro-grade camera system that captures crisp detail in low light",
      "All-day battery life with fast charging support",
      rating >= 5
        ? "Rated 5 stars by verified buyers for reliability and performance"
        : "Smooth, lag-free performance backed by a capable processor",
      "Durable build with a premium finish that feels great in hand",
    ],
  },
  footwear: {
    intro: (n) =>
      `Designed for everyday comfort without sacrificing style, the ${n} pairs a cushioned sole with a breathable upper for all-day wear.`,
    highlights: () => [
      "Lightweight cushioning for extra comfort on long days",
      "Breathable upper material keeps feet cool",
      "Durable outsole with reliable grip on multiple surfaces",
      "Classic silhouette that pairs with casual and athletic outfits",
      "True-to-size fit with reinforced stitching for durability",
    ],
  },
  accessories: {
    intro: (n) =>
      `The ${n} is a versatile finishing touch, crafted to elevate any outfit while staying practical for daily use.`,
    highlights: () => [
      "Premium materials selected for durability and finish",
      "Lightweight and comfortable for all-day wear",
      "Classic design that complements both casual and formal looks",
      "Compact and easy to carry or store",
      "Makes a thoughtful gift for any occasion",
    ],
  },
  "men's wear": {
    intro: (n) =>
      `The ${n} is tailored for a clean, modern fit — a wardrobe staple that works effortlessly from desk to dinner.`,
    highlights: () => [
      "Soft, breathable fabric for comfort throughout the day",
      "Tailored fit that layers well with other pieces",
      "Fade-resistant material built to last wash after wash",
      "Versatile design suited for both casual and smart-casual looks",
      "Available in multiple sizes for a true-to-fit feel",
    ],
  },
  "women's wear": {
    intro: (n) =>
      `The ${n} combines a flattering silhouette with breathable fabric, designed to move comfortably through your day.`,
    highlights: () => [
      "Flattering cut that suits multiple body types",
      "Soft, breathable fabric ideal for everyday wear",
      "Easy to style up or down for any occasion",
      "Wrinkle-resistant material that travels well",
      "Thoughtful detailing for an elevated finish",
    ],
  },
  audio: {
    intro: (n) =>
      `The ${n} delivers rich, balanced sound with comfort designed for extended listening sessions.`,
    highlights: (n, price, rating) => [
      "Rich, balanced audio with deep bass response",
      rating >= 5
        ? "Consistently rated 5 stars for sound clarity"
        : "Clear sound reproduction across genres",
      "Comfortable, lightweight fit for long listening sessions",
      "Reliable wireless connection with minimal latency",
      "Long battery life to get you through the day",
    ],
  },
  watches: {
    intro: (n) =>
      `The ${n} pairs precise craftsmanship with a timeless design, built to be a daily companion for years to come.`,
    highlights: (n, price, rating) => [
      "Precision movement for reliable, accurate timekeeping",
      "Scratch-resistant glass and durable casing",
      price >= 500
        ? "Premium materials reflecting fine watchmaking craftsmanship"
        : "Sturdy strap built for everyday comfort",
      "Water-resistant design suited for daily wear",
      "Timeless design that pairs with both casual and formal attire",
    ],
  },
  "bags & wallets": {
    intro: (n) =>
      `The ${n} offers a practical yet refined way to carry your essentials, built from durable materials that age beautifully.`,
    highlights: () => [
      "Spacious interior with organized compartments",
      "Durable material built to withstand daily use",
      "Reinforced stitching for long-term durability",
      "Comfortable straps or handles for easy carrying",
      "Classic design that complements any outfit",
    ],
  },
  fragrance: {
    intro: (n) =>
      `The ${n} opens with a distinctive character and settles into a long-lasting signature scent suited for everyday confidence.`,
    highlights: () => [
      "Long-lasting scent that develops beautifully over time",
      "Elegant bottle design, great for gifting",
      "Balanced fragrance suitable for daily wear",
      "Made with quality ingredients for a refined finish",
      "A versatile scent for both day and evening occasions",
    ],
  },
  "laptops & tablets": {
    intro: (n) =>
      `The ${n} is built to handle everything from productivity to entertainment, with performance that keeps up with your workflow.`,
    highlights: (n, price, rating) => [
      "Fast, responsive performance for work and multitasking",
      "Crisp, high-resolution display for comfortable viewing",
      "Long battery life to get through a full day",
      "Sleek, portable design that's easy to carry",
      rating >= 5
        ? "Top-rated by users for reliability and build quality"
        : "Solid build quality backed by dependable performance",
    ],
  },
};

const DEFAULT_COPY = {
  intro: (n) =>
    `The ${n} is thoughtfully designed with quality materials, offering reliable performance for everyday use.`,
  highlights: () => [
    "Made with high-quality, durable materials",
    "Designed for everyday comfort and reliability",
    "Sleek design that fits a variety of styles",
    "Great value for the features it offers",
    "Backed by positive customer feedback",
  ],
};

/**
 * Generates description + highlights for a single product.
 * @param {{name:string, category:string, price:number, rating:number}} product
 * @returns {{description: string, highlights: string[]}}
 */
export function generateProductCopy(product) {
  const key = product.category?.toLowerCase().trim();
  const copy = CATEGORY_COPY[key] || DEFAULT_COPY;

  const description = copy.intro(product.name, product.price, product.rating);
  const highlights = copy.highlights(product.name, product.price, product.rating);

  return { description, highlights };
}