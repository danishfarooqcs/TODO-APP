completed.addEventListener("click", () => {
  container.append(completedtasks);
});

pending.addEventListener("click", () => {
  container.append(pendingtasks);
});

alltask.addEventListener("click", () => {
  container.append(task);
});

container.append(taskbtndiv);

// ===============================
// 1. STATUS DROPDOWN
// ===============================

let statusSelect = document.createElement("select");

let completedOption = document.createElement("option");
completedOption.value = "completed";
completedOption.textContent = "Completed";

let pendingOption = document.createElement("option");
pendingOption.value = "pending";
pendingOption.textContent = "Pending";

statusSelect.append(completedOption, pendingOption);

statusSelect.style.backgroundColor = "#16a34a";
statusSelect.style.color = "white";
statusSelect.style.border = "none";
statusSelect.style.borderRadius = "6px";
statusSelect.style.padding = "9px 12px";
statusSelect.style.fontSize = "16px";
statusSelect.style.fontWeight = "bold";
statusSelect.style.cursor = "pointer";
statusSelect.style.outline = "none";

// ===============================
// 2. GIVE TASK INITIAL STATUS
// ===============================

// Every new task starts as Pending

task.setAttribute("data-status", "pending");

// ===============================
// 3. ADD DROPDOWN TO TASK
// ===============================

task.append(taskTextElement, editButton, deleteButton, statusSelect);

// ===============================
// 4. DROPDOWN CHANGE EVENT
// ===============================

// Runs whenever user changes
// Pending → Completed
// Completed → Pending

statusSelect.addEventListener("change", () => {
  task.setAttribute("data-status", statusSelect.value);
});

// ===============================
// 5. COMPLETED BUTTON
// ===============================

// Show only completed tasks

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

// ===============================
// 6. PENDING BUTTON
// ===============================

// Show only pending tasks

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

// ===============================
// 7. ALL TASKS BUTTON
// ===============================

// Show every task

alltask.addEventListener("click", () => {
  let tasks = taskContainer.children;

  for (let task of tasks) {
    task.style.display = "flex";
  }
});

taskstatedropdown.className = "taskstate";
let taskstatebtn = document.createElement("button");
taskstatebtn.innerText = "Pending";
taskstatebtn.style.padding = "7px 12px";
taskstatebtn.style.border = "none";
taskstatebtn.style.borderRadius = "6px";
taskstatebtn.style.backgroundColor = "#dc2626";
taskstatebtn.style.color = "white";
taskstatebtn.style.cursor = "pointer";

let taskstatediv = document.createElement("div");
taskstatediv.append(taskstatedropdown);

task.append(taskTextElement, editButton, deleteButton, taskstatediv);
