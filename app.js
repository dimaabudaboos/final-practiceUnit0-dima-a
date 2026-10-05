const userBudget = 150;
const isPremiumUser = true;

if (userBudget >= 100 && isPremiumUser) {
  console.log("Welcome! Premium budget tracking is active.");
} else {
  console.log("Standard account active.");
}

const shoppingCart = ["Apples", "Milk", "Bread", "Eggs"];
shoppingCart.push("Cheese");
console.log(shoppingCart);

const productGrid = [
  ["A1", "Apples", 2.99],
  ["B2", "Milk", 4.50],
  ["C3", "Bread", 1.25]
];
console.log(productGrid);

const itemPrices =;
const totalCost = itemPrices.reduce((sum, price) => sum + price, 0);
console.log(totalCost);

const expensiveItems = itemPrices.filter(price => price > 2.00);
console.log(expensiveItems);
