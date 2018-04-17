// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// load all event listeners implementation
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask);

    // Clear task event
    clearBtn.addEventListener('click', clearTasks);

    // Filter task event
    filter.addEventListener('keyup', filterTasks);
}


// Add task
function addTask(event) {
    if (taskInput.value === '') {
        alert('Add a task!');
    }

    // Create li element
    const li = document.createElement('li');

    // add class
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element
    const link = document.createElement('a');

    // add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    console.log(li);

    event.preventDefault();
}

// Store in local storage
function storeTaskInLocalStorage(task) {
    // noinspection JSAnnotator
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove task
function removeTask(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            event.target.parentElement.parentElement.remove();
        }
    }
}

// Clear tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(event) {
    // getting the text from
    const text = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) !== -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
}