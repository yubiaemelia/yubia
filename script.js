console.log("Hello mundo")
const Myname = "Emelia";
console.log("name: " + Myname);
let age = 20;
let number = "09661636647";
console.log("Age: " + age)
console.log("Number: " + number);

const address = "Brgy. Andres Bonifacio,Cadiz City";
console.log("Address: " + address);

function greet(name) {

    return `good morning, ${name}`;


}
console.log(greet("rene"))

function mdas(a, b) {
    let mul = a * b;
    let div = a / b;
    let sum = a + b;
    let sub = a - b;
    return (`values: ${a} and ${b}. \n product: ${mul}, \n qoutient: ${div}, \n sum: ${sum},\n difference: ${sub}`);
}
console.log(mdas(5, 3));

const heading = document.querySelector("h1");
console.log(heading);

const contact = document.querySelector(".contact");
const services = document.querySelector(".services");

console.log(heading);
console.log(contact);
console.log(services);

heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
projectHeading.textContent = "My Projects";
