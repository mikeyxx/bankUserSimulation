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
