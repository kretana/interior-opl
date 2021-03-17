const form= document.querySelector("#task-form");
const taskInput=document.querySelector("#taskinput");
const tasklist=document.querySelector(".collection");
const filter=document.querySelector("#taskfilter");
const delButton=document.querySelector("#clearbutton");
loadEventListeners();
function loadEventListeners(){
    form.addEventListener('submit',addTask);
    tasklist.addEventListener('click',removeTab);
    delButton.addEventListener('click',deleteTabs);
    filter.addEventListener('keyup',filterTask);

}
function filterTask(e){
    //ajo qe shkruhet tek pjesa e filter
    const text=e.target.value.toLowerCase();
    //behet nje loop me gjithe elementet e listes
    document.querySelectorAll('.collection-item').forEach(function(task){
        //elementet nje nga nje ne liste kapen me item
        const item= task.firstChild.textContent;
        //index of i krahason
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
    

    e.preventDefault();
}

function addTask(e){
    if(taskInput.value===''){
        alert("Don't forget to add a task");
    }
    else{
    const li=document.createElement("li");
    li.className="collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link=document.createElement("a");
    link.className="delele-item secondary-content";
    link.innerHTML="<i class='fa fa-times' ></i>";
    li.appendChild(link);
    tasklist.appendChild(li);
    taskInput.value="";
    

}
    e.preventDefault();
}
function removeTab(e){
    if(e.target.parentElement.classList.contains='delete-item'){
        e.target.parentElement.parentElement.remove();
    }
    
   
    e.preventDefault();
}
function deleteTabs(e){
    if(e.target.classList.contains="clear-task"){
        tasklist.removeChild(tasklist.firstChild);
    }
    e.preventDefault();
}