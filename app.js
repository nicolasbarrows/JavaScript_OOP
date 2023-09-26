console.log("Hello World!\n==========\n");

function exercise(n) {
  console.log(`EXERCISE ${n}:\n==========\n`);
}

exercise(1);

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  removeHobby(hobby) {
    let i = this.hobbies.indexOf(hobby);
    this.hobbies.splice(i, 1);
    this.oldHobby = hobby;
  }
  greeting() {
    console.log(`Hello World! My Name is ${this.name}.`);
  }
}

exercise(2);

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting() {
    console.log(`function greeting(mood) {
        if (mood == friendly) {
            console.log("Hello, Friend! My Name is ${this.name}");
        } else {
            console.log("Hi.")
        }
    }`);
  }
}

exercise(3);

let nicolas = new Person("Nicolas", 3, "Birmingham, AL", [
  "Dungeons & Dragons",
  "Board Games",
]);
console.log(nicolas.greeting());
console.log(nicolas);
nicolas.addHobby("Woodworking");
console.log(nicolas);
nicolas.removeHobby("Board Games");
console.log(nicolas);

let john = new Coder("John", 0, "Birmingham, AL", [
  "Long Walks on the Beach",
  "Eating Oreo Cookies",
]);
console.log(john);
john.addHobby("Warzone");
console.log(john);
john.removeHobby("Eating Oreo Cookies");
console.log(john);
console.log(john.greeting());

exercise(4);

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    if (b == undefined) {
      this.result = this.result + a;
    } else {
      this.result = a + b;
    }
  }
  subtract(a, b) {
    if (b == undefined) {
      this.result = this.result - a;
    } else {
      this.result = a - b;
    }
  }
  multiply(a, b) {
    if (b == undefined) {
        this.result = this.result * a;
    } else {
    this.result = a * b;
    }
  }
  divide(a, b) {
    if (b == undefined) {
        this.result = this.result / a;
    } else {
        this.result = a / b;
    }
  }
  displayResult() {
    console.log(this.result);
  }
}

let n = new Calculator();
n.displayResult();
n.add(149873, 13498);
n.displayResult();
n.subtract(13498);
n.displayResult();
n.multiply(149873, 13498);
n.displayResult();
n.divide(149873);
n.displayResult();