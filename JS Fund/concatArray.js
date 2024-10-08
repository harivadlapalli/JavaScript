let arr = [1,2,3,4,5];
let double = arr.map(num => num+2);
console.log(double);
let change = arr.concat(double);
console.log('Change:'+change);
let newChange = [].concat(arr,change);
console.log(newChange);
let sentence = "code sets up a simple page with styles specifically for different weather conditions";
console.log(sentence.split("").sort());      