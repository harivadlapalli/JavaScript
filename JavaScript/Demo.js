function letExample() {
    let letVariable = "I am a let variable";
    if (true) {
        console.log(letVariable);
    }
    console.log(letVariable); // ReferenceError: letVariable is not defined
}

function varExample() {
    if (true) {
        var varVariable = "I am a var variable";
    }
    console.log(varVariable); // varVariable is accessible outside the block scope
}

varExample(); // Outputs: "I am a var variable"


