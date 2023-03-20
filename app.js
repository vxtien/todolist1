const input = document.getElementById('input');
const button = document.getElementById('button');
const todoList = document.getElementById('todo-list');

button.addEventListener('click', addTodo);

function addTodo() {
  const newTodoEnter = input.value.trim();
  if (newTodoEnter === '') {
    return;
  }

  const p = document.createElement('p');

  const newTodo = document.createElement('span');
  newTodo.innerText = newTodoEnter; 

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteTodo);

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', completeTodo);

  p.appendChild(newTodo);
  p.appendChild(deleteButton);
  p.appendChild(completeButton);
  todoList.appendChild(p); 
}

function deleteTodo(event) {
  const p = event.target.parentNode;
  todoList.removeChild(p);
  console.log(p);
}

function completeTodo(event) {
  const p = event.target.parentNode;
  p.classList.toggle('completed');
}