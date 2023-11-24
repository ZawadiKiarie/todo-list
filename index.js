let submit = document.getElementById('submit');
let newTask = document.getElementById('task');
const listContainer = document.getElementById('tasks');
let form = document.getElementById('taskForm');

submit.disabled = true;

newTask.addEventListener('input', ()=>{
  submit.disabled = false;
})

form.addEventListener('submit', (event)=> {
  let list = document.createElement('li');
  list.innerHTML = newTask.value;
  listContainer.appendChild(list);
  event.preventDefault();
  newTask.value = '';
  return false;
});


