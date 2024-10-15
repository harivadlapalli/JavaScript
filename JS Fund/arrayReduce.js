let numbers = [12, 34, 56, 78, 91];
let sum=numbers.reduce((a,b) => a+b,0);
let evenOrOddResults = numbers.reduce((accumulator, current) => {
    return accumulator + (current % 2 === 0 ? current + ": is even\n" : current + ": is odd\n");
}, "");

console.log(evenOrOddResults);

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Gross Pointe Blank', 
    'Eternal Sunshine of the Spotless Mind', 'Memento', 'Dog Soldiers', 'The Host', 
    'Gran Torino', 'Close Encounters of the Third Kind', 'Good Will Hunting', 'Layer Cake', 
    'Casino Royale', 'Almost Famous'];
    let first1 = movies.reduce((current, item) => {
        // Check if the item starts with "a" and if it's lexicographically smaller than the current value
        return item.toLowerCase().startsWith("a") && (current === "" || item < current) ? item : current;
    }, "");
    console.log('First movie is:', first1); 

let sum1 = numbers.reduce(function(passedIn, item){
    console.log(passedIn,item);
    return passedIn+item;
},0);

console.log('Total is:', sum, '\n');

let firstMovie = movies.reduce((first, current) => {
    return first < current ? first : current;
});
console.log('First movie is:', firstMovie);  
const values = [10, 20, 30, 40];
var sumValues = values.reduce((a,b) => a+b,0);
console.log("Sum of values: "+sumValues);
const numbers1 = [3, 6, 2, 8, 4, 10];
var maxValue = numbers1.reduce((a,b) => a>b ? a : b,numbers1[0]);
console.log("Max values is : "+maxValue);
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let fruitCount = fruits.reduce((acc, fruit) => {
    // If the fruit exists in the accumulator, increment its count, otherwise set it to 1
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // Initial value is an empty object

console.log("Fruit Count:", fruitCount);