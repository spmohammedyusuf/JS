class car {
  brand;
  model;
  year;
  color;

  constructor(br, mo, yr, clr) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
    this.color = clr;
  }

  displayDetails() {
    console.log(
      `this car is a ${this.brand} ${this.model} ${this.year} ${this.color}.`
    );
  }
}

let myCar = new car("toyota", "fortunerGRS", "2024", "black");

myCar.displayDetails();

let car2 = new car("bmw", "m7com", "2024", "blue");
car2.displayDetails();
