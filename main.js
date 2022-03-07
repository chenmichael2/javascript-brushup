console.log("script is working in main.js");

let orderedList = document.querySelector('ol');
console.log(orderedList);
let createListItem = document.createElement("li");
let containText = createListItem.textContent("hello");
orderedList.appendChild(createListItem);


// const div = document.createElement("div");
// div.innerText = "Hello World";
// document.body.append(div);