// json-stringify.js
// Lesser known features when using JSON.stringify()
/* JSON.stringify() Syntax:
JSON.stringify(value, replacer, space);
value: The JavaScript value (object or array) to convert to a JSON string.
replacer (optional): A function that alters the behavior of the stringification process or 
an array of properties to include in the output.
space (optional): Adds indentation, white space, and line breaks to the resulting JSON string for readability
(e.g., a number of spaces or a string like '\t' for tabs).*/

let obj = {name: "Walter", 
    last: "Sobchak", 
    age: 50, 
    angry: true, 
    bestscore: 200, 
    armed: true};

let log = console.log;
let str;

str = JSON.stringify(obj);
log(str);
//log('1', str);
