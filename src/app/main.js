import { handleEditTask, handleDeleteTask, handleAddTask } from "./tasks/index.js";
import { handleFilter, handleToggleCheckbox } from "./view/index.js";
import { displaySavedTasks } from "./services/loadTasks.js";

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  displaySavedTasks();
  handleFilter();
  handleAddTask();
  handleToggleCheckbox();
  handleEditTask();
  handleDeleteTask();
}