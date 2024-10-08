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
// Find the first movie alphabetically

let sum1 = numbers.reduce(function(passedIn, item){
    console.log(passedIn,item);
    return passedIn+item;
},0);

console.log('Total is:', sum, '\n');

let first;
console.log('First movie is:', first);  
