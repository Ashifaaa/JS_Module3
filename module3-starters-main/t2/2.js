document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("target");

    // creates list items
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");

    listItem1.textContent = "First item";
    listItem2.textContent = "Second item";
    listItem3.textContent = "Third item";

    listItem2.classList.add("my-item");


    // appends the list items
    targetElement.appendChild(listItem1);
    targetElement.appendChild(listItem2);
    targetElement.appendChild(listItem3);
});
