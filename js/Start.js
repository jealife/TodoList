var start = document.getElementById("add")
var taskTop = document.getElementById('list')
var home = document.getElementById('home')

start.addEventListener("click", function () {
    // taskTop.style.display='flex'

    if (start.innerText == "Start") {
        taskTop.style.marginTop = '0';
        home.style.marginTop = '150vh';
        home.style.transition = '1.5s'
        start.innerText = 'Add'
    } else {

    }

})