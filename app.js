const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

const deleteCompleted = document.getElementById('delete-comp')

let todoList = [
  {
    todo: 123,
    complete: true
  },
  {
    todo: 2,
    complete: false
  }
];

button.addEventListener('click', add);
deleteCompleted.addEventListener('click', deleteComp);


function add() {
  const newTodoEnter = input.value.trim();
  if (newTodoEnter === "") {
    return;
  }
  todoList.push({
    todo: newTodoEnter,
    complete: false
  });
  input.value = "";
  renderTodoList();
  update();
console.log(todoList);

}
console.log(todoList);

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

// const allTodo = document.getElementById('all');
// const todoActive = document.getElementById('active');
// const todoCompleted = document.getElementById('completed');

let todoActive = [];
let todoCompleted = [];

document.getElementById('all').addEventListener('click',()=>{

  renderTodoList(todoList)
})

function update() {
  todoActive = todoList.filter((item) => {
      return item.complete;
    
  })
  todoCompleted = todoList.filter((item) => {
      return !item.complete;
  })

  document.getElementById("active").addEventListener('click',()=>{
    renderTodoList(todoActive)
  });
  document.getElementById("completed").addEventListener('click',()=>{
    renderTodoList(todoCompleted)
  });

}


















