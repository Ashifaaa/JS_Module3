'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

document.addEventListener("DOMContentLoaded", function () {
    let selectElement = document.getElementById("target");

    for (let i = 0; i < students.length; i++) {
        // creates a new option element
        let optionElement = document.createElement("option");

        // sets the value and text content
        optionElement.value = students[i].id;
        optionElement.textContent = students[i].name;

        // appends the option element to select element
        selectElement.appendChild(optionElement);
    }
});