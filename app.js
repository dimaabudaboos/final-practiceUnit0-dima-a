// MODULE 1: Values, Data Types, and Operations
// Skill: Declaring numerical and boolean variables to hold state values.
const userBudget = 150;
const isPremiumUser = true;

// MODULE 2: Control Structures and Logic
// Skill: Using logical operators (&&) and if-else conditionals to evaluate budget state.
// Pseudocode: If the budget is enough AND the user is premium, allow full premium tracking access.
if (userBudget >= 100 && isPremiumUser) {
  // MODULE 3: Stringing Characters Together
  // Skill: Displaying clear text feedback strings inside the console log outputs.
  console.log("Welcome! Premium budget tracking is active.");
} else {
  console.log("Standard account active.");
}

// MODULE 4: Building Arrays
// Skill: Creating standard array structures and dynamically appending items using .push()
const shoppingCart = ["Apples", "Milk", "Bread", "Eggs"];
shoppingCart.push("Cheese");
console.log(shoppingCart);

// MODULE 5: Using Arrays
// Skill: Constructing a structured multi-dimensional 2D array grid to map items and cost values.
const productGrid = [
  ["A1", "Apples", 2.99],
  ["B2", "Milk", 4.50],
  ["C3", "Bread", 1.25]
];
console.log(productGrid);

// MODULE 6: Working With Loops
// Skill: Executing advanced array iterator methods (.reduce and .filter) to safely evaluate elements.
// Pseudocode: Use reduce to add up all price items and calculate the total cost balance dynamically.
const itemPrices = [2.99, 4.50, 1.25, 3.00, 5.50];
const totalCost = itemPrices.reduce((sum, price) => sum + price, 0);
console.log(totalCost);

const expensiveItems = itemPrices.filter(price => price > 2.00);
console.log(expensiveItems);
