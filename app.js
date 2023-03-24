const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

const allTodo = document.getElementById('all');
const todoActive = document.getElementById('active');
const todoCompleted = document.getElementById('completed');

const deleteCompleted = document.getElementById('delete-comp')

let todoList = [];

button.addEventListener('click', add);
deleteCompleted.addEventListener('click', deleteComp);

allTodo.addEventListener('click', todos);
todoActive.addEventListener('click', todos);
todoCompleted.addEventListener('click', todos);


function add() {
  const newTodoEnter = input.value.trim();
  if (newTodoEnter === "") {
    return;
  }
  todoList.push({
    todo: newTodoEnter,
    complete: false
  });
  input.newTodoEnter = "";
  renderTodoList();
  console.log(todoList);
}

function deleteItemFromList(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function completeTodo(index) {
  todoList[index].complete = !todoList[index].complete;
  console.log(todoList[index]);
  renderTodoList();
}

function deleteComp() {
  todoList = todoList.filter((item) => {
      return !item.complete;
  })
  add();
  renderTodoList(todoList);

}

function renderTodoList() {
  list.innerHTML = "";
  todoList.map((item, index) => {
    const p =document.createElement('p');
    p.appendChild(document.createTextNode(`${item.todo}`))
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✗';
    deleteButton.addEventListener('click', function(){ deleteItemFromList(index)});
    p.appendChild(deleteButton)

    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newTodo = prompt("Edit todo", item.todo);
      if (newTodo) {
        item.todo = newTodo;
        renderTodoList();
      }
    });
    p.appendChild(editButton)
    
    const completeButton = document.createElement('input');
    completeButton.type = 'checkbox';
    completeButton.checked = item.complete;
    completeButton.addEventListener('click',()=> completeTodo(index));
    p.appendChild(completeButton);
    if (item.complete) {
      p.classList.add('completed')
    }

    list.appendChild(p)
  })
}

function todos() {
  todoList.filter((item)=> {
    if (item.complete == true) {
     
    }
  })
}





















