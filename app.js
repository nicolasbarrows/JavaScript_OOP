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
        this.hobbies.forEach((word) => {
            if (word == hobby) {
                this.hobbies.splice(this.hobbies.indexOf(word), 1);
                this.oldHobby = word;
            }
            })
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
        console.log(`greeting(mood) {
            if (mood == friendly) {
                console.log("Hello, Friend! My Name is ${this.name}");
            } else {
                console.log("Hi.")
            }
        }`);
    }

}

exercise(3);

let nicolas = new Person("Nicolas", 3, "Birmingham, AL", ["Dungeons & Dragons", "Board Games"]);
console.log(nicolas.greeting()); 
console.log(nicolas);
nicolas.addHobby("Woodworking");
console.log(nicolas);
nicolas.removeHobby("Board Games");
console.log(nicolas);


let john = new Coder("John", 0, "Birmingham, AL", ["Long Walks on the Beach", "Eating Oreo Cookies"]);
console.log(john);
john.addHobby("Warzone");
john.removeHobby("Dungeons & Dragons");
console.log(john);
console.log(john.greeting());

