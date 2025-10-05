let call = 500;
let totalbill;

if (call <= 100) {
  totalbill = 0;
} else if (call > 100) {
  totalbill = (call - 100) * 1;
} else if (call > 150) {
  totalbill = (call - 150) * 1.8;
}
console.log("totalbill = " + totalbill);
