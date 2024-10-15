let people = [
    { "id": 123, "name": "Rick Deckard", "email": "rick@bladerunner.org" },
    { "id": 456, "name": "Roy Batty", "email": "roy@replicant.io" },
    { "id": 789, "name": "J.F. Sebastian", "email": "jf@fetyler.com" },
    { "id": 258, "name": "Pris", "email": "pris@replicant.io" }
  ];
// Two step version
// Indexof : The indexOf() method in JavaScript is used to find the position (index) of the first occurrence 
// of a specified value within a string or an array.If the value is not found, it returns -1.
//string.indexOf(searchValue, fromIndex);
let replicants = people.filter(person => person.email.indexOf('@replicant.io') > -1);
let names = replicants.map(person => person.name);
console.log("List of replicant names:", names);
// Chain the two steps
let replicantNames = people
  .filter(person => person.email.indexOf('@replicant.io') > -1)
  .map(person => person.name);
console.log("List of replicant names:", replicantNames);