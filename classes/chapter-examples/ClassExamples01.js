//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}
//let wolf = new Astronaut('Wolf', 13, 26)
let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);
//console.log(wolf)

//Try modifying or adding properties below.

let wolf = new Astronaut();
wolf.name = 'Wolfie';
wolf.age = 13;
wolf.mass = 26;


console.log(wolf)


// class Car {
//   constructor(make, model, year, color, mpg){
//      this.make = make;
//      this.model = model;
//      this.year = year;
//      this.color = color;
//      this.mpg = mpg;
//   }
// }

//let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20)
// let myCar = new Car('Tesla', 'Model S', 2019)
// console.log(myCar)
// console.log(typeof myCar.year)

class Car {
  constructor(make, model, year, color, mpg){
     this.make = make,
     this.model = model,
     this.year = year,
     this.color = color,
     this.mpg = mpg
  }
} 
//let myCar = new Car('Chevy', 'Astro', 1985, 'gray', 20)
let myCar = new Car('Tesla', 'Model S', 2019)
console.log(typeof myCar.year)
console.log(myCar)

