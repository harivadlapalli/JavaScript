var arr = ["Hari", "Geetha", "Genic", 'Hari',"AAdhya","Honey","Vinai","Madhu","Chinna"];
arr.forEach(function(value, index, array){
    //console.log(index, array);
    //console.log(index,value);
    if(value === 'Hari'){
        value = value.toUpperCase();
    }else{
        value = value.toLocaleLowerCase(); 
    }
    console.log(index,value);
});
//map()
console.log("map function");
let upperCase = arr.map(f => f.toUpperCase());
console.log(upperCase);
let num = [1,2,3,4,5];
let doubleNums = num.map(function (nums){
return nums+2;
});
console.log(doubleNums);
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  let userNames = users.map(user => user.name);
  console.log(userNames); 