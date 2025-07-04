const filterBtnStates = {
  idle: "cursor-pointer rounded-md bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-300",
  active: "cursor-pointer rounded-md bg-green-500 px-4 py-1 text-sm font-medium text-white transition-colors",
}
const taskElementStates = {
  pending: "flex items-center rounded-lg bg-zinc-200/30 p-3",
  completed: "flex items-center rounded-lg bg-green-100/80 p-3 line-through opacity-70",
}
const state = {
  isEditing: false,
}

let tasks = [];

document.addEventListener("DOMContentLoaded", initializeApp());

function initializeApp() {
  setupFilter();
  setupAddTask();
  setupToggleCheckbox();
  setupEditTask();
  setupDeleteTask();
}

function setupAddTask() {
  document.getElementById("addTask-btn").addEventListener("click", () => {
    if (state.isEditing) return;
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Digite uma tarefa...");
      return;
    }

    addTask(taskText);
    renderTasks();
    taskInput.value = "";
  });
}

function addTask(taskText) {
  tasks.push({
    id: Date.now().toString(),
    task: taskText,
    completed: false
  })
}

function setupFilter() {
  const filterBtns = document.querySelectorAll("#filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (state.isEditing) return;
      filterBtns.forEach((btn) => {
        btn.dataset.active = false;
        btn.className = filterBtnStates.idle;
      });

      btn.dataset.active = true;
      btn.className = filterBtnStates.active;

      const filter = btn.dataset.filter;
      renderTasks(filter);
    });
  })
}

function filterTasks(filter = "all") {
  return tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  })
}

function renderTasks(filter) {
  const taskList = document.getElementById("tasksList");
  const filteredTasks = filterTasks(filter);
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.className = `${task.completed ? taskElementStates.completed : taskElementStates.pending}`
    taskElement.innerHTML = `
      <input
        type="checkbox"
        class="complete-checkbox mr-3 cursor-pointer"
        data-id="${task.id}"
        ${task.completed ? "checked" : ""}
      />
      <span class="grow-1">${task.task}</span>
      <div class="flex justify-end gap-2">
        <button class="confirm-btn cursor-pointer rounded-sm bg-green-500 px-2 py-1 hidden hover:bg-green-400" data-id="${task.id}">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </button>
        <button class="cancel-btn cursor-pointer rounded-sm bg-red-500 px-2 py-1 hidden hover:bg-red-400" data-id="${task.id}">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

        </button>
        <button class="edit-btn cursor-pointer rounded-sm bg-blue-500 px-2 py-1 hover:bg-blue-400" data-id="${task.id}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
          </svg>
        </button>
        <button class="delete-btn cursor-pointer rounded-sm bg-red-500 px-2 py-1 hover:bg-red-400" data-id="${task.id}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>`

    taskList.appendChild(taskElement);
  })

  countTasks();
}

function setupToggleCheckbox() {
  const taskList = document.getElementById("tasksList");

  taskList.addEventListener("click", (event) => {
    if (state.isEditing) return;
    const checkbox = event.target.closest(".complete-checkbox");
    if (checkbox) {
      const id = checkbox.dataset.id;
      const foundTask = tasks.find(task => task.id === id);
      if (foundTask) {
        foundTask.completed = event.target.checked
      }

      renderTasks();
    }
  })
}

function setupDeleteTask() {
  const taskList = document.getElementById("tasksList");

  taskList.addEventListener("click", (event) => {
    if (state.isEditing) return;
    const deleteBtn = event.target.closest(".delete-btn");
    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      const index = tasks.findIndex(task => task.id === id);
      if (index > -1) {
        tasks.splice(index, 1);
      }

      renderTasks();
    }
  })
}

function setupEditTask() {
  const taskList = document.getElementById("tasksList");
  state.isEditing = false;

  taskList.addEventListener("click", (event) => {
    const editButton = event.target.closest(".edit-btn");
    if (!editButton || state.isEditing) return;

    const id = editButton.dataset.id;
    const task = tasks.find(task => task.id === id);
    const taskElement = editButton.closest("li");

    enterEditMode(taskElement, task);
  });

  function enterEditMode(taskElement, task) {
    state.isEditing = true;
    updateButtonsForConfirm(taskElement);

    const taskSpan = taskElement.querySelector("span");
    const inputEl = createInputEl(taskSpan);

    // Substitui o span pelo input
    taskElement.replaceChild(inputEl, taskSpan);
    inputEl.focus();

    // Configura os eventos de confirmação e cancelamento
    setupConfirmEdit(taskElement, task, inputEl);
    setupCancelEdit(taskElement, inputEl);
  }

  function createInputEl(taskSpan) {
    const inputEl = document.createElement("input");
    document.activeElement.blur();
    inputEl.type = "text";
    inputEl.value = taskSpan.innerText;
    inputEl.className = "grow-1 mr-3 bg-zinc-100 border border-zinc-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-green-500";
    return inputEl;
  }

  function updateButtonsForConfirm(taskElement) {
    const editButton = taskElement.querySelector(".edit-btn");
    const deleteButton = taskElement.querySelector(".delete-btn");
    const checkbox = taskElement.querySelector(".complete-checkbox");
    const confirmButton = taskElement.querySelector(".confirm-btn");
    const cancelButton = taskElement.querySelector(".cancel-btn");

    editButton.classList.add("hidden");
    deleteButton.classList.add("hidden");
    checkbox.classList.add("hidden");
    confirmButton.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
  }

  function setupConfirmEdit(taskElement, task, inputEl) {
    const confirmButton = taskElement.querySelector(".confirm-btn");

    // Remove listener anterior para evitar múltiplos handlers
    confirmButton.replaceWith(confirmButton.cloneNode(true));
    const newConfirmButton = taskElement.querySelector(".confirm-btn");

    newConfirmButton.addEventListener("click", () => saveEditedTask(task, inputEl));

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
    state.isEditing = false;

    renderTasks();
  }

  function setupCancelEdit(taskElement, inputEl) {
    const cancelButton = taskElement.querySelector(".cancel-btn");

    // Remove listener anterior para evitar múltiplos handlers
    cancelButton.replaceWith(cancelButton.cloneNode(true));
    const newCancelButton = taskElement.querySelector(".cancel-btn");

    newCancelButton.addEventListener("click", () => {
      renderTasks();
      state.isEditing = false;
    })

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        renderTasks();
        state.isEditing = false;
      }
    });
  }
}

function countTasks() {
  const pendingTasks = tasks.filter(task => !task.completed).length;
  document.getElementById("counter").innerHTML = pendingTasks;
}