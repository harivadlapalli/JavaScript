let nums = [10,25,14,9,35];
let smallNums1 = nums.filter(num => num%2 === 0);
let smallNums = nums.filter(num => num%2 === 0).map(i=>console.log("With Map:"+i));
console.log(smallNums1);
console.log(smallNums);
let numbers = [23, 45, 14, 66, 94, 33, 4, 9];
let breakPoint = 30;

let smallNumbers = numbers.filter(function(num) {
    return num < breakPoint;
});

let bigNumbers = numbers.filter(function(num){
    return num>breakPoint
});
let oddNumbers = numbers.filter(function(num){
    return num %2 !== 0;
});

console.log('\nSmaller than 30:', smallNumbers);
console.log('\nLarger than 30:', bigNumbers);
console.log('\nOdd numbers:', oddNumbers);

