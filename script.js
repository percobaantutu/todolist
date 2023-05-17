const addTaskButton = document.getElementById("addTaskButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.querySelector(".list");

addTaskButton.addEventListener("click", () => {
  const newTask = document.createElement("div");
  newTask.textContent = taskInput.value;
  newTask.classList.add("newList");
  taskList.appendChild(newTask);
  taskInput.value = "";
});
