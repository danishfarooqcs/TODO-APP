document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.minHeight = "100vh";
document.body.style.backgroundColor = "#0f172a";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

// Task dropdown creation
let taskstatedropdown = document.createElement("select");

let option1 = document.createElement("option");
option1.value = "pending";
option1.text = "Pending";

taskstatedropdown.appendChild(option1);

let option2 = document.createElement("option");
option2.value = "completed";
option2.text = "Completed";

taskstatedropdown.appendChild(option2);

// Buttons

let completed = document.createElement("button");
completed.innerText = "Completed";

completed.style.padding = "7px 12px";
completed.style.border = "none";
completed.style.margin = "5px";
completed.style.borderRadius = "6px";
completed.style.backgroundColor = "blue";
completed.style.color = "white";
completed.style.cursor = "pointer";

let pending = document.createElement("button");
pending.innerText = "Pending";

pending.style.padding = "7px 12px";
pending.style.margin = "5px";
pending.style.border = "none";
pending.style.borderRadius = "6px";
pending.style.backgroundColor = "green";
pending.style.color = "white";
pending.style.cursor = "pointer";

let alltask = document.createElement("button");
alltask.innerText = "All task";

alltask.style.padding = "7px 12px";
alltask.style.border = "none";
alltask.style.margin = "5px";
alltask.style.borderRadius = "6px";
alltask.style.backgroundColor = "#dc2626";
alltask.style.color = "white";
alltask.style.cursor = "pointer";

// Adding buttons in main div

let taskbtndiv = document.createElement("div");

taskbtndiv.append(completed, pending, alltask);

let container = document.createElement("div");

container.style.width = "520px";
container.style.maxWidth = "90%";
container.style.padding = "35px";
container.style.backgroundColor = "#172554";
container.style.borderRadius = "16px";
container.style.boxSizing = "border-box";
container.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.35)";

container.className = "todo-container";

document.body.append(container);

let title = document.createElement("h1");

title.innerText = "My Todo List";

title.style.margin = "0";
title.style.marginBottom = "8px";
title.style.textAlign = "center";
title.style.color = "#ffffff";
title.style.fontSize = "32px";

container.append(title);

let description = document.createElement("p");

description.innerText = "Add and manage your daily tasks";

description.style.margin = "0";
description.style.marginBottom = "28px";
description.style.textAlign = "center";
description.style.color = "#bfdbfe";
description.style.fontSize = "14px";

container.append(description);

let inputArea = document.createElement("div");

inputArea.style.display = "flex";
inputArea.style.gap = "10px";
inputArea.style.marginBottom = "20px";

inputArea.className = "input-area";

container.append(inputArea);

let input = document.createElement("input");

input.type = "text";
input.placeholder = "Enter your task...";

input.style.flex = "1";
input.style.padding = "13px 15px";
input.style.border = "1px solid #3b82f6";
input.style.borderRadius = "8px";
input.style.backgroundColor = "#0f172a";
input.style.color = "#ffffff";
input.style.fontSize = "15px";
input.style.outline = "none";
input.style.boxSizing = "border-box";

inputArea.append(input);

let addButton = document.createElement("button");

addButton.innerText = "Add";

addButton.style.padding = "0 20px";
addButton.style.border = "none";
addButton.style.borderRadius = "8px";
addButton.style.backgroundColor = "#2563eb";
addButton.style.color = "#ffffff";
addButton.style.fontSize = "15px";
addButton.style.fontWeight = "bold";
addButton.style.cursor = "pointer";

inputArea.append(addButton);

let counter = document.createElement("p");

counter.innerText = "Tasks: 0";

counter.style.margin = "0";
counter.style.marginBottom = "12px";
counter.style.color = "#93c5fd";
counter.style.fontSize = "14px";

container.append(counter);

let taskContainer = document.createElement("div");

taskContainer.style.display = "flex";
taskContainer.style.flexDirection = "column";
taskContainer.style.gap = "10px";

taskContainer.className = "task-container";

container.append(taskContainer);
container.append(taskbtndiv);

let resetButton = document.createElement("button");

resetButton.innerText = "Reset All Tasks";

resetButton.style.width = "100%";
resetButton.style.marginTop = "20px";
resetButton.style.padding = "12px";
resetButton.style.border = "1px solid #475569";
resetButton.style.borderRadius = "8px";
resetButton.style.backgroundColor = "#1e293b";
resetButton.style.color = "#cbd5e1";
resetButton.style.fontSize = "14px";
resetButton.style.fontWeight = "bold";
resetButton.style.cursor = "pointer";

container.append(resetButton);

let count = 0;

addButton.addEventListener("click", () => {});

function updateCounter() {
  counter.innerText = "Tasks: " + count;
}

