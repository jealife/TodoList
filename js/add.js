var start = document.getElementById("start")
var add = document.getElementById("add")


var items = document.getElementsByClassName(".items")
var title = document.getElementById('title')
var descript = document.getElementById('text')


start.addEventListener("click", function () {
    // taskTop.style.display='flex'
    start.style.display = 'none'
    add.style.display = 'block';

    taskTop.style.marginTop = '0';
    home.style.marginTop = '150vh';
    home.style.transition = '1.5s'

    


})
add.addEventListener("click",function() {
    // taskTop.style.display='flex'
    var item = document.createElement('div')
    item.classList.add("item")
    var titre = document.createElement('h2')
    var para = document.createElement('p')
    titre = title.value;
    para = descript.value;
    

    console.log(titre + " " + para)
    title.value="";
    descript.value=";"

})

/*,function addItem () {
    // taskTop.style.display='flex'
    var item = document.createElement('div')
    var t = document.createElement('h2')
    var p = document.createElement('p')
    t = title.value;
    p = descript.value;
    item.appendChild(t)
    item.appendChild(p)
    items.appendChild(item)

    console.log(t + " " + p)

}*/