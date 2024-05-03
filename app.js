// Import Libary classes, book class, AudioBook class, Games class, Movie class, Music class

const { Book } = require("./Book");
const { Libary } = require("./Library");
const { Media } = require("./Media");

// Create instances of classes
// Lord of the Rings as an instance of book class

let lotr = new Book("fellowship of the Ring", "first");

console.log(lotr);
// Do things with those instances

// Create an instance of a libary
// add media instances into the Library

let libaryInstance = new Libary();
libaryInstance.books.push(lotr);

console.log(libaryInstance);

// Log the data in the Library
