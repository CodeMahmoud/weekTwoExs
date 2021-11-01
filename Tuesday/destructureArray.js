let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

let [ first, second, third, ... otherNum] = bigArray;

console.log(otherNum);

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"