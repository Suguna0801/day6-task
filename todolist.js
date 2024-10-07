function addtask() {
    const taskInput = document.getElementById("input")
    const task = taskInput.value.trim()
    if (task === "") {
        alert("Please enter a task.")
        return;
    }
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const taskList = document.getElementById("tasklist")
    const li = document.createElement("li")
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through"
        } else {
            label.style.textDecoration = "none"
        }
    });
    const label = document.createElement("span")
    label.textContent = task
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delete-btn")
    deleteBtn.onclick = function () {
        taskList.removeChild(li)
    };
    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(deleteBtn)
    taskList.appendChild(li)
    taskInput.value = ""
}


