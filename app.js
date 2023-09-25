console.log("Hello World!\n==========\n");

function exercise(n) {
    console.log(`EXERCISE ${n}:\n==========\n`);
}

exercise(1);

class Person {
    constructor(name, pets, hobbies) {
        this.name = name;
        this.pets = pets;
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
        console.log(`Hello, ${this.name}. I am Computer. How is your pet, ${this.pets}?`);
    }
}

let nicolas = new Person("Nicolas", "Kevi", ["Dungeons & Dragons", "Board Games"]);
nicolas.addHobby("Woodworking");
nicolas.removeHobby("Board Games");

console.log(nicolas.greeting()); 

exercise(2);

class Coder extends Person {

}
