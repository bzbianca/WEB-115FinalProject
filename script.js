
const submit = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")
let taskTable = document.getElementById("taskTable")

let id = 0; // id num of task
let tasks = [] // object task list
let taskTracker = [] // track which task is which as an array
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
    
    // let date = new Date()
    // getMonth()
    // getDay()
    // getYear()
    // gets all input needed for creating task
    let taskName = document.getElementById("taskName")
    let priority = document.getElementById("priority")
    let important = document.getElementById("important")
    
    id += 1
    taskTracker.push(id)
    console.log(taskTracker)

    // add all input into task object
    task.id = id;
    task.name = taskName.value;
    task.priority = priority.value;
    task.isImportant = important.checked
    tasks.push(JSON.stringify(task))
    console.log(JSON.stringify(tasks));

    // ---adding task to table---
    newTask = document.createElement("tr") // create row task

    // add information
    makeTaskName = document.createElement("td") // create task name element
    makeTaskName.id = "task" + String(id)
    makeTaskName.innerHTML = taskName.value
    newTask.appendChild(makeTaskName)

    makePriority = document.createElement("td") // create task name element
    makePriority.innerHTML = priority.value
    newTask.appendChild(makePriority)

    

    makeOptions = document.createElement("td") // for both the completion and delete buttons
    completeButton = document.createElement("input") // create complete checkbox
    completeButton.type = "checkbox" // makes input into a checkbox
    completeButton.innerHTML = "Done"
    // completeButton.id = "complete" + String(id) // gives button an id
    makeOptions.appendChild(completeButton)

    deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.innerHTML = "Delete"
    makeOptions.appendChild(deleteButton)

    if (priority.value == "High") {
        newTask.style = "background-color: red;"
        // newTask.style = "border-color: red;"
    }

    newTask.appendChild(makeOptions)

    taskTable.appendChild(newTask)
})


    

// completeButton = document.createElement("input") // create complete checkbox
// completeButton.type = "checkbox" // makes input into a checkbox
// completeButton.textContent = "Done"
// completeButton.id = "complete" + String(id) // gives button an id
// taskmanager.append(completeButton)
// completeButton.addEventListener("change", function(){
//     console.log("helo")
// })

// how to delete individual/its own row
// how to space cells
// how to add text next to checkbox
// MAKE SURE TO ADD THE DATE

// checkboxes and how they work - how to check if it is checked or not
// check to see how to select a child's parent for tasks
// strikethrough (while use background-Color: red for each task for importance)
// how to add alerts like the credit card assignment MAKE SURE TO PREVENT INVALID INPUT SUCH AS EMPTY TASK NAMES DO THIS WITH AN ALERT

// make sure to do readme file
