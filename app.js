const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

const deleteCompleted = document.getElementById("delete-comp");

let todoList = [];


button.addEventListener("click", add);
deleteCompleted.addEventListener("click", deleteComp);



function add() {
  const newTodoEnter = input.value.trim();
  if (newTodoEnter === "") {
    return;
  }
  todoList.push({
    todo: newTodoEnter,
    isComplete: false,
  });
  input.value = "";
  renderTodoList();
  activeCount();
}


function deleteItemFromList(index) {
  todoList.splice(index, 1);
  renderTodoList();
  activeCount();
}

function completeTodo(index) {
  todoList[index].isComplete = !todoList[index].isComplete;
  renderTodoList();
}


function deleteComp() {
  todoList = todoList.filter((item) => {
    return !item.isComplete;
  });
  renderTodoList(todoList);
  activeCount();
}


function renderTodoList() {
  list.innerHTML = "";
  todoList.map((item, index) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`${item.todo}`));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✗";
    deleteButton.addEventListener("click", function () {
      deleteItemFromList(index);
    });
    p.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newTodo = prompt("Edit todo", item.todo);
      if (newTodo) {
        item.todo = newTodo;
        renderTodoList();
      }
    });
    p.appendChild(editButton);

    const completeButton = document.createElement("input");
    completeButton.type = "checkbox";
    completeButton.checked = item.isComplete;
    completeButton.addEventListener("click", () => completeTodo(index));
    p.appendChild(completeButton);
    if (item.isComplete) {
      p.classList.add("completed");
    }
    activeCount();
    

    list.appendChild(p);
    
  });
  
}
renderTodoList(todoList)

document.getElementById("all").addEventListener("click", () => {
  renderTodoList(todoList);
  console.log(todoList);
});

document.getElementById("active").addEventListener("click", () => {
  const active = todoList.filter((item) => item.isComplete === false);
  renderTodoList(active);
  console.log(active);
});


document.getElementById("completed").addEventListener("click", () => {
  const completed = todoList.filter((item) => item.isComplete === true);
  renderTodoList(completed);
  console.log(completed);
});


function activeCount() {
  active = todoList.filter((item) => item.isComplete === false);
  const countElement = document.getElementById("count");
  countElement.innerText = active.length.toString() + " item left";
}

document.getElementById("toggle-all").addEventListener("click", toggleAll);

function toggleAll() {
  const allComplete = todoList.every((item) => item.isComplete);
  todoList.forEach((item) => {
    item.isComplete = !allComplete;
  });
  renderTodoList();
}


