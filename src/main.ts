import { renderTasks } from "pages/home/view/render/renderTasks";
import { setupAddTask, setupFilterBtns } from "pages/home/view/setups";

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  renderTasks();
  setupAddTask();
  setupFilterBtns();
}
