//Inside the JavaScript file, create an empty array that will be used to store the to-do list items.

const todoList = [];

//Write a function that adds a new item to the to-do list array. This function should select the input field from the HTML, get the value of the input field, add the value to the to-do list array, and clear the input field.

    function addItem() {
    const inputElem = document.getElementById("new-item-input");
    const newItem = inputElem.value;
    todoList.push(newItem);
    inputElem.value = "";
    console.log(todoList) ;
    }

//Attach an event listener to the "Add Item" button element so that when it is clicked, the addItem() function is called.

    const addItemBtn = document.getElementById("add-item-btn");
    addItemBtn.addEventListener("click", addItem);

//Write a function that displays the items in the to-do list array on the web page. This function should select the unordered list element from the HTML, loop through the to-do list array, and create a new list item element for each item in the array.

    function displayTodoList() {
    const todoListElem = document.getElementById("todo-list");
    todoListElem.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
    const listItemElem = document.createElement("li");
    listItemElem.innerHTML = todoList[i];
    todoListElem.appendChild(listItemElem);
        }
    }

//Attach an event listener to the document object so that when the web page is loaded, the displayTodoList() function is called.

    document.addEventListener("DOMContentLoaded", displayTodoList);

//Write a function that removes an item from the to-do list array. This function should select the list item element from the HTML, get the index of the item in the to-do list array, remove the item from the array, and call the displayTodoList() function to update the web page.

    function removeItem(event) {
    const itemElem = event.target;
    const itemIndex = Array.from(itemElem.parentNode.children).indexOf(itemElem);
    todoList.splice(itemIndex, 1);
    displayTodoList();
    }
//Attach an event listener to the unordered list element so that when a list item is clicked, the removeItem() function is called.

    const todoListElem = document.getElementById("todo-list");
    todoListElem.addEventListener("click", removeItem);
