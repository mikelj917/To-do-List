import { updateUI } from "../render/updateUI";
import {
  getTaskById,
  isEditing,
  removeTaskById,
  startEditing,
  stopEditing,
} from "pages/home/state";
import type { TaskType } from "pages/home/types";

export function handleEditTask(event: Event) {
  const editBtn = (event.target as HTMLElement).closest(
    ".edit-btn",
  ) as HTMLElement;
  if (!editBtn || isEditing()) return;

  const id = editBtn.dataset.id ?? "";
  const task = getTaskById(id);
  const taskElement = editBtn.closest("li");
  if (!taskElement || !task) return;

  enterEditMode(taskElement, task);
}

function enterEditMode(taskElement: HTMLLIElement, task: TaskType) {
  startEditing();
  setTaskEditModeButtons(taskElement);

  const taskSpan = taskElement.querySelector("span");
  if (!taskSpan) return;
  const inputEl = createInputEl(taskSpan);

  taskElement.replaceChild(inputEl, taskSpan);
  inputEl.focus();

  handleConfirmEdit(taskElement, task, inputEl);
  handleCancelEdit(taskElement, inputEl);

  function createInputEl(span: HTMLSpanElement) {
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.value = span.innerText;
    inputEl.className =
      "grow-1 mr-3 bg-zinc-100 border border-zinc-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-green-500";
    return inputEl;
  }
}

function handleConfirmEdit(
  taskElement: HTMLLIElement,
  task: TaskType,
  inputEl: HTMLInputElement,
) {
  const confirmBtn = taskElement.querySelector(".confirm-btn");
  confirmBtn?.addEventListener("click", () => saveEditedTask(task, inputEl), {
    once: true,
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEditedTask(task, inputEl);
  });

  function saveEditedTask(task: TaskType, inputEl: HTMLInputElement) {
    const newValue = inputEl.value.trim();
    if (newValue.length === 0) {
      removeTaskById(task.id);
    } else {
      task.task = newValue;
    }

    stopEditing();
    updateUI();
  }
}

function handleCancelEdit(
  taskElement: HTMLLIElement,
  inputEl: HTMLInputElement,
) {
  const cancelBtn = taskElement.querySelector(".cancel-btn");
  cancelBtn?.addEventListener(
    "click",
    () => {
      updateUI();
      stopEditing();
    },
    { once: true },
  );

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      updateUI();
      stopEditing();
    }
  });
}

function setTaskEditModeButtons(taskElement: HTMLLIElement) {
  const editBtn = taskElement.querySelector(".edit-btn");
  const deleteBtn = taskElement.querySelector(".delete-btn");
  const checkbox = taskElement.querySelector(".complete-checkbox");
  const confirmBtn = taskElement.querySelector(".confirm-btn");
  const cancelBtn = taskElement.querySelector(".cancel-btn");

  editBtn?.classList.add("hidden");
  deleteBtn?.classList.add("hidden");
  checkbox?.classList.add("hidden");
  confirmBtn?.classList.remove("hidden");
  cancelBtn?.classList.remove("hidden");
}