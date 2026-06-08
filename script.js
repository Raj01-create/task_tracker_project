
// Add a new task.
    let taskInput = document.getElementById("new-task");

    // first button
    let addButton = document.getElementsByTagName("button")[0];

    // ul of #incomplete-tasks
    let incompleteTaskHolder = document.getElementById("incomplete-tasks");

    // completed-tasks
    let completedTasksHolder = document.getElementById("completed-tasks");

    /*---- Part 1 ----*/
    // function to create a new task item
    let createNewTaskElement = function (taskString) {

        let listItem = document.createElement("li");

        // input (checkbox)
        let checkBox = document.createElement("input");
        // label
        let label = document.createElement("label");
        // input (text)
        let editInput = document.createElement("input");
        // button.edit
        let editButton = document.createElement("button");

        // button.delete
        let deleteButton = document.createElement("button");

        label.innerText = taskString;

        // Each element needs appending
        checkBox.type = "checkbox";
        editInput.type = "text";


        // innerText encodes special characters, HTML does not.
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";

        // Append elements
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        return listItem;
    }

     let addTask = function () {
    
            let listItem = createNewTaskElement(taskInput.value);
    
            if (taskInput.value === "") {
                return;
            }
    
            // Append listItem to incompleteTaskHolder
            incompleteTaskHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);
    
            taskInput.value = "";
    
        }

