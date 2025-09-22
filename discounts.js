let total = 2000;
let couponcode = "disc5";
let discountpercent = "";

switch (couponcode) {
  case "disc5":
    discountpercent = 5;
    break;

  case "disc10":
    discountpercent = 10;
    break;

  case "disc15":
    discountpercent = 15;
    break;

  default:
    discountpercent=0;
    break;
}

let finalbill = total - (total * discountpercent) / 100;

console.log("total bill : " + total);
console.log("coupon applied :" + couponcode);
console.log("final bill after discount : " + finalbill);
