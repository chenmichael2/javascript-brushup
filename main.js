console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.getElementsByClassName('ordered-list');
let createListItem = document.createElement("li");
let containText = createListItem.textContent = "hello";

orderedList.appendChild(createListItem);

console.log(orderedList);
clickButton.onclick = () => {
    console.log("hello");
    orderedList.appendChild(createListItem);
}
