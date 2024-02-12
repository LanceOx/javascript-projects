// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(numerator, denominator) {
    try {
        if (denominator === 0){
            throw ("The denominator was divided by 0.")
        }
        let result = numerator / denominator;
        console.log(result)
    } catch (error) {
        console.error("Error:", error);
    }
}

divide(600, 2);
divide(2345, 0)

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
