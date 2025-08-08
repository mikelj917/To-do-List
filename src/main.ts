import { updateUI } from "pages/home/controller/updateUI";
import {
  setupAddTask,
  setupDeleteTask,
  setupFilterBtns,
  setupToggleTask,
} from "pages/home/view/setups";

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  updateUI();
  setupAddTask();
  setupFilterBtns();
  setupToggleTask();
  setupDeleteTask();
}
