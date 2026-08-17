



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