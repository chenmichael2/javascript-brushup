console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.getElementsByClassName('ordered-list');
let createListItem = document.createElement("li");


console.log(orderedList);

clickButton.onclick = () => {
    console.log("hello");

}
