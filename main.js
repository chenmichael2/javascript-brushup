console.log("script is working in main.js");
let clickButton = document.querySelector("button");
// let orderedList = document.getElementsByClassName('ordered-list');
let orderedList = document.
let createListItem = document.createElement("li");
// let containText = createListItem.textContent = "hello";
let inputField = document.getElementById('input-field');

console.log(orderedList);
console.log(inputField.value);

clickButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this button works");
    console.log(inputField);
    let value = inputField.value;
    console.log(value);
})

