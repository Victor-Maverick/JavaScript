
const taskList = document.querySelector("#task-list ul");
console.log(taskList);
taskList.addEventListener('click', (e) => {
    console.log(e)
    let className = e.target.className;
    console.log(className);
    if (className === "delete"){
        let li = e.target.parentElement;
        taskList.removeChild(li);
    }
})

const searchTask = document.forms["search-tasks"];
const listOfTasks = document.querySelectorAll("#task-list li .name")
console.log(listOfTasks);
searchTask.addEventListener('keyup', (e) => {
    let inputText = e.target.value.toLowerCase();
    listOfTasks.forEach(task => {
       let title = task.textContent.toLowerCase();
       let isIncludeInputText = title.includes(inputText)
        let parentNode  = task.parentNode
        
        if(isIncludeInputText){
            parentNode.style.display = "block";
        }else {
            parentNode.style.display = "none";
        }
    })
})



const addTask = document.forms["add-task"];
console.log(addTask)
addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = addTask.querySelector("input").value.trim();
    if(inputValue) {
        const liTag = document.createElement("li")
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");
        const checkBox = document.createElement("input")
        checkBox.type = 'checkbox';
            
        firstSpan.classList = 'name';
        secondSpan.className = 'delete';
        liTag.appendChild(firstSpan)
        liTag.appendChild(checkBox)
        liTag.appendChild(secondSpan)

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";
        console.log(liTag)
        taskList.appendChild(liTag)
        saveTasks();
        addTask.reset()
    
    }
})

function saveTasks() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll("li");
    for (let count = 0; count < taskItems.length; count++) {
        const taskTitle = taskItems[count].querySelector(".name").textContent;
        tasks.push(taskTitle);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
