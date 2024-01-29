/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
    let numbers = (20);

    for (let i = 0; i <= 20; i++ ) {
      console.log(i) 
    } 
    
    let nums = 29
    for (let i = 3; i <= 29; i = i + 2){
      console.log(i)
    }
    
    let num = 12;
    for (let i = 12; i >= -14; i-= 2) {
      console.log(i)
    }
    
    let chall = 50;
    for (let i = 50; i >= 20; i--){
      if (i % 3 === 0){
      console.log(i);
    }
    }
    
    
    
    /*Exercise #2: 
    Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].
    
    
    Construct ``for`` loops to accomplish the following tasks:
      a. Print each element of the array to a new line.
      b. Print each character of the string - in reverse order - to a new line. */ 
    let word = "LaunchCode";
    let arr = [1, 5, 'LC101', 'blue', 42];
    let reversed = "";
    
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
    
    for (let i = word.length - 1; i >= 0 ; i--){
      
    console.log(word[i])
    }
    
    
    /*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
      a. One array contains the even numbers, and the other holds the odds.
      b. Print the arrays to confirm the results. */
      
      let things = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
    let even = ""; //leave this as open parenthese, otherwise the value will print with the along the numbers we are deparating.
    let odd = "";
    
    for (let i = things.length - 1; i >= 0; i--) {
       if (things[i] % 2 === 0) { //in this if statement, things determines (i) the modulus takes integers of 2 or in this case even, because it starts at 0.
          even = things[i] + " " + even; // that way when printed down here, it will be just the even numbers
       } else {
          odd = things[i] + " " + odd;
       }
    }
    
    console.log("Even values: " + even.trim());
    console.log("Odd values: " + odd.trim());

    