function toCelsius(f){
    return (5/9) * (f-32);
}
let value = toCelsius(77);
let realValue = document.getElementById('celsius').innerHTML=value;
console.log(realValue);
