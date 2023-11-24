const submit = document.getElementById('submit');
const newTask = document.getElementById('task');
const listContainer = document.getElementById('tasks');
const form = document.getElementById('taskForm');

submit.disabled = true;

newTask.addEventListener('input', ()=>{
  submit.disabled = false;
})

form.addEventListener('submit', (event)=> {
  const list = document.createElement('li');
  list.textContent = newTask.value;
  listContainer.appendChild(list);
  event.preventDefault();
  newTask.value = '';
  return false;
});


