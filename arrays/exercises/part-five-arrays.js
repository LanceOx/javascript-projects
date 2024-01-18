let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
let newP = [];
//1) Use the split method on the string to identify the purpose of the parameter inside the ().
newP = str.split();
console.log(newP);
newP = str.split('e');
console.log(newP);
newP = str.split(' ');
console.log(newP);
newP = str.split('');
console.log(newP);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
newP = arr.join();
console.log(newP);
newP = arr.join('a');
console.log(newP);
newP = arr.join(' ');
console.log(newP);
newP = arr.join('');
console.log(newP);
//3) Do split or join change the original string/array?

// neither will not change the original, and it will need to run under a new "array"//

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join());
