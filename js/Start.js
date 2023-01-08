var start = document.getElementById("add")
var taskTop = document.getElementById('list')
var home = document.getElementById('home')
var closeAddTask = document.getElementById('close');
var closeTaskList = document.getElementById('closeTasklist');



var showlistetask=document.getElementById('listItems')
var taskList = document.getElementById('tasklist');




add.style.display='none';
taskTop.style.marginTop='150vh';
taskList.style.marginTop='150vh';

// close add task  interface
closeAddTask.addEventListener("click", function closeadditem() {
    taskTop.style.marginTop = '150vh';
    home.style.marginTop = '2rem';
    add.style.display='none'
    start.style.display='block'
    start.style.transition = '1s';
});

// close  list item
closeTaskList.addEventListener("click", function closelist () {
    taskList.style.marginTop = '150vh';
    home.style.marginTop = '2rem';
    add.style.display='none'
    start.style.display='block'
    start.style.transition = '1s';
});

showlistetask.addEventListener("click", function openList () {
    taskTop.style.marginTop = '0';
    home.style.marginTop = '150vh';
    add.style.display='block'
    start.style.display='none'
    start.style.transition = '1s';
});
