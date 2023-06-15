// allows us to update the DOM virtually

//create a variable 3 different ways
// 1. using "let" <---- allows the variable to change
//2. using "const" <---- Short for "CONSTANT"
// 3. using "var" <---- WE DO NOT USE ANYMORE

let bill = "24"

const tax = 10

let result = bill + tax 

// different types of values
// 1. integer <--- any number
// 2. string <----- anything inside of a quote "string"
// 3. object <---- anything between 2 {} that has a property and a value
// 4. array <--- anything between [] that has multiple objects or strings or integers or more arrays

const person1 = {
    firstname: "Carlos",
    lastname: "Banks"
}

const person2 = {
    firstname: "Josh" ,
    lastname: "Murray"
}

const people = [person1, person2, "Nick", 34, {firstname: "Blue"}]

console.log("Hi from javascript file")

////////

let locationh2 = document.getElementById("location")
locationh2.innerHTML = "I live in the hood now."

console.log(locationh2)