import { setupAddTask, setupFilterBtns } from "pages/home/view/setups";

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  setupAddTask();
  setupFilterBtns();
}
