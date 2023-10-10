"use strict";
//<input><button><ul>要素の取得//
const inputElement = document.querySelector("#new-todo");
const addButtonElement = document.querySelector("#add-button");
const todoListElement = document.querySelector("#todo-list");

//To-Do Listの構造定義//
let todoList = [];

const renderTodoList = () => {
    todoListElement.innerHTML = "";
    todoList.forEach((todo, index) => {
        const todoElement = createTodoElement(todo, index);
        todoListElement.appendChild(todoElement);
    });
};
const addTodo = () => {
    const value = inputElement.value.trim();
    if (value) {
        todoList.push({text: value,completed: false});
        renderTodoList();
        inputElement.value = "";
    }
}
const toggleTodo = (index) => {
    todoList[index].completed = !todoList[index].completed;
    renderTodoList();
}
const deleteTodo = (index) => {
    todoList.splice(index,1);
    renderTodoList();
}



//HTML の要素を生成(追加、削除ボタン)//
const createTodoElement = (todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = todo.text;

    const completeButton = document.createElement("button");
    completeButton.textContent = todo.completed ? "undo" : "complete"
    completeButton.classList = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-2";
    completeButton.addEventListener("click",() => toggleTodo(index));
    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-2";
    completeButton.addEventListener("click", () => deleteTodo(index));
    li.appendChild(deleteButton);

    return li;
};

addButtonElement.addEventListener("click", addTodo);

