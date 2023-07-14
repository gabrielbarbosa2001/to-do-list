// Obtém os elementos do HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Adiciona um ouvinte de evento de clique no botão "Adicionar"
addButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task";
    taskSpan.innerText = taskText;

    const deleteButton = document.createElement("span");
    deleteButton.className = "delete";
    deleteButton.innerText = "X";

    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// Adiciona um ouvinte de evento de clique em toda a lista de tarefas
taskList.addEventListener("click", function(event) {
  const element = event.target;

  if (element.classList.contains("delete")) {
    element.parentElement.remove();
  } else if (element.classList.contains("check")) {
    element.nextElementSibling.classList.toggle("completed");
  }
});

function clearToDoList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}
const removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", clearToDoList);