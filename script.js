
const submit = document.getElementById("submit")
const taskmanager = document.getElementById("taskmanager")
// create element for delete button and date
let id = 0;
let tasks = []
submit.addEventListener("click", function(){
    const task = {
        id: null,
        name: null,
        priority: null,
        isImportant: null,
        isCompleted: false,
        date: null,
    }

    let taskName = document.getElementById("taskName")
    let priority = document.getElementById("priority")
    let important = document.getElementById("important")
    
    id += 1

    task.id = id;
    task.name = taskName.value;
    task.priority = priority.value;
    task.isImportant = important.value
    tasks.push(JSON.stringify(task))
    console.log(JSON.stringify(tasks));


    newTask = document.createElement("p")
    completeButton = document.createElement("button")
    // completeButton.id = "complete" + String(id) // prob dont use this
    console.log(completeButton)
    newTask.innerHTML = `Name: ${task.name} Priority: ${task.priority} Completed: ${task.isCompleted}`
    newTask.appendChild(completeButton)
    taskmanager.appendChild(newTask)
})


// checkboxes and how they work - how to check if it is checked or not
// dropdown menu
// add text in input button
// how to space out (prob css) tasks and make them look nice
// check to see how to select a child's parent for tasks
// strikethrough (while use background-Color: red for each task for importance)
// how to display or get date task was added
// MAKE SURE TO PREVENT INVALID INPUT SUCH AS EMPTY TASK NAMES DO THIS WITH AN ALERT

// make sure to do readme file
