// === 1.1 ES6 - Methods ===

// Method: a function inside an object
const lab = {
  title: "Syntax Trees",
  describe() {
    return `Lab: ${this.title}`;
  }
};
console.log(lab.describe()); 

// Arrow function as method (not recommended with 'this')
const student = {
  name: "Ioana",
  sayHello: () => {
    return `Hello, I'm ${this.name}`; 
  },
  sayHello1: () => {
    return `Hello, I'm ${student.name}`; 
  }
};
console.log(student.sayHello()); 
console.log(student.sayHello1()); 


// Function inside class 
class Course {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return `Course: ${this.name}`;
  }
}
const compilerCourse = new Course("Compilers");
console.log(compilerCourse.getDetails());


// === 1.2 var, let, const ===

// var declarations are function-scoped and can be redeclared
var language = "C";
var language = "Python";
console.log("var language:", language);

// let declarations are block-scoped and cannot be redeclared in the same block
let version = "3.9";
version = "3.10";
console.log("let version:", version);

// const declarations are block-scoped, must be initialized, and cannot be reassigned
const compiler = "GCC";
console.log("const compiler:", compiler);
// in a const object declarations, object properties can still be changed


// === 1.3 Spread Operator ===

// Using spread on arrays makes a shallow copy, expanding existing elements
const imperative = ["C", "Pascal"];
const declarative = [...imperative, "Haskell"];
console.log("Programming Languages:", declarative);

// Using spread on objects makes a shallow copy of enumerable own properties
const course = { name: "Compilers", year: 3 };
const extendedCourse = { ...course, credits: 6 };
console.log("Course details:", extendedCourse);


// === 1.4 Objects - Iteration and Deep Copy ===

const prof = {
  name: "Dr. Popescu",
  subject: "Programming Languages",
  office: {
    building: "B",
    room: 212
  }
};

// Iterating over an object's own enumerable properties with for...in
for (const key in prof) {
  console.log(`${key}: ${prof[key]}`);
}

// Deep copy via JSON methods works for plain data but loses functions, Dates, etc.
const profCopy = JSON.parse(JSON.stringify(prof));
profCopy.office.room = 101;

console.log("Original office:", prof.office.room);
console.log("Copied office:", profCopy.office.room);


// === 1.5 Arrays - Accessor, Iteration, Mutator ===

const langs = ["C", "Java", "Python", "Rust"];

// Accessor methods – return information about the array or create new arrays without modifying the original array
console.log("indexOf 'Java':", langs.indexOf("Java"));
console.log("slice(1, 3):", langs.slice(1, 3));
// some others accesor methods are concat and join

// Iteration methods - return new arrays or values
langs.forEach(lang => console.log("Language:", lang));
const upperLangs = langs.map(lang => lang.toUpperCase());
console.log("Uppercase langs:", upperLangs);

// Mutator methods - change the original array
langs.push("Go");
langs.splice(2, 1);
console.log("Modified langs:", langs);


// === 1.6 Callback vs Promises ===

// calls the callback after a delay to simulate delayed parsing
function parseCode(callback) {
  setTimeout(() => {
    callback("Callback: code parsed successfully");
  }, 10000);
}
parseCode(console.log);

// returns a Promise that resolves after a delay to simulate delayed compilation
function compileCode() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Promise: code compiled successfully"), 1000);
  });
}
compileCode().then(console.log);
// .then handle fulfilled promises, .catch handle failed promises


// === 1.7 Async/Await ===

// returns a Promise that resolves after a delay to simulate async execution
function runProgram() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async: program executed correctly"), 1000);
  });
}

// waits for runProgram to finish and logs the result
async function executeLab() {
  const result = await runProgram();
  console.log(result);
}
executeLab();


// === 1.8 Closures ===

// returns a function that keeps track of an incrementing ID
function createIdGenerator() {
  let currentId = 1000;
  return function () {
    currentId += 1;
    console.log("Generated ID:", currentId);
  };
}

// calling createIdGenerator() gives us a function that remembers 'currentId'
const generateId = createIdGenerator();

generateId(); 
generateId(); 
console.log(generateId.currentId); 



// === 1.9 React useState & useRef ===

/*
useState: lets you save a value so that when it changes, the screen updates.
useRef: lets you keep a reference to something (like an input box) without causing updates.
*/
