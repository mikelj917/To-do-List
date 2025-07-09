import { renderTasks } from "../view/render.js";
import { isEditing } from "../state/state.js";

export function handleDeleteTask() {
  const taskList = document.getElementById("tasksList");

  taskList.addEventListener("click", (event) => {
    if (isEditing()) return;
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      const index = state.tasks.findIndex(task => task.id === id);
      if (index > -1) {
        state.tasks.splice(index, 1);
      }

      renderTasks();
    }
  })
}