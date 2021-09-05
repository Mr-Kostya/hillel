
const form = document.getElementById("list-form");
const inputElement = document.getElementById("text-input");
const listElement = document.getElementById("list");

form.addEventListener("submit", addToList);

function addToList(event) {
    event.preventDefault();
    if (!inputElement || !listElement) return;

    const value = inputElement.value;

    const listItem = document.createElement("li");
    listItem.innerText = value;
    listElement.appendChild(listItem);
    inputElement.value = "";
}



