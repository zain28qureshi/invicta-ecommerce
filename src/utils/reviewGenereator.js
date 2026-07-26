// reviewGenerator.js
// Generates realistic-looking reviews for any product, deterministically
// based on the product's id (so the same product always shows the same
// reviews on every visit, without needing a backend).
// Save to: src/utils/reviewGenerator.js

const FIRST_NAMES = [
  "Ali", "Sara", "Ahmed", "Ayesha", "Bilal", "Zara", "Hamza", "Mariam",
  "Usman", "Fatima", "Omar", "Hina", "Faisal", "Sana", "Noman", "Rabia",
];

const LAST_INITIALS = ["K.", "M.", "S.", "R.", "A.", "H.", "Q.", "J."];

const POSITIVE_COMMENTS = [
  "Exactly as described, really happy with the quality.",
  "Fast delivery and the product feels premium in person.",
  "Great value for the price, would buy again.",
  "Exceeded my expectations, packaging was excellent too.",
  "Been using it for a few weeks now, holding up really well.",
  "Looks even better in person than in the photos.",
  "Solid build quality, no complaints so far.",
];

const NEUTRAL_COMMENTS = [
  "Good product overall, though delivery took a bit longer than expected.",
  "Does what it's supposed to. Nothing extraordinary but reliable.",
  "Decent quality for the price point. Minor wear after regular use.",
  "Matches the description. Packaging could be better.",
];

const CRITICAL_COMMENTS = [
  "It's okay, but I expected slightly better quality for the price.",
  "Works fine but sizing ran a bit different than expected.",
  "Average product. Wouldn't say it's bad, just not amazing.",
];

// Simple deterministic pseudo-random generator seeded by product id,
// so the same product shows the same reviews every time.
function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function pick(arr, rand) {
  return arr[Math.floor(rand() * arr.length)];
}

/**
 * Generates a list of reviews for a product.
 * @param {{id: number, rating: number}} product
 * @param {number} count - how many reviews to generate (default 3)
 * @returns {{name: string, rating: number, comment: string, date: string}[]}
 */
export function generateReviews(product, count = 3) {
  const rand = seededRandom(product.id * 97 + 13);
  const reviews = [];

  for (let i = 0; i < count; i++) {
    const name = `${pick(FIRST_NAMES, rand)} ${pick(LAST_INITIALS, rand)}`;

    // Review rating hovers near the product's overall rating, +/- 1
    let reviewRating = product.rating + Math.round(rand() * 2 - 1);
    reviewRating = Math.min(5, Math.max(1, reviewRating));

    let comment;
    if (reviewRating >= 4) comment = pick(POSITIVE_COMMENTS, rand);
    else if (reviewRating === 3) comment = pick(NEUTRAL_COMMENTS, rand);
    else comment = pick(CRITICAL_COMMENTS, rand);

    const daysAgo = Math.floor(rand() * 60) + 1;
    const date = new Date(Date.now() - daysAgo * 86400000)
      .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    reviews.push({ name, rating: reviewRating, comment, date });
  }

  return reviews;
}