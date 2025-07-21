let myTasks=[]
const list =document.getElementById("list")
const button=document.getElementById("btn")
const inputAddTask= document.getElementById("input-add")

button.addEventListener("click", function(){
    let task = inputAddTask.value.trim()
    if(task!==""){
        myTasks.push(task)
    render()
}
    inputAddTask.value=""
 })
function render(){
    let listedTask=""
    for (let i=0; i<myTasks.length; i++){
        listedTask+= `<li class="list-item-border"> ${myTasks[i]}</li>`
    }
    list.innerHTML = listedTask
}
 

