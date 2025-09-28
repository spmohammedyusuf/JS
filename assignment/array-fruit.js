let fruitbasket = ["apple", "banana", "mango"];

fruitbasket[2] = "papaya";
fruitbasket.push("pineapple");

console.log(fruitbasket);

let lastfruit = fruitbasket.pop();
console.log(lastfruit);

let fruitbasketcount = fruitbasket.length;
console.log(fruitbasketcount);

let j;
console.log("**** list of fruitbasket ****");
for (let i = 0; i < fruitbasket.length; i++) {
  j = i + 1;
  console.log("fruitbasket #" + j + "->" + fruitbasket[i]);
}
