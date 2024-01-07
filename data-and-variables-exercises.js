let spaceshuttlename = "Determination"
let spaceShuttleSpeedMph = ("17500")//Declare and assign the variables below
let distanceToMarsKm =  ("225000000")
let distanceToMoon = ("384400")
const milesPerKm = ("0.621")
let milesToMars = (distanceToMarsKm * milesPerKm)
let hoursToMars = (distanceToMarsKm * milesPerKm / spaceShuttleSpeedMph)
let daysToMars = (hoursToMars / 24)

let milesToMoon = distanceToMoon * milesPerKm
let hoursToMoon = distanceToMoon * milesPerKm / spaceShuttleSpeedMph
let daysToMoon = hoursToMoon / 24



console.log(milesToMars)
console.log(hoursToMars)
console.log(daysToMars)
console.log(spaceshuttlename, 'will take' ,+ (daysToMars), 'days to reach Mars!!!')
console.log(milesToMoon)
console.log(hoursToMoon)
console.log(daysToMoon)
console.log(spaceshuttlename, 'will take' ,+ (daysToMoon), 'days to reach the moon!!!')



// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below