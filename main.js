
let clickButton = document.querySelector("button");
let orderedList = document.querySelector('ol');
let createListItem = document.createElement("li");
let containText = createListItem.textContent = "hello";

orderedList.appendChild(createListItem);


clickButton.onclick = () => {
    console.log("hello");
    orderedList.appendChild(createListItem);
}
