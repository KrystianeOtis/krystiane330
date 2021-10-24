//selectors
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners
document.addEventListener('DOMContentLoaded', getTodos);
addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    console.log(todoInput.value);
    if (todoInput.value != "") {
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create list
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //add todo to local storage
        saveLocalTodos(todoInput.value);
        //Completed todo button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-button");
        todoDiv.appendChild(completedButton);
        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("delete-button");
        todoDiv.appendChild(deleteButton);
        //Append buttons to list
        todoList.appendChild(todoDiv);
        //Clear input
        todoInput.value = "";
    }
}

function deleteCheck(e) {
    const item = e.target;
    //delete item
    if (item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        //animation
        // todo.classList.add('fall');
        console.log("todo");
        todo.remove();

        removeLocalTodos(todo);
        todo.addEventListener("click", function() {
            todo.remove();
        });
    }
    //check item
    if (item.classList[0] === 'complete-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "active":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    //check to see if anything is logged
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    //check to see if anything is logged
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        //Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create list
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo);
        //Completed todo button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-button");
        todoDiv.appendChild(completedButton);
        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete-button");
        todoDiv.appendChild(deleteButton);
        //Append buttons to list
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    //check to see if anything is logged
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todo.children[0].innerText);
    // console.log(todos.indexOf("apple"));
}