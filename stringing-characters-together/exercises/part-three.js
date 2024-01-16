
//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1) + language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
let language1 = (language.charAt(0))+ (language.charAt(4));
console.log(language1)
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let lng = 'JS'
console.log(`"The abbreviation for '${language}' is '${lng}'.`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`"The '${language}' can be shown in different ways such as; ${language1} and ${lng} `)
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let notTitleCase2 = (notTitleCase.slice(0,5))
let notTitleCase3 = (notTitleCase.slice(6,10));
console.log(notTitleCase2.replace('t', 'T'),  notTitleCase3.replace('c', 'C'));