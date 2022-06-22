// Object literal

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
// console.log('draw')
//         }
//     }
// }

// const circle = createCircle(1)

// circle.draw();

// Constructor Function

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 1 };

//   this.value = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);

// console.log(another.value());

// To iterate over the object

// To get the properties and the values, we can also log another[key]

// To get only the primitive key value pair, use an if statement

// for (let key in another) {
//   if (typeof another[key] !== "function") console.log(key, another[key]);
// }

// We can also iterate through an object using

// const keys = Object.keys(another);

// To know if an object has a given property

// if ("radius" in another) {
//   console.log("Do something");
// }

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;
    return (startTime = new Date());
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    return (duration += seconds);
  };

  this.reset = function () {
    return (
      (startTime = null), (endTime = null), (running = false), (duration = 0)
    );
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const result = new Stopwatch();

const s = result.start();
// const e = result.stop();
// const r = result.reset();
const d = result.duration;
// console.log(s);
// console.log(e);
// console.log(d);

// const book1 = {
//   title: "Book 1",
//   author: "John Doe",
//   year: "2013",
//   getsummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1.getsummary());

// for (let key in book1) {
//   console.log(key);
// }

// for (let key in book1) {
//   if (typeof book1[key] !== "function") console.log(book1[key]);
// }

// console.log(Object.values(book1));

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// const book1 = new Book("Book one", "John Doe", "2013");
// const book2 = new Book("Book two", "Jane Doe", "2017");

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// console.log(book1);

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
// }

// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine("Mag one", "John Doe", "2012", "Jan");

// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

// Es6 Class

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} year old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate

// const book1 = new Book("Book one", "Jane Doe", "2014");
// console.log(book1);
// book1.revise("2020");

// console.log(book1);

// console.log(Book.topBookStore());

// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const Mag1 = new Magazine("Book one", "John Doe", "2014", "Jan");

// console.log(Mag1.getAge());

// class Bank {
//   constructor(balance) {
//     let value,
//       newValue = 0;
//     this.balance = balance;
//     this.deposit = function () {
//       return (balance += value);
//     };
//     this.debit = function () {
//       value - newValue;
//     };
//   }
// }

class User {
  users = [];
  currentUser = {};

  register(email, password) {
    const id = this.users.length + 1;

    return this.users.push({ id, email, password, balance: 0 });
  }

  login(email, password) {
    const user1 = this.users.filter(
      (user) => user.email == email && user.password == password
    )[0];

    if (!user1) throw new Error("Access Denied");

    this.currentUser = user1;

    return user1;
  }

  changeUserCredentials(newEmail, newPassword) {
    const userOne = this.users.map((u) =>
      u.id == 1 ? { ...u, email: newEmail, password: newPassword } : u
    );

    return userOne;
  }

  getAllUsers() {
    console.table(this.users);
  }
}

// const persons = new User();

// persons.register("johndoe@gmail.com", "password");
// persons.register("james@gmail.com", "password");
// console.log(persons.changeUserCredentials("Jane Doe", "PaSSworD"));

class Bank extends User {
  constructor(bankName) {
    super();
    this.bankName = bankName;
  }

  deposit(amount) {
    const user1 = this.users.map(
      (user) => user.id == 1 && { ...user, balance: (user.balance += amount) }
    );

    return user1;
  }

  withdraw(amount) {
    const user1 = this.users.map(
      (user) => user.id == 1 && { ...user, balance: (user.balance -= amount) }
    );
    if (user1.balance < amount) {
      return new Error("Insufficient balance, please try again");
    }

    return user1;
  }
}

const access = new Bank("access");
const gtb = new Bank("gtb");

access.register("johndoe@gmail.com", "password");
access.deposit(2000);
access.withdraw(3000);
access.register("johndoe@gmail.com", "password");
access.register("johndoe@gmail.com", "password");

gtb.register("jamesdoe@gmail.com", "password");
gtb.register("jamesdoe@gmail.com", "password");
gtb.register("jamesdoe@gmail.com", "password");

console.log(access.getAllUsers());
console.log(gtb.getAllUsers());
