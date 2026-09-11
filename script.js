console.log("Hello, world.");
console.log("First JavaScript");


const myName = "Emelia";
    myNumber = 995712345,
    myAdress = "Brgy.Bonifacio,Cadiz City";
    
let age = 20;

console.log("Name: " + myName);
console.log("Age: " + age);
console.log("Number: " + myNumber);
console.log("Address: " + myAdress);

//Functions
function greet(name) { 
    return "Good morning, ${name}";
}
console.log(greet(myName));

function mdas  (num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;

    return ('values: ${num1} and ${num2}.Product ${m}, Quotient: ${d},sum: ${a}, diff: ${s}');
    
}

 console.log (mdas(6, 4));

