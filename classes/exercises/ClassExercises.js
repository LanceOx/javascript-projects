// Define your Book class here:
class Book {
    constructor(title, author, copyright, ISBN, pages, checkedout, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkedout = checkedout;
        this.discarded = discarded;
    }
    checkout(uses=1){
        this.checkedout += uses;
    }
   
}
class Manual extends Book {
    constructor(title, author, copyright, ISBN, pages, checkedout, discarded){
        super(title, author, copyright, ISBN, pages, checkedout, discarded)
    } 
    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}
class Novel extends Book {
    constructor(title, author, copyright, ISBN, pages, checkedout, discarded){
        super(title, author, copyright, ISBN, pages, checkedout, discarded)
    }
    dispose(checkedout){
        if (this.checkedout > 100){
            this.discarded = "yes";
        } return checkedout
    } 
}


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:
let myFav = new Book('Pride and Prejudice', 'Jane Austen', 1813,
 '1111111111111', 432, 32, 'No')

 let buildShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013,
 '0000000000000', 1147, 1, 'No')

myFav.checkout(5);
//myFav.dispose();
console.log(myFav)

buildShip.checkout(100);
buildShip.dispose();
console.log(buildShip)
// Code exercises 4 & 5 here: