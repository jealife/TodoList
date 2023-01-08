var start = document.getElementById("start")
var add = document.getElementById("add")


// var items = document.getElementsByClassName(".items")
var title = document.getElementById('title')
var descript = document.getElementById('text')


var showlistetask=document.getElementById('listItems')
var taskList = document.getElementById('tasklist');

var newtask=document.getElementById('newtask')
newtask.style.display='none';

taskList.style.marginTop='100vh';

newtask.addEventListener("click", function(){
    start.style.display = 'none'
    newtask.style.display='none';
    add.style.display='block'
    add.style.display = 'none';
    taskTop.style.marginTop = '0';
    taskList.style.marginTop = '100vh';
    home.style.transition = '1.5s'
})

start.addEventListener("click", function () {
    // taskTop.style.display='flex'
    start.style.display = 'none'
    add.style.display = 'block';

    taskTop.style.marginTop = '0';
    
    home.style.display='none';
    home.style.transition = '1.5s'
})


add.addEventListener("click",function() {
    // taskTop.style.display='flex'
    var contList=document.getElementById('items')
    var item = document.createElement('div')
    item.classList.add("item")
    
    contList.appendChild(item)
    let titre = document.createElement("h2")
    let para = document.createElement("p")

    titre.innerHTML = title.value;
    para.innerHTML = descript.value;
    item.appendChild(titre)
    item.appendChild(para)
    
    console.log(titre + " " + para)
    title.value="";
    descript.value=""
    

    showlistetask.classList.add('active')


})

showlistetask.addEventListener("click", function openList () {
    taskList.style.marginTop = '0';
    home.style.display='none';
    add.style.display='none'
    start.style.display='none'
});


closeTaskList.addEventListener("click", function closelist () {
    taskList.style.marginTop = '100vh';
    taskTop.style.marginTop = '100vh';
    home.style.display='block';
    add.style.display='none'
    newtask.style.display='none';
    start.style.display='block'
});