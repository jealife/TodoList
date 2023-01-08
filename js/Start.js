var start = document.getElementById("add")
var taskTop = document.getElementById('list')
var home = document.getElementById('home')
var closeAddTask=document.getElementById('close');


// close add task  interface
closeAddTask.addEventListener("click",function(){
    taskTop.style.marginTop = '150vh';
    home.style.marginTop = '0';
    start.innerText = "Start";
    start.style.transition='1s';
});



start.addEventListener("click", function () {
    // taskTop.style.display='flex'

    if (start.innerText == "Start") {
        taskTop.style.marginTop = '0';
        home.style.marginTop = '150vh';
        home.style.transition = '1.5s'
        start.innerText = 'Add'
    } else  {


    }

})