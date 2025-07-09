import { handleFilter } from "./view/filter.js";
import { displaySavedTasks } from "./services/loadTasks.js";
import { handleEditTask } from "./tasks/editTask.js";
import { handleDeleteTask } from "./tasks/deleteTask.js";
import { handleToggleCheckbox } from "./view/toggleCheckbox.js";
import { handleAddTask } from "./tasks/addTask.js";

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  displaySavedTasks();
  handleFilter();
  handleAddTask();
  handleToggleCheckbox();
  handleEditTask();
  handleDeleteTask();
}