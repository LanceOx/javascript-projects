let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random()*10)   
   } 
   
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.floor(Math.random()*10)   
   } 
};

let superChimpTwo = {
   name: "Brad ",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.floor(Math.random()*10)   
   } 
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.floor(Math.random()*10)   
   } 
};

let lizard = {
   name: "Almina",
   species: "Tardigrade",
   mass: Math.round(0.0000000001*100)/10000,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.floor(Math.random()*11)   
   } 
};
let crew = [superChimpOne, salamander, superChimpTwo, dog, lizard];

   crew.forEach(function(cadet){
      console.log(cadet.name + " is in charge of steps " + cadet.move()+ ".");
   });
crew.forEach(function(animal){
console.log(`${animal.name} is a ${animal.species}. They currently weigh ${animal.mass}kgs and are ${animal.age} years old.`)
});

function fitnessTest(cadets){
   let results = [], numSteps, turns;
   for (let i=0; i < cadets.length; i++){
      numSteps = 0;
      turns = 0;
      while(numSteps < 20){
         numSteps += cadets[i].move();
         turns++;
      }
      results.push(`It took ${cadets[i].name}, ${turns} turns to take 20 steps.`)
   }
   return results;
}
let testResults = fitnessTest(crew);

testResults.forEach(result => {
   console.log(result);
})
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!