let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let newC = [];
newC = holdCabinet1.concat(holdCabinet2)
console.log(newC)
    newC = holdCabinet2.concat(holdCabinet1);
    console.log(newC)
        console.log(holdCabinet1.concat(holdCabinet2, holdCabinet1))
        console.log(holdCabinet1)
        console.log('BREAK POINT')
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
let slice1 = holdCabinet1.slice(1,2);
let slice2 = holdCabinet2.slice(2);
console.log(slice1);
console.log(slice2);
//slice will not change the original array, it will copy what you have "sliced" and produce a new array.//

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log(holdCabinet1)

holdCabinet2.sort()
console.log(holdCabinet2)

//reverse takes the original array and flips it front to back, back to front, with the order of arrays unchanged//

//sort will take the array and put it into increasing alphabetical or numerical order (for the most part)//

//neither alter the original array//