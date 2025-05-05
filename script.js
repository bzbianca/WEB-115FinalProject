
const submit = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")
let taskTable = document.getElementById("taskTable")

let id = 0; // id num of task
let tasks = [] // object task list
let taskTracker = [] // track which task is which as an array

submit.addEventListener("click", function(){
    let taskName = document.getElementById("taskName")
    if (taskName.validity.valueMissing) {
        taskName.setCustomValidity("Enter a task name.")
    } else {
        taskName.setCustomValidity("")
    }
})


submit.addEventListener("click", function(){
    // create a new blank task object
    const task = {
        id: null,
        name: null,
        priority: null,
        isImportant: null,
        isCompleted: false,
        date: null,
    }
    
    // create date
    let addDate = new Date()
    addDate = `${addDate.getMonth()}/${addDate.getDay()}/${addDate.getFullYear()}`

    // gets all input needed for creating task
    let taskName = document.getElementById("taskName")
    let priority = document.getElementById("priority")
    let important = document.getElementById("important")
    
    id += 1
    taskTracker.push(id)

    // add all input into task object
    task.id = id;
    task.name = taskName.value;
    task.priority = priority.value;
    task.isImportant = important.checked
    tasks.push(JSON.stringify(task))

    // ---adding task to table---
    let newTask = document.createElement("tr") // create row task
    newTask.id = id

    // add information
    let makeTaskName = document.createElement("td") // create task name element
    makeTaskName.innerHTML = taskName.value
    makeTaskName.id = id
    newTask.appendChild(makeTaskName)

    let makePriority = document.createElement("td") // create task priority element
    makePriority.innerHTML = priority.value
    makePriority.id = id
    newTask.appendChild(makePriority)

    let makeDate = document.createElement("td") // create task date element
    makeDate.innerHTML = addDate
    makeDate.id = id
    newTask.appendChild(makeDate)


    let makeOptions = document.createElement("td") // for both the completion and delete buttons
    
    let addStatus = document.createElement("p")
    addStatus.innerHTML = "Done"
    addStatus.id = id
    makeOptions.appendChild(addStatus)
    
    let completeButton = document.createElement("input") // create complete checkbox
    completeButton.type = "checkbox" // makes input into a checkbox
    completeButton.innerHTML = "Done"
    completeButton.id = "complete" + String(id) // gives button an id
    makeOptions.appendChild(completeButton)

    let deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.id = id
    deleteButton.innerHTML = "Delete"
    makeOptions.appendChild(deleteButton)
    newTask.appendChild(makeOptions)

    if (priority.value == "High") {
        newTask.style = "background-color: red;"
    }

    // check to see if the user checked if task is complete
    let doneOrNot = false;
    completeButton.addEventListener("change", function(){
        if (doneOrNot) {
            document.getElementById(newTask.id).style.textDecoration = "none"
            addStatus.innerHTML = "Done"
            doneOrNot = false
        } else {
            document.getElementById(newTask.id).style.textDecoration = "line-through"
            addStatus.innerHTML = "Undo"
            doneOrNot = true
        }
    })

    // if the delete button is clicked on specific task
    deleteButton.addEventListener("click", function(){
        document.getElementById(newTask.id).remove()
        console.log(tasks)
    })

    taskTable.appendChild(newTask) // add task to table

    console.log(JSON.stringify(tasks)); // print objects array in console
})
