let num = 1001;

//Returns 'undefined'.
console.log(num.length);
//Use type conversion to print the length (number of digits) of an integer.
if (String(num).includes("t")){
    console.log(String(num.length +4))
}else {
    (console.log(String(num).length))
}
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let nums = 867.5309;
if (String(nums).includes('f')){
    console.log(String(nums.length +2))
    } else {
        (console.log(String(nums).length -1))
    }
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(nums).includes(".")){
    console.log(String(nums).length -1);
} else {
    console.log(String(nums).length);
}