function createTask(taskText) {
  let task = document.createElement("div");

  task.className = "task";

  task.style.display = "flex";
  task.style.alignItems = "center";
  task.style.gap = "10px";
  task.style.padding = "12px";
  task.style.backgroundColor = "#1e3a8a";
  task.style.borderRadius = "8px";

  task.setAttribute("data-status", "pending");

  let taskTextElement = document.createElement("span");

  taskTextElement.innerText = taskText;

  taskTextElement.style.flex = "1";
  taskTextElement.style.color = "white";

  taskTextElement.className = "task-text";

  let editButton = document.createElement("button");

  editButton.innerText = "Edit";

  editButton.style.padding = "7px 12px";
  editButton.style.border = "none";
  editButton.style.borderRadius = "6px";
  editButton.style.backgroundColor = "#f59e0b";
  editButton.style.color = "white";
  editButton.style.cursor = "pointer";

  editButton.className = "edit-button";

  let deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";

  deleteButton.style.padding = "7px 12px";
  deleteButton.style.border = "none";
  deleteButton.style.borderRadius = "6px";
  deleteButton.style.backgroundColor = "#dc2626";
  deleteButton.style.color = "white";
  deleteButton.style.cursor = "pointer";

  deleteButton.className = "delete-button";

  // NEW STATUS DROPDOWN

  let statusSelect = document.createElement("select");

  let completedOption = document.createElement("option");

  completedOption.value = "completed";
  completedOption.textContent = "Completed";

  let pendingOption = document.createElement("option");

  pendingOption.value = "pending";
  pendingOption.textContent = "Pending";

  statusSelect.append(completedOption, pendingOption);

  statusSelect.value = "pending";

  statusSelect.style.backgroundColor = "#16a34a";
  statusSelect.style.color = "white";
  statusSelect.style.border = "none";
  statusSelect.style.borderRadius = "6px";
  statusSelect.style.padding = "9px 12px";
  statusSelect.style.fontSize = "16px";
  statusSelect.style.fontWeight = "bold";
  statusSelect.style.cursor = "pointer";
  statusSelect.style.outline = "none";

  task.append(taskTextElement, editButton, deleteButton, statusSelect);

  taskContainer.append(task);

  // STATUS CHANGE

  statusSelect.addEventListener("change", () => {
    task.setAttribute("data-status", statusSelect.value);
  });

  // EDIT BUTTON

  editButton.addEventListener("click", () => {
    let updateInput = document.createElement("input");

    updateInput.type = "text";
    updateInput.value = taskTextElement.innerText;

    updateInput.className = "update-input";

    let updateButton = document.createElement("button");

    updateButton.innerText = "Update";

    updateButton.className = "update-button";

    updateButton.style.color = "white";
    updateButton.style.backgroundColor = "blue";
    updateButton.style.fontWeight = "bold";
    updateButton.style.padding = "7px 12px";
    updateButton.style.border = "none";
    updateButton.style.borderRadius = "7px";
    updateButton.style.cursor = "pointer";

    taskTextElement.replaceWith(updateInput);
    editButton.replaceWith(updateButton);

    updateInput.style.backgroundColor = "white";
    updateInput.style.border = "2px solid";
    updateInput.style.borderRadius = "5px";
    updateInput.style.padding = "8px";
    updateInput.style.borderColor = "blue";
    updateInput.style.boxSizing = "border-box";

    updateInput.style.flex = "1";

    updateButton.addEventListener("click", () => {
      let newValue = updateInput.value.trim();

      if (newValue === "") {
        return;
      }

      taskTextElement.innerText = newValue;

      updateInput.replaceWith(taskTextElement);
      updateButton.replaceWith(editButton);
    });
  });

  // DELETE BUTTON

  deleteButton.addEventListener("click", () => {
    task.remove();

    count--;

    updateCounter();
  });

  count++;

  updateCounter();
}

// ADD TASK

addButton.addEventListener("click", () => {
  let value = input.value.trim();

  if (value === "") {
    return;
  }

  createTask(value);

  input.value = "";

  input.focus();
});

// ENTER KEY

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addButton.click();
  }
});

// RESET

resetButton.addEventListener("click", () => {
  taskContainer.innerHTML = "";

  count = 0;

  updateCounter();
});

// COMPLETED BUTTON

completed.addEventListener("click", () => {
  let tasks = taskContainer.children;

  for (let task of tasks) {
    if (task.getAttribute("data-status") === "completed") {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  }
});

// PENDING BUTTON

pending.addEventListener("click", () => {
  let tasks = taskContainer.children;

  for (let task of tasks) {
    if (task.getAttribute("data-status") === "pending") {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  }
});

// ALL TASKS BUTTON

alltask.addEventListener("click", () => {
  let tasks = taskContainer.children;

  for (let task of tasks) {
    task.style.display = "flex";
  }
});
