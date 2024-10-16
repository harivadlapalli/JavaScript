// Finding matches in Arrays
// Call method and get a single value
// Array.includes( searchElement [, fromIndex] ) returns Boolean
// Array.indexOf( searchElement [, fromIndex] ) returns -1 or index of first match

// LOOP and return a single value - provides opportunity for more detailed match
// Array.some( callBack [, thisArg] ) returns Boolean
// Array.find( callBack [, thisArg] ) returns value from Array or undefined

let names = ['Walter', 'Jesse', 'Saul', 'Gus', 'Skylar', 'Marie', 'Todd', 'Badger', 'Pete'];
let log = console.log;

// 1. Find out if 'Todd' or 'Steve' is in the Array

let bool = names.includes('Todd');
//log(bool);
// 2. Find out what positions in the Array are 'Gus' or 'Tuco'
let pos = names.indexOf('Gus');
//og(pos);
// 3. Find out whether anyone in the list has a capital letter 'M' in their name
let some = names.some(name => {
    if(name.indexOf('M') > -1){
        return true;
    }
    //return false;
});
//log(some);
// 4. Find the first name in the list that is more than 5 characters plus after 'Walter'
let find = names.find( name => {
    if(name.length > 5){
        return name;
    }
});
log(find);