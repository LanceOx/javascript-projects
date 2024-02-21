// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}


// let tortoise = new Astronaut('Speedy', 120);

// console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

// Here we assign the method inside the constructor
class AstronautI {
  constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.reportStats = function() {
        let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
        return stats;
     }
  }
}

// Here we assign the method outside of the constructor
class AstronautO {
  constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
  }

  reportStats() {
     let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
     return stats;
  }
}

let fox = new AstronautI('Fox', 7, 12);
let hippo = new AstronautO('Hippo', 25, 1000);
let bird = new Astronaut('Bird', 3, 7);

console.log(fox);
console.log(hippo);
console.log(bird);

class Plant {
  constructor(type, height) {
     this.type = type;
     this.height = height;
  }

   grow()  {
     this.height = this.height + 1;
     let growth = `${this.type} is ${this.height}`;
     return growth;
  }
}
console.log(grow)