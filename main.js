console.log("script is working in main.js");
let clickButton = document.querySelector("button");
let orderedList = document.querySelector('ol');
let createListItem = document.createElement("li");
let containText = createListItem.textContent = "hello";

orderedList.appendChild(createListItem);


clickButton.onclick = () => {
    console.log("hello");
    orderedList.appendChild(createListItem);
}

// const div = document.createElement("div");
// div.innerText = "Hello World";
// document.body.append(div);