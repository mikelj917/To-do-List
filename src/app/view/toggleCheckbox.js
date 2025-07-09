import { renderTasks } from "./index.js";
import { state, isEditing } from "../state/index.js";

export function handleToggleCheckbox() {
  const taskList = document.getElementById("tasksList");

  taskList.addEventListener("click", (event) => {
    if (isEditing()) return;
    const checkbox = event.target.closest(".complete-checkbox");
    if (checkbox) {
      const id = checkbox.dataset.id;
      toggleTaskCompletion(id, checkbox.checked);
      renderTasks();
    }
  })

  function toggleTaskCompletion(id, completed) {
    const task = state.tasks.find(task => task.id === id);
    if (task) task.completed = completed
  }
}