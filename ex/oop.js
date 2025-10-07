class course {
  title;
  duration;
  fee;
  description;
  timing;

  constructor(ti, du, fee, des, tim,) {
    this.title = ti;
    this.duration = du;
    this.fee = fee;
    this.description = des;
    this.timing = tim;
    this.disc = (this.fee *10)

  }
  displayDetails() {
    console.log(
      `this course is called${this.title} ${this.duration} ${this.fee} ${this.description} ${this.timing} ${this.disc}
      and we have running a discount this month so final price will be ${this.disc}`); }
}

let course1 = new course(
  "Title - fullstackdevelopment",
  "Duration - 6months",
  "Fee - $25000",
  "Description - React , node ",
  "Timing - 7pm - 8pm",
);
course1.displayDetails();
