console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.getElementById('ordered-list');
let inputField = document.getElementById('input-field');


clickButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("this button works");
    console.log(inputField);
    let value = inputField.value;
    console.log(value);
    let orderedList = document.getElementById('ordered-list');
    let createListItem = document.createElement("li");
    console.log(orderedList);
    orderedList.appendChild(createListItem).textContent = value;
})

