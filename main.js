console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.getElementsByClassName('ordered-list');
let createListItem = document.createElement("li");
// let containText = createListItem.textContent = "hello";
let inputField = document.getElementsByClassName('input-field');

console.log(orderedList);

clickButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hello");
    let value = inputField.value; // still cant read the input
    console.log(value);
})

