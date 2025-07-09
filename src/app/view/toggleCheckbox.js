import { toggleTaskCompletion } from "../tasks/updateTask.js";
import { renderTasks } from "./render.js";
import { isEditing } from "../state/state.js";

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
}