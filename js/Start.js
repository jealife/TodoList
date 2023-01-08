var start = document.getElementById("add")
var taskTop = document.getElementById('list')
var home = document.getElementById('home')
var closeAddTask = document.getElementById('close');
var closeTaskList = document.getElementById('closeTasklist');







add.style.display='none';
taskTop.style.marginTop='150vh';


// close add task  interface
closeAddTask.addEventListener("click", function closeadditem() {
    home.style.transition = '2s';
    home.style.display='block';
    taskTop.style.marginTop = '150vh';
    add.style.display='none'
    start.style.display='block'
    
});

// close  list item
