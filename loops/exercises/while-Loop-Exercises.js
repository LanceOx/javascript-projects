//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuel = 0, astronautsNum = 0, altitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (fuel <= 5000 || fuel > 30000 || isNaN(fuel)) {
     fuel = input.question("Enter the starting fuel level: ");
   
      if (fuel <= 5000 || fuel > 30000 || isNaN(fuel)){
    console.log("That is an invalid fuel level, please make the correct adjustments.");  } else {
    break; 
   }
  }
   if (fuel > 5000 && fuel <= 30000 && !isNaN(fuel)) {
      console.log("Achieved valid fuel levels.");
  } else {
    console.log("Invalid fuel levels.")
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (astronautsNum <= 0 || astronautsNum > 7 || isNaN(astronautsNum)) {
   astronautsNum = input.question("How many astronauts are aboard the ship?: ");

   if (astronautsNum <= 0 || astronautsNum > 7 || isNaN(astronautsNum)) {
      console.log("Invalid number of astronauts. Please enter a valid number between 1 and 7.");
   } else {
      break; 
   }
}

if (astronautsNum > 0 && astronautsNum <= 7 && !isNaN(astronautsNum)) {
   console.log("Number of astronauts is acceptable.");
} else {
   console.log("Invalid number of astronauts. Please stand by.");
}


//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuel-100*astronautsNum >= 0) {
  altitude += 50;
  fuel -= 100*astronautsNum;
  }
console.log(`Fuels status: @ ${fuel} gallons`);
console.log(`Altitude status: @ ${altitude} km`);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

  If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
  console.log(`The shuttle gained an altitude of ${altitude} km.`)
if (altitude >= 2000){
console.log("Orbit achieved!!");
} else { 
  console.log("Failed to reach orbit..");

}
function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = []; 
  // meals: array[array[string, ...]]
  // [['chicken', ...], ['pork', ...], ...]
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  for(let i = 0; i<numMeals.length; i++){ 
    meals[i] = []; // meals[i] == meal [..., i'th iteration ->[ ], ...]
    for(let j = 0; j<pantry.length; j++){ 
      meals[i].push(pantry[j][i]);
    }
  }

  return meals;
}