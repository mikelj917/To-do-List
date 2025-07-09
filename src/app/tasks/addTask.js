import { renderTasks } from "../view/index.js";
import { state, isEditing } from "../state/index.js";

export function handleAddTask() {
  document.getElementById("addTask-btn").addEventListener("click", () => {
    if (isEditing()) return;
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Digite uma tarefa...");
      return;
    }

    addTask(taskText);
    renderTasks();
    taskInput.value = "";
  });

  function addTask(taskText) {
    state.tasks.push({
      id: Date.now().toString(),
      task: taskText,
      completed: false
    })
  }
}