const inputBox = document.getElementById("task");
const listContainer = document.getElementById("list_container");



function addTask(){
    if(inputBox.value == ""){
        alert("please enter a task");
    }else{

        //adding task
        let li = document.createElement('li');
        li.innerHTML  = inputBox.value;
        listContainer.appendChild(li);
        

        //removing task
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        inputBox.value = "";
        span.addEventListener("click",function(){
            li.remove();
        })
    }
    savedata();
    
}   

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



