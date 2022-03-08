console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.getElementsByClassName('ordered-list');
let createListItem = document.createElement("li");
// let containText = createListItem.textContent = "hello";
let inputField = document.getElementsByClassName('input-field');

console.log(orderedList);
console.log(inputField.value); // this is undefined

clickButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this button works");
    console.log(inputField);
    let value = inputField.value; // still cant read the input
    console.log(value);
})

