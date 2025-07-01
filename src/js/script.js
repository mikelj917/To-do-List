let tasks = [];

// Add tasks to the array(tasks)
document.getElementById("addTask-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  taskText = taskInput.value.trim();

  if(taskText === "") {
    return alert("Digite uma tarefa...")
  }

  tasks.push({
    task: taskText,
    completed: false
  })
  
  taskInput.value = "";
});