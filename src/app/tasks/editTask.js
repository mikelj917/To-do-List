import { setEditing } from "../state/state.js";

export function handleEditTask() {
  const taskList = document.getElementById("tasksList");
  setEditing(false);

  taskList.addEventListener("click", (event) => {
    const editBtn = event.target.closest(".edit-btn");
    if (!editBtn || isEditing()) return;

    const id = editBtn.dataset.id;
    const task = state.tasks.find(task => task.id === id);
    const taskElement = editBtn.closest("li");

    enterEditMode(taskElement, task);
  });

  function enterEditMode(taskElement, task) {
    setEditing(true);
    updateBtnsForConfirm(taskElement);

    const taskSpan = taskElement.querySelector("span");
    const inputEl = createInputEl(taskSpan);

    // Substitui o span pelo input
    taskElement.replaceChild(inputEl, taskSpan);
    inputEl.focus();

    // Configura os eventos de confirmação e cancelamento
    handleConfirmEdit(taskElement, task, inputEl);
    handleCancelEdit(taskElement, inputEl);
  }

  function createInputEl(taskSpan) {
    const inputEl = document.createElement("input");
    document.activeElement.blur();
    inputEl.type = "text";
    inputEl.value = taskSpan.innerText;
    inputEl.className = "grow-1 mr-3 bg-zinc-100 border border-zinc-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-green-500";
    return inputEl;
  }

  function updateBtnsForConfirm(taskElement) {
    const editBtn = taskElement.querySelector(".edit-btn");
    const deleteBtn = taskElement.querySelector(".delete-btn");
    const checkbox = taskElement.querySelector(".complete-checkbox");
    const confirmBtn = taskElement.querySelector(".confirm-btn");
    const cancelBtn = taskElement.querySelector(".cancel-btn");

    editBtn.classList.add("hidden");
    deleteBtn.classList.add("hidden");
    checkbox.classList.add("hidden");
    confirmBtn.classList.remove("hidden");
    cancelBtn.classList.remove("hidden");
  }

  function handleConfirmEdit(taskElement, task, inputEl) {
    const confirmBtn = taskElement.querySelector(".confirm-btn");

    // Remove listener anterior para evitar múltiplos handlers
    confirmBtn.replaceWith(confirmBtn.cloneNode(true));
    const newConfirmBtn = taskElement.querySelector(".confirm-btn");

    newConfirmBtn.addEventListener("click", () => saveEditedTask(task, inputEl));

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") saveEditedTask(task, inputEl);
    });
  }

  function saveEditedTask(task, inputEl) {
    const newValue = inputEl.value.trim();
    if (newValue.length === 0) {
      alert("A tarefa não pode estar vazia!");
      return;
    }

    task.task = newValue;
    setEditing(false);

    renderTasks();
  }

  function handleCancelEdit(taskElement, inputEl) {
    const cancelBtn = taskElement.querySelector(".cancel-btn");

    // Remove listener anterior para evitar múltiplos handlers
    cancelBtn.replaceWith(cancelBtn.cloneNode(true));
    const newCancelBtn = taskElement.querySelector(".cancel-btn");

    newCancelBtn.addEventListener("click", () => {
      renderTasks();
      setEditing(false);
    })

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        renderTasks();
        setEditing(false);
      }
    });
  }
}