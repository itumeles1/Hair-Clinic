// Haircut prices object
const haircutPrices = {
  "Men's Haircut": 150,
  "Women's Haircut": 200,
  "Kid's Haircut": 100,
  "Hair Styling": 250,
  "Hair Coloring": 350
};

// Displaying the haircut prices
for (const [haircut, price] of Object.entries(haircutPrices)) {
  console.log(`${haircut}: $${price}`);
}
