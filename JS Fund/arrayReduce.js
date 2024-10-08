let numbers = [12, 34, 56, 78, 91];
let sum=numbers.reduce((a,b) => a+b,0);
let evenorodd = numbers.reduce(a => a%2===0?console.log(a+":is even"):console.log(a+":is odd"));
console.log(evenorodd);

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
