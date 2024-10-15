let arr = [10, 5, 6, 4, 6, 10];

// Using Set to remove duplicates
let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);  // Output: [10, 5, 6, 4]
// using indexof
/*The reason the sorting is not working as expected is that the sort() method in JavaScript, 
by default, sorts array elements as strings, not as numbers. So when you sort a numeric array 
without providing a custom comparison function, it will sort the elements lexicographically 
(like strings), which leads to unexpected results for numbers.
For example, [10, 4, 6] would be sorted as [10, 4, 6] (because 10 comes before 4 
    when compared as strings).
    output : Filtred array:10,5,6,4
Sorted Array:10,4,5,6 */
let uniqueArr1 = arr.filter((item,index) => arr.indexOf(item) === index);
console.log("Filtred array:"+uniqueArr1);
let sortedArray = arr.sort((a, b) => a - b);
console.log("Sorted Array:"+sortedArray);
let arr1 = [10, 5, 6, 4, 6, 10];

let uniqueArr2 = arr1.reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(uniqueArr2);  // Output: [10, 5, 6, 4]
