console.log("script is working in main.js");

const orderedList = document.querySelector("ol");
const createListItem = document.createElement("li");
const node = document.createTextNode("this is a new li");
createListItem.appendChild(node);